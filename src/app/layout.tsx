import type { Metadata } from "next";
import { Inter as FontSans, Bayon } from "next/font/google";
import "./globals.css";
import { cn } from "@tsv/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bayon = Bayon({
  subsets: ["latin"],
  variable: "--font-bayon",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tout sur ma ville - Accueil",
  description: "Tout sur ma ville",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          bayon.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
