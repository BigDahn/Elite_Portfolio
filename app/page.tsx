import GridBackground from "./components/GridBackground";
import { Play, Send } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <GridBackground>
      <div className="flex flex-col gap-[2em] items-center justify-center  max-w-[872px] max-h-[355px] h-full w-full ">
        <div className="flex flex-col items-center gap-3 justify-center text-center w-full">
          <div>
            <h1
              className="unbounded text-[70px] font-bold leading-[107%] tracking-[-8%] text-white relative"
            >
              A crypto trader that makes you money.
            </h1>
            <Image
              src="/homearrow.png"
              alt="Home Arrow"
              width={100}
              height={100}
              className="w-[370px] absolute bottom-[170px] right-[104px] "
            />
          </div>
          <h4 className="text-center max-w-[700px] text-[26px] font-[400px] leading-[130%] tracking-[-4%] text-gray-500 mt-5">
            Helping traders and investors navigate the trading space profitably
            with information and education.
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <button className="py-[1em] bg-white text-[15px] rounded-full px-[2em] font-semibold flex items-center gap-2">
            <Send fill="black" className="rotate-[260deg]" />{" "}
            <h3>view my portfolio</h3>
          </button>
          <div className="flex items-center gap-4 text-[14px] text-white font-semibold">
            <button className="bg-yellow-400 py-2 px-2 rounded-full flex items-center gap-2 ">
              <Play size={19} fill="white" />
            </button>
            <h2>More Results</h2>
          </div>
        </div>
      </div>
      ;
    </GridBackground>
  );
}
