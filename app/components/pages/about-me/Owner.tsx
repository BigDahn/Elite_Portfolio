"use client";
import { useScramble } from "use-scramble";
import { useState } from "react";
import { motion } from "motion/react";
import ProfileImage from "@/assets/images/profile_image.png";
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

  const { ref } = useScramble({
    text: tabContent[activeTab].paragraphs.join("\n\n"),
    speed: 1,
    step: 5,
  });

  return (
    <section className="relative py-14 max-w-[1440px] min-h-[511px] mx-auto flex flex-col lg:flex-row items-center justify-center  lg:justify-between overflow-x-hidden md:px-4">
      <div className="relative z-10 w-full lg:h-fit flex lg:p-8.5 flex-col lg:flex-row items-stretch gap-10 lg:gap-16 justify-between">
        <div className="flex-shrink-0 w-full md:min-h-[400px] lg:w-[340px] relative ">
          <div className="relative w-full  lg:max-w-[509px] h-full  mx-auto rounded-[24px] overflow-hidden">
            <Image
              src={ProfileImage}
              alt="Elite Ayomide"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col p-3 lg:p-5 w-screen   md:max-w-[98%] min-h-[400px]   md:min-h-[350px] lg:max-w-[660px]">
          <nav className="flex flex-row items-center gap-1 lg:gap-6 border-b border-white/10 mb-8 lg:justify-evenly w-full  md:w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`unbounded leading-[139%] tracking-[-1%] w-full relative pb-3 text-[10px] md:text-sm lg:text-[12px]  lg:p-3 font-semibold transition-colors duration-200 whitespace-nowrap ${activeTab === tab
                  ? "text-white bg-[#CC9933]/5"
                  : "text-white/35 hover:text-white/60"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#CC9933]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-5 w-full">
            <p
              ref={ref}
              className="text-white/70 jost text-[20px]  text-justify lg:text-xl whitespace-pre-line leading-[139%] tracking-[-8%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
