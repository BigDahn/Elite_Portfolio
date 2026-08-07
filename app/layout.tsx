import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { jakarta, jost, satoshi, unbounded } from "./fonts";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";
import PageTransitionOverlay from "./components/PageTransitionOverlay";
import VimeoMiniPlayer from "./components/VimeoMiniPlayer";

export const metadata: Metadata = {
  title: "Elite Ayomide",
  description:
    "Elite Ayomide is a crypto trader and mentor helping traders, investors, and brands grow with strategy, education, and risk-aware execution.",
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
      <body className="min-h-full flex flex-col max-w-7xl md:max-w-screen overflow-x-hidden bg-black">
        <PageTransitionOverlay />
        <Header />
        {children}
        <Footer />
        <VimeoMiniPlayer />
      </body>
    </html>
  );
}
