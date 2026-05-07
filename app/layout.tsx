import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { jakarta, jost, satoshi, unbounded } from "./fonts";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";
import PageTransitionOverlay from "./components/PageTransitionOverlay";

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
      className={cn(
        "h-full",
        "antialiased",
        unbounded.variable,
        jost.variable,
        satoshi.variable,
        jakarta.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col max-w-[800px] md:max-w-screen overflow-x-hidden bg-black">
        <PageTransitionOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
