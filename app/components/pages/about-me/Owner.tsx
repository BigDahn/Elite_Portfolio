"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const tabs = ["THE START", "THE GRIND", "THE WORK", "THE PROOF"] as const;
type Tab = (typeof tabs)[number];

const tabContent: Record<Tab, { paragraphs: string[] }> = {
  "THE START": {
    paragraphs: [
      "EliteAyomide is a 26-year-old trader with 6 years of experience in Web3. Starting with project interactions, he helped grow Arbitrum, Optimism, and other top crypto ecosystems — earning tokens as rewards for his contributions. EliteAyomide is a 26-year-old trader with 6 years of experience in Web3. Starting with project interactions, he helped grow Arbitrum, Optimism, and other top crypto ecosystems — earning tokens as rewards for his contributions.",
      "EliteAyomide is a 26-year-old trader with 6 years of experience in Web3. Starting with project interactions, he helped grow Arbitrum, Optimism, and other top crypto ecosystems — earning tokens as rewards for his contributions.",
    ],
  },
  "THE GRIND": {
    paragraphs: [
      "Every day was a new battle — monitoring markets, engaging protocols, and staying ahead of the curve. The grind meant sleepless nights, deep research, and an unwavering commitment to understanding what others overlooked. He built systems, refined strategies, and turned raw effort into compounding results.",
      "The grind never stopped. From testnet campaigns to mainnet launches, EliteAyomide positioned himself at the frontier of every major protocol drop — not by luck, but by relentless preparation and execution.",
    ],
  },
  "THE WORK": {
    paragraphs: [
      "His work spans on-chain analytics, liquidity provision, ecosystem growth consulting, and community building across multiple L2 networks. He has contributed to governance proposals, beta-tested flagship DeFi products, and built a reputation as a trusted voice in the Web3 space.",
      "The work is documented — wallet histories, contribution records, and community endorsements. Every transaction tells a story of purpose and precision, not speculation.",
    ],
  },
  "THE PROOF": {
    paragraphs: [
      "Six-figure token rewards. Early allocations from protocols that went on to become industry staples. A network of builders, founders, and investors who can attest to EliteAyomide's consistency and impact across the ecosystem.",
      "The proof isn't in promises — it's in the chain. Verifiable. Immutable. Undeniable. The results speak for themselves, and the on-chain record stands as a permanent testament to years of disciplined effort.",
    ],
  },
};

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState<Tab>("THE START");

  return (
    <section className="relative w-full min-h-screen bg-[#05050d] flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6c47ff 1px, transparent 1px), linear-gradient(90deg, #6c47ff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#4a2fff] opacity-10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[900px] flex flex-col md:flex-row items-stretch gap-10 md:gap-16">
        {/* ── Left: Image ── */}
        <div className="flex-shrink-0 w-full md:w-[340px] relative">
          {/* Neon border frame */}
          <div
            className="relative w-full aspect-[3/4] rounded-sm overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(108,71,255,0.5), 0 0 30px rgba(108,71,255,0.25), inset 0 0 30px rgba(108,71,255,0.05)",
            }}
          >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#6c47ff] z-20" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#6c47ff] z-20" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#6c47ff] z-20" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#6c47ff] z-20" />

            {/* Placeholder image */}
            <div className="w-full h-full bg-gradient-to-b from-[#1a1030] via-[#0d0820] to-[#05050d] flex items-end justify-center">
              <div className="w-[75%] h-[90%] bg-gradient-to-t from-[#6c47ff]/10 to-transparent rounded-t-full flex items-center justify-center">
                <svg
                  viewBox="0 0 100 120"
                  className="w-[65%] opacity-20"
                  fill="none"
                >
                  <ellipse cx="50" cy="38" rx="22" ry="24" fill="#6c47ff" />
                  <ellipse cx="50" cy="105" rx="38" ry="32" fill="#6c47ff" />
                </svg>
              </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#05050d] to-transparent z-10" />
          </div>
        </div>

        {/* ── Right: Tabs + Content ── */}
        <div className="flex-1 flex flex-col">
          {/* Tab nav */}
          <nav className="flex items-center gap-6 border-b border-white/10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-[11px] tracking-[0.18em] font-semibold transition-colors duration-200 whitespace-nowrap ${activeTab === tab
                  ? "text-white"
                  : "text-white/35 hover:text-white/60"
                  }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col gap-5"
            >
              {tabContent[activeTab].paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[13.5px] leading-[1.85] text-white/75 text-justify"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
