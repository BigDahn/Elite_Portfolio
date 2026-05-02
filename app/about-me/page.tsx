import Image from "next/image";
import Contributions from "../components/pages/about-me/Contributions";
import Hero from "../components/Hero";
import ArrowIcon from "@/assets/svgs/arrow.svg";
import { MoveDownIcon } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import ProfileSection from "../components/pages/about-me/Owner";
import Experience from "../components/pages/about-me/Experience";

const Page = () => {
  return (
    <SectionContainer id="about" className="min-h-screen bg-black">
      <div className="px-10">
        <Hero className="h-screen">
          <div className="min-h-[700px] space-y-20 flex flex-col relative justify-center items-center border-b border-gray-400">
            <div className="flex flex-col max-w-[1002px] gap-4 justify-center items-center px-4 py-3  text-center">
              <h1 className="unbounded text-white font-semibold text-[70px] capitalize max-w-[850px] leading-[93%] tracking-[-8%] text-center">
                A Crypto Trader with 6 years of experience
              </h1>
              <p className="jost text-[30px] text-gray-400 font-[400px] leading-[130%] tracking-[-4%]">
                I am a crypto trader with deep knowledge about the market. I
                have partnered with several crypto brands and helped traders
                achieve the best results in the crypto space
              </p>
            </div>
            <div className="from-white flex flex-col justify-center gap-5 py-[34px] px-[11.5px] bg-clip-text to-blue-900 h-64 flex items-center flex-col w-32 rounded-[50%/50%] border border-gray-400 absolute bottom-[0%]">
              <MoveDownIcon size={25} />
              <h6 className="jost font-[400px] text-[20px] leading-[130%] text-white/20 tracking-[-6%] text-center">
                Scroll Down
              </h6>
            </div>
          </div>
        </Hero>
        <Contributions />
        <ProfileSection />
        <Experience />
      </div>
    </SectionContainer>
  );
};

export default Page;
