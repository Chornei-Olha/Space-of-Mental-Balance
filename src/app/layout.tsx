import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const SITE_NAME = "Solterra";
const SITE_DESCRIPTION =
  "Suchen Sie nette, fleißige, erfahrene Betreuerinnen für Ihre Eltern? Wir bieten häusliche 24 Stunden Seniorenbetreuung und Haushalte in Österreich und Deutschland.";
// const DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

export const metadata: Metadata = {
  title: "Solterra",
  description:
    "Suchen Sie nette, fleißige, erfahrene Betreuerinnen für Ihre Eltern? Wir bieten häusliche 24 Stunden Seniorenbetreuung und Haushalte in Österreich und Deutschland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* HTML Meta Tags */}
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        {/* Facebook Meta Tags */}
        {/* <meta property="og:url" content={DOMAIN} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
