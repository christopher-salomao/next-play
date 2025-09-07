import type { Metadata } from "next";
import "./globals.css";

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
      <body className="dark:bg-gray-800 dark:text-white">{children}</body>
    </html>
  );
}
