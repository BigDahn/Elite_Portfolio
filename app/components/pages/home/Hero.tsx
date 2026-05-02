"use client"

import { useRouter } from "next/navigation"
import { Play, Send } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react"
import GridBackground from "../../GridBackground";
import AnimatedLine from "../../AnimatedBrush";

export default function HomePageHero() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-[2em] items-center justify-center space-y-5  max-w-218 max-h-88.75 h-full w-full ">
      <div className="flex flex-col items-center gap-3 justify-center text-center w-full">
        <div className="relative">
          <h1
            className="unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white relative"
          >
            A crypto trader that makes you money.
          </h1>
          <div className="z-50 absolute right-24">
            <AnimatedLine duration={2} strokeWidth={1.5} color="#3C1EDE" delay={0.3} />
          </div>
        </div>
        <h4 className="text-center jost max-w-175 text-[30px] font-[400px] leading-[130%] tracking-[-4%] text-gray-500 mt-5">
          Helping traders and investors navigate the trading space profitably
          with information and education.
        </h4>
      </div>
      <div className="flex items-center gap-7 z-20">
        <button onClick={() => router.push("/about-me#professional-experiences")} className="py-[1em] bg-white text-[15px] w-65.5 flex items-center text-center rounded-full px-[2em] font-semibold gap-2 h-16.25">
          <div className="flex items-center justify-center w-full gap-x-3.75">
            <Send fill="black" className="rotate-290 size-4" />{" "}
            <h3 className="capitalize jost leading-[130%] tracking-[-2%] text-[15px]">view my portfolio</h3>
          </div>
        </button>

        <div className="flex items-center relative gap-4 text-[14px] text-white font-semibold">
          <div className="flex items-center relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-slate-50/30"
              animate={{
                scale: [1, 1.4],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeIn",
              }}
            />
            <button className="w-[49.9px] h-[49.9px] justify-center bg-yellow-500 z-20 rounded-full flex items-center gap-2" >
              <Play size={30} fill="white" />
            </button>
          </div>
          <h2>More Results</h2>
        </div>
      </div>
    </div>
  );
}
