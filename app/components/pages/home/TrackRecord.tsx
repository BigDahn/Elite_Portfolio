"use client";

import { StaticImageData } from "next/image";
import CountUp from "react-countup";
import Headings from "../../headings";
import SectionContainer from "../../SectionContainer";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import CoinIcon from "@/assets/svgs/Img7.svg";
import SectionContent from "../../SectionContent";

const records = [
  {
    value: 800,
    title: "Total Trades",
    useBlur: false,
    image: "/Vector 7729.png",
    showIcons: false,
    isFull: true,
  },
  {
    value: 70,
    title: "Win Rate",
    image: "/win.jpg",
    useBlur: true,
    showIcons: false,
  },
  {
    value: 20000,
    useBlur: true,
    title: "crypto community ",
    image: "/student.jpg",
    showIcons: false,
  },
  {
    value: 15,
    useBlur: true,
    title: "Brands Partnered",
    image: "/star.jpg",
    showIcons: true,
  },
];

const TrackRecord = () => {
  return (
    <SectionContainer className="bg-black" id="track-record">
      <div className="ml-auto block absolute right-0">
        <CoinIcon className="ml-auto lg:block h-32 w-32 hidden animate-bounce [animation-duration:3s]" />
      </div>
      <SectionContent className="relative flex flex-col gap-[1em] md:gap-0 space-y-0">
        <div className="min-h-19 md:space-y-4 space-y-10">
          <Headings
            textClassName="text-white"
            text="Track Record At A Glance"
          />
          <div className="flex flex-col space-y-5 md:flex lg:flex-row py-3 gap-y-4 gap-x-8 items-start border-b border-slate-50/10 md:items-center w-full md:justify-between">
            <div className="space-y-5 w-full text-white  flex flex-col lg:flex-row gap-3 md:gap-0 lg:items-start lg:items-center items-start lg:gap-[0em] justify-start lg:justify-between">
              <div className="flex items-center gap-x-3">
                <h3 className="unbounded leading-[113%] text-[#D9D9D9] tracking-[-11%] text-[20px] sm:text-[26px] md:text-[50px] font-extrabold">
                  938+
                </h3>
                <small className="satoshi text-base text-[#fafafa]/50 w-full  md:max-w-[130px]">
                  Crypto Trades Completed
                </small>
              </div>
              <div className="flex items-center gap-x-3">
                <h3 className="unbounded leading-[113%] text-[#D9D9D9] tracking-[-11%] text-[26px] md:text-[50px] font-extrabold">
                  6+
                </h3>
                <small className="satoshi text-base text-[#fafafa]/50">
                  Years in the industry
                </small>
              </div>
            </div>
            <div className="max-w-[629px] mr-auto">
              <p className="unbounded text-[25px] text-[#FAFAFA]/90 leading-[142%] tracking-[-6%]">
                Words are futile without evidence. My results are loud, not
                silent. Scroll to discover the magic.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:px-0 px-3 py-2 md:py-[4em] md:grid-cols-2 lg:grid-cols-4 lg:items-center lg:justify-between">
          {records.map((record) => (
            <RecordCard key={record.title} {...record} />
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
};

export default TrackRecord;

interface ReportProps {
  title: string;
  value: number;
  image: StaticImageData | string;
  useBlur: boolean;
  showIcons: boolean;
  isFull?: boolean;
}

function RecordCard({
  isFull,
  showIcons,
  useBlur,
  title,
  value,
  image,
}: ReportProps) {
  const brands = [
    {
      id: 1,
      name: "",
      designation: "Bybit",
      image: "/bybit.png",
    },
    {
      id: 2,
      name: "",
      designation: "Binolla",
      image: "/binolla.png",
    },
    {
      id: 3,
      name: "",
      designation: "MEXC",
      image: "/mexc.png",
    },
    {
      id: 4,
      name: "",
      designation: "Tradelocker",
      image: "/trade_locker.jpg",
    },
    {
      id: 5,
      name: "Muesli Swap",
      designation: "Muesli Swap",
      image: "/muesli_swap.jpg",
    },
    {
      id: 6,
      name: "Binomo",
      designation: "Binomo",
      image: "/binomo.png",
    },
    ,
  ];

  return (
    <div className="rounded-[30px] overflow-hidden border-2 border-slate-50/20 relative w-full h-[326.75px] space-y-12">
      <Image
        src={image}
        className={`${isFull ? "object-contain top-40" : " h-full object-cover"} rounded-b-[30px] w-full absolute`}
        width={308.08}
        height={200}
        alt={title}
        preload
        loading="eager"
      />
      {useBlur ? (
        <div className="inset-0 absolute bg-black h-full rounded-[30px] opacity-90" />
      ) : (
        <div className="bg-[#1C1B20] rounded-[30px] h-full z-30" />
      )}
      <div className="z-40 absolute top-3 text-white p-3">
        <div className="flex items-center text-[26px] sm:text-[26px] lg:text-[50px] unbounded gap-x-1">
          <CountUp
            start={0}
            end={value}
            className="unbounded leading-[130%] z-9999 font-extrabold tracking-[-2%] text-[35px] lg:text-[40px]"
          />
          +
        </div>
        <p className="jost text-white/60 leading-[130%] z-50  tracking-[-2%] text-[25px] lg:text-[25px]">
          {title}
        </p>
      </div>
      {showIcons && (
        <div className="flex flex-row bottom-8 left-4 absolute w-full">
          <AnimatedTooltip items={brands} />
        </div>
      )}
    </div>
  );
}
