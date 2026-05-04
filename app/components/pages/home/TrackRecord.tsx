import { StaticImageData } from "next/image";
import Headings from "../../headings";
import SectionContainer from "../../SectionContainer";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const records = [
  {
    value: 800,
    title: "Total Trades",
    useBlur: false,
    image: "/Vector 7729.png",
    showIcons: true,
  },
  {
    value: 50,
    title: "Win Rate",
    image: "/win.jpg",
    useBlur: true,
    showIcons: false,
  },
  {
    value: 4000,
    useBlur: true,
    title: "Academy Students",
    image: "/student.jpg",
    showIcons: true,
  },
  {
    value: 70,
    useBlur: true,
    title: "Brands Partnered",
    image: "/star.jpg",
    showIcons: true,
  },
];

const TrackRecord = () => {
  return (
    <SectionContainer className="bg-black" id="track-record">
      <div className="relative px-10 py-4 md:py-[3em] flex flex-col gap-[1em] md:gap-0  space-y-0">
        <div className="min-h-19 md:space-y-4 space-y-10">
          <Headings
            textClassName="text-white"
            text="Track Record At A Glance"
          />
          <div className="flex flex-col space-y-5 md:flex md:flex-row py-3 gap-y-4 gap-x-8 items-start border-b border-slate-50/10 md:items-center w-full md:justify-between">
            <div className="space-y-5 text-white flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center md:gap-[15em]">
              <div className="flex items-center gap-x-3">
                <h3 className="unbounded leading-[113%] text-[#D9D9D9] tracking-[-11%] text-[26px] md:text-[50px] font-extrabold">
                  538+
                </h3>
                <small className="satoshi text-base text-[#fafafa]/50 w-full  md:max-w-[130px]">
                  Crypto Projects Completed
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
            <div className="max-w-[629px]">
              <p className="unbounded text-[25px] text-[#FAFAFA]/90 leading-[142%] tracking-[-6%]">
                Words are futile without evidence. My results are loud, not
                silent. Scroll to discover the magic.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 py-2 md:py-[4em] lg:grid-cols-4 lg:items-center lg:justify-between">
          {records.map((record) => (
            <RecordCard key={record.title} {...record} />
          ))}
        </div>
      </div>
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
}

function RecordCard({ showIcons, useBlur, title, value, image }: ReportProps) {
  const brands = [
    {
      id: 1,
      name: "",
      designation: "Binance",
      image: "/binance.png",
    },
    {
      id: 2,
      name: "",
      designation: "Bitcoin",
      image: "/bitcoin.png",
    },
    {
      id: 3,
      name: "",
      designation: "Ethereum",
      image: "/ethereum.png",
    },
    {
      id: 4,
      name: "",
      designation: "Nav",
      image: "/nav-coin-nav.png",
    },
    {
      id: 5,
      name: "+10",
      designation: "",
      image: "/Frame 2121452974.png",
    },
  ];

  return (
    <div className="rounded-[30px] overflow-hidden border-2 border-slate-50/20 relative w-full  h-[326.75px] space-y-12">
      <Image
        src={image}
        className="rounded-b-[30px] h-full absolute object-cover"
        width={308.08}
        height={200}
        alt={title}
      />
      {useBlur ? (
        <div className="inset-0 absolute bg-black h-full rounded-[30px] opacity-90" />
      ) : (
        <div className="bg-[#1C1B20]" />
      )}
      <div className="z-50 relative text-white p-3">
        <h4 className="unbounded leading-[130%] font-extrabold tracking-[-2%] text-[50px]">
          {value}+
        </h4>
        <p className="jost text-white/60 leading-[130%]  tracking-[-2%] text-[30px]">
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
