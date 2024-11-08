import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/custom/googleTagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIG DEAL MARKETING - Agência de Estratégias Digitais",
  description: "Agência de Soluções e Estratégias Digitais.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Paulo",
      url: "https://portfolio.devpaulorodrigues.tech",
    },
  ],
  openGraph: {
    title: "BIG DEAL MARKETING - Agência de Estratégias Digitais",
    description: "Agência de Soluções e Estratégias Digitais.",
    images: [
      {
        url: "https://www.bigdealmarketing.com.br/preview-bigdeal.png",
        alt: "Agência de Soluções e Estratégias Digitais.",
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
    <html lang="pt-br">
      <head>
        {/* <GoogleTagManager containerId="GTM-T4DLRNBG" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
