"use client";
import Ellipse from "@/assets/svgs/Ellipse 2990.svg";
import ExternalLinkButton from "./ExternalLinkButton";
import Image from "next/image";
import clsx from "clsx";

interface FooterArcProps {
  className?: string;
}

const FooterArc = ({ className }: FooterArcProps) => {
  return (
    <div
      className={clsx(
        "min-h-300 w-screen lg:min-h-[800px] bottom-0 bg-black relative overflow-hidden",
        className
      )}
    >
      <div className="absolute flex max-h-[60%] pt-2 left-0 w-full justify-center bottom-0">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-[99999999999999px] bg-[radial-gradient(circle,rgba(109,59,255,0.95)_0%,rgba(91,46,255,0.75)_25%,rgba(70,30,200,0.45)_50%,rgba(0,0,0,0)_75%)]" />
        <div className="relative bottom-0">
          <Ellipse className="" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 space-y-5">
            <Image
              className="mx-auto"
              src="/Frame 2121453894.png"
              width={50}
              height={50}
              alt=""
            />
            <p className="text-transparent unbounded bg-clip-text bg-gradient-to-b from-white to-blue-800 text-[15px] lg:text-[50px] text-center capitalize font-extrabold leading-[100%] tracking-[-0.06em]">
              Lets start your <br /> Trading Journey
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
      </div>
    </div>
  );
};

export default FooterArc;
