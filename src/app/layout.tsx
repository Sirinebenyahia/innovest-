import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innovest — Connecte startups & investisseurs",
  description: "Plateforme inspirée de Gust : démarre, grandis, lève des fonds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
