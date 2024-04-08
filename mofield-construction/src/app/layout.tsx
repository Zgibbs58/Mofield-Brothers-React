import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mofield Brothers Construction Company, trusted Tennessee contractors",
  description: "Mofield Brothers Construction Site showing expertise in Water and Sewer lines, excavation, and directional drilling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="mytheme" lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
