import type { Metadata } from "next";
import { Jost, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

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
      className={`${unbounded.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-screen overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
