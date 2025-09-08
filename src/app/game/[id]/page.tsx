import { redirect } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Label } from "./components/label";

import type { GameProps } from "@/utils/types/game";
import { GameCard } from "@/components/gameCard";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const game: GameProps = await getData((await params).id);

  if (!game) {
    return {
      title: "Next Play | Descubra os melhores jogos para se divertir",
    };
  }

  return {
    title: "Next Play | " + game.title,
    description: `${game.description.slice(0, 100)}...`,
    openGraph: {
      title: "Next Play | " + game.title,
      images: [game.image_url],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}

async function getData(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 320 } }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

async function getGameSorted() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Game({ params }: ParamsProps) {
  const game: GameProps = await getData((await params).id);

  const gameSorted: GameProps = await getGameSorted();

  if (!game) {
    redirect("/");
  }

  return (
    <main className="w-full">
      <div className="w-full h-80 sm:h-96 bg-black  relative">
        <Image
          src={game.image_url}
          alt={game.title}
          priority
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          className="h-80 sm:h-96 opacity-70 transition-all duration-300 object-cover"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{game.title}</h1>
        <p className="text-justify">{game.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias:</h2>
        <div className="flex flex-wrap gap-2">
          {game.categories.map((category) => (
            <Label key={category} name={category} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas:</h2>
        <div className="flex flex-wrap gap-2">
          {game.platforms.map((platform) => (
            <Label key={platform} name={platform} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Lancamento:</strong> {game.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">
          Separamos um jogo exclusivamente para você:
        </h2>

        <div className="flex">
          <div className="grow">
            <GameCard data={gameSorted} />
          </div>
        </div>
      </Container>
    </main>
  );
}
