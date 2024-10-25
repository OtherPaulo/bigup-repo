import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIG DEAL MARKETING - Agência de Estratégias Digitais",
  description: "Agência #1 em Soluções e Estratégias Digitais.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Paulo",
      url: "https://portifolio.devpaulorodrigues.tech",
    },
  ],
  openGraph: {
    title: "BIG DEAL MARKETING - Agência de Estratégias Digitais",
    description: "Agência #1 em Soluções e Estratégias Digitais.",
    images: [
      {
        url: "https://bigup.devpaulorodrigues.tech/preview-bigup.jpeg",
        alt: "Agência #1 em Soluções e Estratégias Digitais.",
      }
    ],
    authors: "Paulo",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
