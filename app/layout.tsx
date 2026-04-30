import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { jost, satoshi, unbounded } from "./fonts";
import Footer from "./components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Elite Ayomide",
  description:
    "A Crypto Trader with 6 years of experience, helping traders and investors navigate the trading space profitably with information and education.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", unbounded.variable, jost.variable, satoshi.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col max-w-screen overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
