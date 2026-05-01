import Image from "next/image";

function Contributions() {
  return (
    <section className="flex justify-center py-2">
      <Image
        src="/abstract2g 1.png"
        alt="ring"
        width={324}
        height={276}
        className="w-[324px] h-[276px]"
      />
      <div className="flex flex-col gap-1">
        <div className="w-[365px] unbounded px-3 bg-[#F8A308] text-[50px] leading-[123%] tracking-[-8%] h-[82px]">
          <h3>Contribution</h3>
        </div>
        <div className="w-[356px] px-3 relative top-[-4%] left-[50%] unbounded bg-[#F8A308] text-[50px] leading-[123%] tracking-[-8%] h-[82px]">
          <h3>Participation</h3>
        </div>
        <div className="w-[356px] px-3 relative top-[-10%] left-[100%] unbounded bg-[#F8A308] text-[50px] leading-[123%] tracking-[-8%] h-[82px]">
          <h3>Attribution</h3>
        </div>
      </div>
    </section>
  );
}

export default Contributions;
