"use client";

import Ellipse from "@/assets/svgs/Ellipse 2990.svg";
import ExternalLinkButton from "./ExternalLinkButton";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import clsx from "clsx"


interface FooterArcProps {
  className?: string;
}

const FooterArc = ({ className }: FooterArcProps) => {
  return (
    <div className={clsx("h-[500px]  w-screen lg:min-h-175 bottom-0 bg-white relative overflow-hidden left-0 right-0 pt-20  mx-auto z-40", className)}>
      <div className="bg-black rounded-full h-[5000px] w-[5000px] absolute bottom-0" />
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
          width={50}
          height={50}
          alt=""
        />
        <p className="text-transparent unbounded bg-clip-text bg-linear-to-b from-white to-blue-800 text-[15px] lg:text-[50px] text-center capitalize font-extrabold leading-[100%] tracking-[-0.06em]">
          Lets start your <br /> trading journey
        </p>

        <p className="jost leading-[130%] tracking-[-0.02em] w-[577px] text-center text-[10px] lg:text-[25px] text-white/60">
          Start trading with powerful tools, real-time insights, and a secure
          platform for better profits
        </p>

        <ExternalLinkButton
          text="Get Started Now"
          href="/contact"
          className="mx-auto px-8 text-black"
        />
      </div>
    </div>
  );
};

export default FooterArc;
