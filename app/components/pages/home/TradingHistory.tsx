import ExternalLinkButton from "../../ExternalLinkButton";
import Headings from "../../headings";
import SectionContainer from "../../SectionContainer";
import Image from "next/image";
import SectionContent from "../../SectionContent";

const trades = ["/e1.jpg", "/e11.jpg", "/e10.png"];

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
          <div className="text-white w-full grid md:grid-cols-2 gap-3 md:gap-x-12 items-center justify-between">
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
        <div className="grid md:grid-cols-3 gap-x-5">
          {trades.map((trade) => (
            <Image
              alt={trade}
              src={trade}
              width={521}
              height={420}
              key={trade}
            />
          ))}
          {trades.map((trade) => (
            <Image
              alt={trade}
              src={trade}
              width={521}
              height={420}
              key={trade}
            />
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
};

export default TradingHistory;
