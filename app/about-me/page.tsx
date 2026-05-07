"use client";

import Contributions from "../components/pages/about-me/Contributions";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import { MoveDownIcon } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import ProfileSection from "../components/pages/about-me/Owner";
import Experiences from "../components/pages/about-me/Experiences";
import FooterArc from "../components/FooterArc";

const Page = () => {
  return (
    <SectionContainer id="about" className="min-h-screen  bg-black">
      <div className="md:px-5 lg:px-10">
        <Hero className="min-h-screen pt-12">
          <div className="min-h-[700px] space-y-20 flex flex-col gap-[10em] relative justify-center items-center">
            <div className="flex flex-col max-w-[1002px] gap-4 justify-center items-center px-4 py-3 max-w-[346px] md:max-w-[1002px] text-center">
              <h1 className="unbounded text-white font-semibold text-[30px] md:text-[70px] capitalize  leading-[93%] tracking-[-8%] text-center">
                A Crypto Trader with 6 years of experience
              </h1>
              <p className="jost text-[15px] md:text-[30px] text-gray-400 font-[400px] leading-[130%] tracking-[-4%]">
                I am a crypto trader with deep knowledge about the market. I
                have partnered with several crypto brands and helped traders
                achieve the best results in the crypto space
              </p>
            </div>
            <motion.div
              onClick={() => {
                document
                  .getElementById("contributions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer flex flex-col justify-center gap-5 py-[34px] px-[11.5px] h-52 items-center w-32 rounded-[50%/50%] border border-gray-400 absolute bottom-[0%]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MoveDownIcon
                  size={25}
                  className="bg-linear-to-r from-white to-blue-800 bg-clip-text stroke-white"
                />
              </motion.div>
              <h6 className="jost bg-clip-text bg-linear-to-r from-white to-blue-800 font-normal text-[20px] leading-[130%] text-white/20 tracking-[-0.06em] text-center">
                Scroll Down
              </h6>
            </motion.div>
          </div>
        </Hero>
        <Contributions />
        <ProfileSection />
        <Experiences />
      </div>
      <FooterArc />
    </SectionContainer>
  );
};

export default Page;
