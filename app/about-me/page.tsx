import Image from "next/image";
import Contributions from "../components/pages/about-me/Contributions";

const Page = () => {
  return (
    <main className="min-h-screen bg-black">
      <div className="min-h-[800px] bg-blue-900 flex flex-col relative justify-center items-center boprder-b border-gray-400">
        <div className="flex flex-col max-w-[1002px] gap-4 justify-center items-center px-4 py-3  text-center">
          <h1 className="unbounded text-white font-semibold text-[70px] capitalize max-w-[850px] leading-[93%] tracking-[-8%] text-center">
            A Crypto Trader with 6 years of experience
          </h1>
          <p className="jost text-[30px] text-gray-400 font-[400px] leading-[130%] tracking-[-4%]">
            I am a crypto trader with deep knowledge about the market. I have
            partnered with several crypto brands and helped traders achieve the
            best results in the crypto space
          </p>
        </div>
        <div className="rounded-full h-[141px] w-[84.5px] border border-gray-400 absolute bottom-[0%]">
          <h6 className="jost font-[400px] text-[10px] leading-[130%] tracking-[-6%] text-center">
            Scroll Down
          </h6>
        </div>
      </div>
      <Contributions />
    </main>
  );
};

export default Page;
