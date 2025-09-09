"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="w-full h-[calc(100vh-112px)]  flex flex-col items-center justify-center gap-2">
      <h1 className="font-bold text-2xl">Ops, algo deu errado</h1>
      <Link href="/" className="py-2 px-4 bg-[#DC4240] rounded-lg text-white hover:scale-105 transition-all duration-300">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
