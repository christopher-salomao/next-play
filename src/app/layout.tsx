import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Next Play - Descubra os melhores jogos para se divertir",
  description:
    "Uma plataforma de catalogo de jogos moderna que você pode encontrar variados jogos diversos.",
  keywords: [
    "games",
    "jogos",
    "pc",
    "ps4",
    "xbox",
    "steam",
    "playstation",
    "catalogo",
    "epic",
    "gog",
    "nintendo",
    "switch",
  ],
  openGraph: {
    images: [`${process.env.NEXT_API_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  },
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
