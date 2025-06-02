import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

// Импортируем шрифты
const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

const SITE_NAME = "Peace of MindTherapy";
const SITE_DESCRIPTION =
  "We combine professional therapeutic practices with creative methods to help you restore harmony of body, mind and spirit.";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className}`}>{children}</body>
    </html>
  );
}
