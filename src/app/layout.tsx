import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Next Play",
  description: "Uma plataforma de catalogo de jogos moderna que você pode encontrar variados jogos diversos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="dark:bg-zinc-800 dark:*:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
