import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Making Publicidade | Transformação Digital",
  description: "A melhor maneira de gerenciar seus clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable} scroll-smooth antialiased`}>
      <body className="font-body bg-background text-on-surface antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
