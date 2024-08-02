import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";
import { Analytics } from "@vercel/analytics/react";

const rokkitt = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mofield Brothers | Construction Contractors in Tennessee",
  description:
    "Mofield Brothers Construction Company is a trusted Tennessee contractor specializing in water and sewer lines, directional drilling, excavation, and hauling.",
  keywords: ["construction", "contractor", "Tennessee", "water and sewer", "directional drilling", "excavation", "hauling"],
  robots: "index, follow",
  openGraph: {
    title: "Mofield Brothers | Construction Contractors in Tennessee",
    description:
      "Mofield Brothers Construction Company is a trusted Tennessee contractor specializing in water and sewer lines, directional drilling, excavation, and hauling.",
    images: [
      {
        url: "https://mofieldbrothers.com/images/mofieldScreen.png",
        width: 800,
        height: 600,
        alt: "Home Page",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="mytheme" lang="en">
      <head>
        <link rel="icon" href="/images/mLogoBlack.png" />
      </head>
      <body className={`overflow-x-hidden ${rokkitt.className}`}>
        <Header />
        <GoogleCaptchaWrapper>
          {children}
          <Analytics />
        </GoogleCaptchaWrapper>
        <Footer />
      </body>
    </html>
  );
}
