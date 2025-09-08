import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";
import { SearchInput } from "@/components/searchInput";
import type { GameProps } from "@/utils/types/game";

async function getData(title: string) {
  try {
    const decodedTitle = decodeURI(title);
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodedTitle}`
    );

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

interface SearckPageProps {
  params: Promise<{ title: string }>;
}

export default async function Search({ params }: SearckPageProps) {
  const games: GameProps[] | null = await getData((await params).title);

  return (
    <main className="w-full">
      <Container>
        <SearchInput />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos em nossa base
        </h1>

        {!games ? (
          <p>Não encontramos nenhum jogo com esse título</p>
        ) : (
          <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => (
              <GameCard key={game.id} data={game} />
            ))}
          </section>
        )}
      </Container>
    </main>
  );
}
