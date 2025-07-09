import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domine Seu Tempo, Transforme Sua Vida - eBook de Produtividade",
  description:
    "O guia prático para produtividade e organização que vai revolucionar sua rotina. Aprenda métodos como Pomodoro, GTD e Matriz de Eisenhower.",
  keywords: [
    "produtividade",
    "organização",
    "gestão do tempo",
    "procrastinação",
    "ebook produtividade",
    "gtd",
    "pomodoro",
    "desenvolvimento pessoal",
  ],
  authors: [{ name: "Domine Seu Tempo" }],
  metadataBase: new URL("https://domineseutempo.vercel.app"),
  openGraph: {
    title: "Domine Seu Tempo, Transforme Sua Vida",
    description:
      "O guia prático para produtividade e organização que vai transformar seu dia a dia.",
    type: "website",
    locale: "pt_BR",
    url: "https://domineseutempo.vercel.app",
    images: [
      {
        url: "/capa-ebook.jpg",
        width: 1200,
        height: 630,
        alt: "Capa do eBook Domine Seu Tempo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domine Seu Tempo, Transforme Sua Vida",
    description:
      "O guia prático para produtividade e organização que vai transformar seu dia a dia.",
    images: ["/capa-ebook.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
