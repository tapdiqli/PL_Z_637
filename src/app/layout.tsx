import type { Metadata } from "next";
import { Nunito, Rubik } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReelSorte | Melhores Casinos Online Portugal 2026 — Bónus VIP",
  description:
    "Guia especializado dos melhores casinos online em Portugal. Compare bónus de casino, slots, roleta ao vivo e levantamentos rápidos. Análises independentes para jogadores VIP.",
  keywords: [
    "casinos online Portugal",
    "melhores casinos online",
    "bónus casino Portugal",
    "casino online bónus",
    "slots online Portugal",
    "jogos de casino",
    "casino VIP",
    "ReelSorte",
  ],
  metadataBase: new URL("https://reelsorte.com"),
  alternates: {
    canonical: "https://reelsorte.com",
  },
  openGraph: {
    title: "ReelSorte | Melhores Casinos Online Portugal — Bónus Exclusivos",
    description:
      "Descubra os melhores casinos online licenciados em Portugal com bónus exclusivos, slots premium e pagamentos verificados. Guia VIP ReelSorte.",
    url: "https://reelsorte.com",
    siteName: "ReelSorte",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${nunito.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
