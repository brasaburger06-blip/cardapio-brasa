import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRASA BURGER",
  description: "CARDAPIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
<meta name="viewport" 
  content="width=1200, initial-scale=1, maximum-scale=1"
/>


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased width=1200`}
      >
        {children}
       
      </body>
    </html>
  );
}
