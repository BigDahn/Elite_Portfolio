"use client";

import Ellipse from "@/assets/svgs/Ellipse 2990.svg";
import ExternalLinkButton from "./ExternalLinkButton";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const FooterArc = () => {
  return (
    <div className="min-h-[700px] pt-20 bottom-0 bg-black relative overflow-hidden left-0 right-0 pt-20  mx-auto z-40">
      {" "}
      <div
        className="absolute -bottom-10"
        style={{
          bottom: "0",
          filter:
            "drop-shadow(0 0 40px #3E1FE8) drop-shadow(0 0 80px #3E1FE8aa)",
        }}
      >
        <Ellipse className="w-screen mx-auto absolute -bottom-10" />
      </div>
      <div
        className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-50
      space-y-5
    "
      >
        <Image
          className="mx-auto"
          src="/Frame 2121453894.png"
          width={80}
          height={80}
          alt=""
        />
        <p className="text-transparent unbounded bg-clip-text bg-linear-to-b from-white to-blue-800 text-[50px] text-center capitalize font-extrabold leading-[100%] tracking-[-0.06em]">
          Lets start your <br /> trading journey
        </p>

        <p className="jost leading-[130%] tracking-[-0.02em] w-[577px] text-center text-[25px] text-white/60">
          Start trading with powerful tools, real-time insights, and a secure
          platform for better profits
        </p>

        <ExternalLinkButton
          text="Get Started Now"
          href="#"
          className="mx-auto px-8 text-black"
        />
      </div>
      <motion.button
        className="absolute right-16 top-64 md:right-24 md:top-64 w-14 h-14 rounded-full bg-[#3E1FE8] text-black flex items-center justify-center text-xl shadow-lg hover:scale-105 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp color="white" />
      </motion.button>
    </div>
  );
};

export default FooterArc;
