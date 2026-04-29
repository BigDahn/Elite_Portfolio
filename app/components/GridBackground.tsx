import { Check, Send, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { jost, satoshi, unbounded } from "../fonts";
import CryptoVec from "./CryptoVec";

const jakari = satoshi;

// components/HeroBackground.jsx
type HeroBackgroundProps = {
  children: ReactNode;
};

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-[714px] w-full overflow-hidden bg-[#05060d]">
        {/* MAIN EXACT BACKGROUND COLORS */}
        <div className="absolute inset-0"
          style={{
            background: `
            radial-gradient(circle at 50% 8%, rgba(88,56,255,0.95) 0%, rgba(70,45,220,0.85) 18%, rgba(30,25,95,0.72) 42%, rgba(8,9,18,1) 78%),
            linear-gradient(to bottom, #14162f 0%, #080910 100%)
          `,
          }}
        />

        {/* SIDE DARK VIGNETTE (not circles) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(ellipse 18% 70% at 0% 50%, rgba(0,0,0,0.75) 0%, transparent 70%),
            radial-gradient(ellipse 18% 70% at 100% 50%, rgba(0,0,0,0.75) 0%, transparent 70%)
          `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 10% 35%, rgba(90,70,255,0.16) 0%, transparent 4%)",
            filter: "blur(55px)",
          }}
        />

        {/* EXACT GRID SQUARES */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
            backgroundSize: "150px 150px",
            opacity: 0.9,
          }}
        />
        <div className="relative  max-w-[872px] flex  m-auto top-[40%] z-10">
          {children}
        </div>
      </div>
      <div className="min-w-screen   ">
        <Image
          src="/image1.png"
          alt="IMage"
          width={1440}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <section className="px-[5em] py-[3em] max-w-[1800px] m-auto flex flex-col gap-[0.5em]">
        <div className="flex gap-[3px] items-center ">
          <div className="border border-[#F8A308] w-[60px] h-[7px] bg-[#F8A308]" />
          <h2
            className={`${jost.className} text-white uppercase font-medium text-[15px] leading-[170%] tracking-[30%] `}
          >
            About me
          </h2>
        </div>
        <section className="flex flex-col justify-center w-full m-auto ">
          <div className="border border-gray-800  w-[96%] m-auto " />
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
                className={`unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white`}
              >
                Who is <span className="text-[#F8A308]">Elite ayomide?</span>
              </h3>
              <div className="h-[80px]">
                <h3
                  className={`unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white `}
                >
                  A <span className="text-[#F8A308] relative">Trader.</span>
                </h3>
                <Image
                  src="/linethrough.png"
                  alt="line"
                  width={100}
                  height={100}
                  className="w-[2px] h-[60px] relative bottom-[62px]  left-[39.6%]"
                />
              </div>
              <p
                className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500  max-w-[800px] relative`}
              >
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
                    className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Trader + Content Creator
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Growth Strategist
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
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
                    className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Technical Analyst
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
                  >
                    Market Analysis
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8A308] h-[27px] flex items-center w-[27px] justify-center rounded-full">
                    <Check />
                  </div>
                  <h4
                    className={`${jost.className} text-[25px] leading-[120%] tracking-[4%] text-gray-500`}
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
        <div className="flex justify-between items-end">
          <div className="flex gap-[3px] items-center ">
            <div className="border border-[#F8A308] w-[60px] h-[7px] bg-[#F8A308]" />
            <h2
              className={`${jost.className} text-white uppercase font-medium text-[15px] leading-[170%] tracking-[30%] `}
            >
              TRACK RECORD AT A GLANCE
            </h2>
          </div>
          <Image
            src="/img7.png"
            alt="About me"
            width={300}
            height={218}
            quality={75}
            className="w-[300px] h-[218px]"
          />
        </div>
      </section>
      {/* ORDER SECTION */}
      <section className=" min-w-screen h-full pb-[5em]">
        <div className="px-[5em] py-[3em] max-w-[1800px] m-auto flex flex-col gap-[0.5em]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-[4em]">
              <div className="flex items-center gap-3">
                <h3
                  className={`unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white flex items-center`}
                >
                  538+
                </h3>
                <span className="font-serif text-[15px]  leading-[120%] tracking-[-4%] font-normal text-gray-500">
                  Crypto project
                  <br /> completed
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <h3
                  className={`unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white flex items-center`}
                >
                  6+
                </h3>
                <span className="font-serif text-[15px]  leading-[120%] tracking-[-4%] font-normal text-gray-500">
                  Years in the Industry
                </span>
              </div>
            </div>
            <h6
              className={`unbounded text-[25px] leading-[142%] tracking-[-6%] font-normal max-w-[629px] text-white`}
            >
              Words are futile without evidence. My results are loud, not
              silent. Scroll to discover the magic.
            </h6>
          </div>
          <div className="border border-b border-gray-600   " />
          <section className="flex items-center gap-x-[7.3em] py-5">
            <div className="w-[320px] border border-gray-400 h-[310px] bg-[#222126] rounded-2xl ">
              <div className="px-[2em] py-3">
                <h3
                  className={`unbounded text-[50px] font-bold leading-[130%] tracking-[-2%] text-white flex items-center`}
                >
                  800+
                </h3>
                <p
                  className={`${jost.className} text-gray-500 text-[30px] leading-[120%] tracking-[-2%] font-medium`}
                >
                  Total Trades
                </p>
              </div>
              <div>
                <Image src="/rate.png" alt="Rating" width={320} height={130} />
                <CryptoVec />
              </div>
            </div>
            <div className="w-[320px] h-[310px] rounded-2xl border border-gray-700">
              <div className="px-[2em] pt-3 h-[30%] ">
                <h3
                  className={`unbounded text-[50px] font-bold leading-[130%] tracking-[-2%] text-white flex items-center`}
                >
                  50+
                </h3>
                <h5
                  className={`${jost.className} text-gray-500 text-[30px] leading-[120%] tracking-[-2%] font-medium relative z-50`}
                >
                  Win Rates
                </h5>
              </div>
              <div className="h-[70%]">
                <Image
                  src="/win.jpg"
                  alt="Rating"
                  width={320}
                  height={310}
                  className="w-full h-full object-cover rounded-bl-2xl rounded-br-2xl  "
                />
              </div>
            </div>
            <div className="border border-gray-400 w-[320px] h-[310px] bg-[url('/student.jpg')] bg-cover bg-center flex flex-col justify-between  rounded-2xl">
              <div className="relative px-[2em] py-3">
                <h3
                  className={`unbounded text-[50px] font-bold leading-[130%] tracking-[-2%] text-white flex items-center`}
                >
                  4000+
                </h3>
                <p
                  className={`${jost.className} text-gray-500 text-[30px] leading-[120%] tracking-[-2%] font-medium`}
                >
                  Academy Students
                </p>
              </div>
              <div className="pb-4">
                <CryptoVec />
              </div>
            </div>
            <div className="relative border border-gray-400 w-[320px] h-[310px] bg-[url('/star.jpg')] bg-cover bg-center flex flex-col justify-between  rounded-2xl">
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative px-[2em] py-3">
                <h3
                  className={`unbounded text-[50px] font-bold leading-[130%] tracking-[-2%] text-white flex items-center`}
                >
                  70+
                </h3>
                <p
                  className={`${jost.className} text-gray-500 text-[30px] leading-[120%] tracking-[-2%] font-medium`}
                >
                  Branded Partners
                </p>
              </div>
              <div className="pb-4">
                <CryptoVec />
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* TRADING HISTORY */}
      <section className="px-[5em] py-[3em] max-w-[1800px] m-auto flex flex-col gap-[0.5em]">
        <div className="flex gap-[3px] items-center pb-[3em]">
          <div className="border border-[#F8A308] w-[60px] h-[7px] bg-[#F8A308]" />
          <h2
            className={`${jost.className} text-white uppercase font-medium text-[15px] leading-[170%] tracking-[30%] `}
          >
            Verified trading history
          </h2>
        </div>
        <section>
          <div className="border border-b-gray-400" />
          <div className="flex items-start justify-between py-4">
            <h2
              className={`unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white flex items-center max-w-[700px] uppercase`}
            >
              Real numbers. REAL IMPACT
            </h2>
            <h4
              className={`${jost.className} text-[25px] leading-[120%] tracking-[-4%] font-normal max-w-[464px] text-white`}
            >
              Video testimonials. Portfolio screenshots. Real numbers. The
              members who got in early are writing the stories — here&apos;s a
              sample.
            </h4>
          </div>
          <div className="grid grid-cols-[450px_450px_450px] gap-[9em]">
            <div>
              <Image src="/e1.png" alt="card1" width={450} height={521} />
            </div>
            <div>
              <Image src="/e8.jpg" alt="card1" width={450} height={521} />
            </div>
            <div>
              <Image src="/e11.png" alt="card1" width={450} height={521} />
            </div>
            <div>
              <Image src="/e10.png" alt="card1" width={450} height={521} />
            </div>
            <div>
              <Image src="/e11.png" alt="card1" width={450} height={521} />
            </div>
            <div>
              <Image src="/e12.png" alt="card1" width={450} height={521} />
            </div>
          </div>
          <button className="bg-white rounded-full py-[1.2em] m-auto px-[3.4em] font-semibold flex items-center gap-3 mt-10 ">
            See More <SquareArrowOutUpRight />
          </button>
        </section>
      </section>
      {/*SERVICES*/}
      <section className="px-[5em] py-[3em] max-w-[1800px] m-auto flex flex-col gap-[0.5em]">
        <div className="flex items-center justify-between">
          <div className="flex gap-[3px] items-center pb-[3em]">
            <div className="border border-gray-400 w-[60px] h-[7px] bg-gray-400" />
            <h2
              className={`${jost.className} text-white uppercase font-medium text-[15px] leading-[170%] tracking-[30%] `}
            >
              Services
            </h2>
          </div>
          <div className="relative left-30 overflow-hidden">
            <Image
              src="/Looper-3.png"
              alt="Services"
              width={376}
              height={388}
            />
          </div>
        </div>

        <section className=" relative bottom-[220px]">
          <div className="border border-b-gray-400" />
          <div className="flex justify-between">
            <h2
              className={`unbounded text-[50px] font-bold leading-[112%] tracking-[-11%] text-white flex items-center max-w-[700px] uppercase`}
            >
              Strategic Services for Lasting Impact.
            </h2>
            <h6
              className={`${jost.className} text-[25px] leading-[120%] tracking-[-4%] font-normal max-w-[493px] text-white mt-5`}
            >
              A suite of high-value services designed to support organizations,
              institutions, and leaders—delivering expert guidance, strategic
              insight, and actionable solutions that drive growth.
            </h6>
          </div>
          <div className="pt-[3em] flex flex-col ">
            <div className="bg-[#101010] flex items-start justify-between px-3 py-[2em]">
              <div className="flex items-start gap-5">
                <h6
                  className={`${jost.className} text-[20px] font-semibold pt-2 leading-[170%] tracking-[30%] text-gray-400`}
                >
                  01
                </h6>
                <div className="max-w-[515px] flex flex-col gap-2">
                  <h3
                    className={`${jakari.className} text-[50px] font-bold leading-[112%] tracking-[-6%] text-white/70`}
                  >
                    Crypto Consulting
                  </h3>
                  <p
                    className={`${jost.className} text-[16px] font-regular leading-[120%] tracking-[18.4%] text-gray-400`}
                  >
                    Advisory on crypto investment and trading to make.
                  </p>
                </div>
              </div>
              <button className="bg-white py-[1rem] px-[2em] rounded-full flex items-center gap-3 font-semibold">
                Book Me Now <SquareArrowOutUpRight />
              </button>
            </div>
            <div className="border border-b-[#101010] flex items-start  px-3 py-[2em]">
              <div className="flex items-start gap-5">
                <h6
                  className={`${jost.className} text-[20px] font-semibold pt-2 leading-[170%] tracking-[30%] text-gray-400`}
                >
                  02
                </h6>
                <h3
                  className={`${jakari.className} text-[50px] font-bold leading-[112%] tracking-[-6%] text-white/70`}
                >
                  Crypto Mentorship
                </h3>
              </div>
            </div>
            <div className="border border-b-[#101010] flex items-start  px-3 py-[2em]">
              <div className="flex items-start gap-5">
                <h6
                  className={`${jost.className} text-[20px] font-semibold pt-2 leading-[170%] tracking-[30%] text-gray-400`}
                >
                  03
                </h6>
                <h3
                  className={`${jakari.className} text-[50px] font-bold leading-[112%] tracking-[-6%] text-white/70`}
                >
                  One-on-One Crypto Mentorship
                </h3>
              </div>
            </div>
          </div>
          <button className="bg-white py-[1rem] px-[2em] rounded-full flex items-center gap-3 font-semibold m-auto mt-[5em]">
            More Of My Services <SquareArrowOutUpRight />
          </button>
        </section>
      </section>
      {/*Testimonials*/}
      <section className="min-w-screen bg-white">
        <div className="max-w-[1800px] py-[3em] m-auto">
          <div className="flex m-auto  items-center gap-1 justify-center">
            <div className="border border-[#F8A308] w-[60px] h-[7px] bg-[#F8A308]" />
            <h2
              className={`${jost.className} text-black uppercase font-medium text-[15px] leading-[170%] tracking-[0%] `}
            >
              Trusted and experienced power elite CUSTOMERS
            </h2>
          </div>
          <h2
            className={`${jakari.className} text-black text-[50px] font-bold leading-[112%] tracking-[-6%] uppercase text-center mt-5`}
          >
            57,500+ Trusted customers
          </h2>
        </div>
      </section>
    </main>
  );
}

// #ffffffb3

// /
