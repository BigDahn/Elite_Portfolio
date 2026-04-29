import Headings from "../../headings"
import SectionContainer from "../../SectionContainer"
import { Check, Send } from "lucide-react";
import Image from "next/image";
import TypewriterText from "../../Typewriter";

const AboutMe = () => {
  return (
    <SectionContainer id="aboutMe" className="bg-black">
      <div className="py-5 border-b px-10">
        <div className="h-19">
          <Headings text="About Me" textClassName="text-[#D9D9D9]" />
          <div className="border-b-2 border-gray-200/10 h-15  w-[96%] m-auto " />
        </div>
        <section className="flex flex-col justify-center w-full m-auto ">
          <div
            className="flex items-center  w-full justify-center"
            style={{ height: "718px" }}
          >
            <div className="w-[720px]  h-full relative overflow-hidden">
              <Image
                src="/crypto.svg"
                alt="crypto"
                fill
                className=" object-contain"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3
                className="unbounded uppercase text-[50px] font-bold leading-[113%] tracking-[-11%] text-white">
                Who is <span className="text-[#F8A308]">Elite ayomide?</span>
              </h3>
              <div className="h-17.5">
                <h3
                  className={`unbounded text-[50px] font-bold leading-[107%] tracking-[-8%] text-white `}
                >
                  A <TypewriterText />
                </h3>
              </div>
              <p className="jost text-[25px] leading-[120%] tracking-[4%] text-gray-500  max-w-200 relative">
                A Crypto Trader with 6 years of experience, helping traders and
                investors navigate the trading space profitably with information
                and education.
              </p>

              <div className="grid grid-cols-2 py-[2em] text-[16px] gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className="jost text-[25px] leading-[120%] tracking-[4%] text-gray-500"
                  >
                    Trader + Content Creator
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Growth Strategist
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Community Manager
                  </h4>
                  75
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Technical Analyst
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Market Analysis
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`jost text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Trading Mentor
                  </h4>
                </div>
              </div>

              <button className="bg-white rounded-full py-[1.3em] px-[2.4em] font-semibold flex items-center gap-3 mt-4 max-w-[250px]">
                <Send
                  fill="black"
                  strokeWidth={1}
                  className="rotate-[260deg]"
                />{" "}
                <h3>More About Me</h3>
              </button>
            </div>
          </div>
        </section>

      </div>
    </SectionContainer>
  )
}

export default AboutMe
