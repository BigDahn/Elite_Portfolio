"use client";

import Headings from "../../headings";
import SectionContainer from "../../SectionContainer";
import Image from "next/image";
import SectionContent from "../../SectionContent";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ProfitCalendar from "@/assets/images/100_record.jpg";
import BlueberryPayout from "@/assets/images/Blueberry_payout.jpg";
import BlueberryCert from "@/assets/images/blueberry_cert.png";
import MubiteWithdrawal from "@/assets/images/mubite_pay.jpg";
import WithdrawalOne from "@/assets/images/e1.jpg";
import WithdrawalTwo from "@/assets/images/e8.jpg";

const trades = [
  ProfitCalendar,
  BlueberryPayout,
  BlueberryCert,
  MubiteWithdrawal,
  WithdrawalOne,
  WithdrawalTwo,
];

const TradingHistory = () => {
  return (
    <SectionContainer id="trading-history" className="bg-black">
      <SectionContent className="space-y-10">
        <div className="space-y-5">
          <div className="space-y-10">
            <Headings
              text="Verified Trading History"
              textClassName="text-white"
            />
            <hr className="md:border-t  md:border-slate-50/10 " />
          </div>
          <div className="text-white p-5 py-10 w-full grid md:grid-cols-2 gap-3 md:gap-x-12 items-center justify-between">
            <div>
              <h3 className="unbounded uppercase leading-[110%] text-[#D9D9D9] tracking-[-11%] text-[30px] md:text-[50px] font-extrabold">
                Real Numbers.
              </h3>
              <h3 className="unbounded leading-[110%] text-[#D9D9D9] tracking-[-11%] text-[30px] md:text-[50px] font-extrabold uppercase">
                Real Impact
              </h3>
            </div>
            <div>
              <p className="jost font-normal text-[20px] md:text-[25px] text-[#FAFAFA]/90 leading-[120%] tracking-[-4%]">
                Video testimonials. Portfolio screenshots. Real numbers. The
                members who got in early are writing the stories — here&apos;s a
                sample.
              </p>
            </div>
          </div>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            1024: 3,
          }}
        >
          <Masonry gutter="20px">
            {trades.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={`Trade ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </SectionContent>
    </SectionContainer>
  );
};

export default TradingHistory;
