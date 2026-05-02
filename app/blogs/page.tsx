"use client";

import Hero from "../components/Hero";
import { motion } from "motion/react";
import Link from "next/link";
import MediumIcon from "@/assets/svgs/medium.svg";
import { useState } from "react";
import HoverArrow from "../components/HoverArrow";
import FooterArc from "../components/FooterArc";
import useSound from "use-sound";


const Page = () => {
  return (
    <main className="bg-[#07060f] relative text-white overflow-hidden">
      <Grids />
      <Hero className="h-[70vh] " />
      <Link
        href="https://medium.com/@0x5hmuel"
        target="_blank"
        referrerPolicy="no-referrer"
        className="flex items-center gap-x-1 text-white/80 absolute right-10 top-64 jost text-2xl<D-Space>leading-[130%] tracking-[-6%]"
      >
        <MediumIcon />
        <p className="">Follow me on Medium</p>
      </Link>
      <div className="space-y-5">
        <div className="flex px-10 justify-between">
          <div className="w-full">
            <h2 className="font-bold text-[50px] text-white unbounded leading-[113%] tracking-[-11%]">
              Articles that
            </h2>
            <h2 className="font-bold text-[50px] text-white unbounded leading-[113%] tracking-[-11%]">
              Inspire
            </h2>
          </div>
          <div>
            <p className="text-right text-white/50 jost font-light leading-[130%] tracking-[-6%] text-[22px]">
              Here you will find practical articles, current trends and tested
              strategies that help you build high-performance digital
              experiences and grow your trading experience.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-[radial-gradient(circle_at_top,rgba(91,35,255,0.65),rgba(7,6,15,0.12)_42%,rgba(7,6,15,0)_72%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_4rem,4rem_100%] opacity-20" />

        <div className="grid grid-cols-4 pt-0">
          {Array.from({ length: 8 }).map((_, index) => {
            if (index % 4 === 0) {
              return (
                <div
                  key={index}
                  className="border-y border-y-white/5 min-h-[calc(var(--title-size)*4)]"
                />
              );
            }

            return (
              <BlogCard
                key={index}
                isNew={true}
                title="Core Web Vitals in 2026: what they mean"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                date=""
                href="https://medium.com/@0x5hmuel"
                tags={["fitness", "Volume"]}
              />
            );
          })}
        </div>
        <FooterArc />
      </div>
      <div className="grid grid-cols-4 pt-0">
        {Array.from({ length: 8 }).map((_, index) => {
          if (index % 4 === 0) {
            return <div key={index} className="border-y border-y-white/5 min-h-[calc(var(--title-size)*4)]" />;
          }

          return (
            <BlogCard
              key={index}
              isNew={true}
              title="Core Web Vitals in 2026: what they mean"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
              date=""
              href="https://medium.com/@0x5hmuel"
              tags={["fitness", "Volume"]}
            />
          );
        })}
      </div>
      <FooterArc />
    </div>
  </main>
};

export default Page;

function Grids() {

  return <div className="absolute z-30 inset-0 min-h-screen w-screen grid grid-cols-4">
    <div className="border-x border-white/5" />
    <div className="border-x border-white/5" />
    <div className="border-x border-white/5" />
    <div className="border-x border-white/5" />
  </div>

}

interface BlogPosts {
  isNew: boolean;
  title: string;
  date: string;
  tags: string[];
  description: string;
  href: string;
}

function BlogCard({
  isNew,
  title,
  date,
  tags,
  description,
  href = "https://medium.com",
}: BlogPosts) {
  const [isHovered, setIsHovered] = useState(false);
  const [play] = useSound(
    "/audio/universfield-computer-mouse-click-352734.mp3",
    {
      onend: () => {
        window.open(href);
      },
      volume: 0.1,
    },
  );

  return (
    <motion.a
      href="https://google.com"
      onClick={(e) => {
        e.preventDefault();
        play();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="min-h-[calc(var(--title-size)*4)] border-y-white/5 border-y h-32.5 hover:bg-blue-800/10 duration-300 transition-all jost z-30 p-5"
    >
      <div className="flex-col justify-between flex gap-[1em] items-start h-full">
        {isNew && (
          <div className="bg-black rounded-2xl text-white font-medium w-fit border py-1 px-1 h-[1.5em] flex items-center leading-[10%] text-[10px]">
            New
          </div>
        )}
        <div className="items-end space-y-5">
          <p className="text-xl line-clamp-4 unbounded leading-[111%] tracking-[-6%]">
            {title}
          </p>
          <p className="text-white/40 line-clamp-3 satoshi">{description}</p>
          <div className="w-full flex items-center justify-between">
            <p className="jakarta text-[#CC9933]/70 text-xs font-semibold">
              Read More
            </p>
            <HoverArrow isHovered={isHovered} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
