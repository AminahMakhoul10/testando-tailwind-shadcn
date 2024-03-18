import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blob.g",
  description: "Noticias do mundo dos códigos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-zinc-900 text-zinc-100 mb-40')}> 
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}

//tem q tirar o {children} da linha 23 para o cabecalo nao ficar duplicado