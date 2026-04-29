import Image from "next/image";
import React from "react";

function CryptoVec() {
  return (
    <div>
      {" "}
      <div className="flex items-center px-[2em] relative top-[-20px]">
        <div className="w-[47px] h-[47px] rounded-full bg-[#FFE477] flex items-center justify-center">
          <Image src="/binance.png" alt="binance" width={100} height={100} />
        </div>
        <div className="w-[47px] h-[47px] rounded-full bg-[#F5B300] flex items-center relative right-4 justify-center">
          <Image src="/bitcoin.png" alt="binance" width={100} height={100} />
        </div>
        <div className="w-[47px] h-[47px] rounded-full bg-[#5580EF] flex relative right-8 items-center justify-center">
          <Image
            src="/ethereum2.png"
            alt="ethereum"
            width={30}
            height={10}
            className="object-cover"
          />
        </div>
        <div className="w-[47px] h-[47px] rounded-full bg-[#7D59B5] flex items-center relative right-12 justify-center">
          <Image
            src="/Nvec.png"
            alt="ethereum"
            width={30}
            height={30}
            className="object-cover"
          />
        </div>
        <div className="w-[47px] h-[47px] rounded-full bg-[#1C1B20] font-[400px] leading-[130%] relative right-15 tracking-[-2%] text-white text-[18px] flex items-center justify-center">
          +10
        </div>
      </div>
    </div>
  );
}

export default CryptoVec;
