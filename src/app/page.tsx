import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/container";
import { SearchInput } from "@/components/searchInput";
import { GameCard } from "@/components/gameCard";
import { BsArrowRightSquare } from "react-icons/bs";

import type { GameProps } from "@/utils/types/game";

async function getDailyGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

async function getGamesData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games`,
      { next: { revalidate: 320 } }
    );

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();
  const gamesData: GameProps[] = await getGamesData();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivamente para você
        </h1>
        <Link href={`/game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex items-center justify-center gap-2">
                <p className="font-bold text-white texxt-xl">
                  {dailyGame.title}
                </p>
                <BsArrowRightSquare size={24} color="#ffffff" />
              </div>
              <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
                priority
                quality={100}
                objectFit="cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                className="max-h-96 rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </section>
        </Link>

        <SearchInput />

        <h2 className="text-lg font-bold mt-8 mb-5">Jogos Populares</h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gamesData.map((game) => (
            <GameCard key={game.id} data={game} />
          ))}
        </section>
      </Container>
    </main>
  );
}
