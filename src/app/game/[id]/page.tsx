import { redirect } from "next/navigation";
import Image from "next/image";

import { Container } from "@/components/container"
import type { GameProps } from "@/utils/types/game";

async function getData(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`);
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Game({ params }: { params: { id: string } }) {
  const game: GameProps = await getData(params.id);

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
          objectFit="cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          className="h-80 sm:h-96 opacity-70 transition-all duration-300"
        />
      </div>
      <Container>
        <div></div>
      </Container>
    </main>
  );
}
