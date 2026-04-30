import Headings from "../../headings"
import SectionContainer from "../../SectionContainer"
import Image from "next/image"


const trades = [
  "/e1.png", "/e12.png", "/e11.png", "/e10.png", "/e9.png"]

const TradingHistory = () => {
  return (
    <SectionContainer id="trading-history" className="bg-black">
      <div className="px-10">
        <div className="space-y-5">
          <div className="space-y-10">
            <Headings text="Verified Trading History" textClassName="text-white" />

            <hr className="border-t border-slate-50/10" />
          </div>
          <div className="text-white w-full grid grid-cols-2 gap-x-12 items-center justify-between">
            <div>
              <h3 className="unbounded uppercase leading-[110%] text-[#D9D9D9] tracking-[-11%] text-[50px] font-extrabold">Real Numbers.</h3>
              <h3 className="unbounded leading-[110%] text-[#D9D9D9] tracking-[-11%] text-[50px] font-extrabold uppercase">Real Impact</h3>
            </div>
            <div>
              <p className="jost font-normal text-[25px] text-[#FAFAFA]/90 leading-[120%] tracking-[-4%]">Video testimonials. Portfolio screenshots. Real numbers. The members who got in early are writing the stories — here&apos;s a sample.</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          {trades.map((trade) => <Image alt={trade} src={trade} fill key={trade} />)}
        </div>
      </div>
    </SectionContainer>
  )
}

export default TradingHistory
