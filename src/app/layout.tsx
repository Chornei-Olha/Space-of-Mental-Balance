import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Импортируем шрифты
const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

const SITE_NAME = "Peace of MindTherapy";
const SITE_DESCRIPTION =
  "We combine professional therapeutic practices with creative methods to help you restore harmony of body, mind and spirit.";

export const metadata: Metadata = {
  title: "Peace of MindTherapy",
  description:
    "We combine professional therapeutic practices with creative methods to help you restore harmony of body, mind and spirit.",
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
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
      </Head>
      <body className={`${instrumentSans.className}`}>{children}</body>
    </html>
  );
}
