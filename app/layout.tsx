import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "CyberTerm — Платформа мікронавчання з кібербезпеки",
  description:
    "Інтерактивна платформа для вивчення термінів кібербезпеки. 30 днів навчання, словник та міні-тести.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
