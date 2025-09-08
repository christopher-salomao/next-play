import { Container } from "@/components/container";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Play | Meu Perfil",
  description: "Personalize sua conta Next Play do seu jeito",
};

export default function Perfil() {
  return (
    <main>
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 flex-col sm:flex-row justify-center sm:justify-normal">
            <div className="rounded-full w-56 h-56 relative">
              <Image
                src="/user.png"
                alt="Foto de perfil do usuário"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                className="rounded-full w-56 h-56 object-cover"
              />
            </div>
            <h1 className="font-bold text-2xl">Sujeito Jogador</h1>
          </div>
          <div className="text-white dark:text-black sm:absolute top-0 right-0 flex items-center justify-center gap-3">
            <button className="bg-gray-700 dark:bg-gray-300 px-4 py-3 rounded-lg">
              Configurações
            </button>
            <button className="bg-gray-700 dark:bg-gray-300 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-1 flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-1 flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-1 flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
