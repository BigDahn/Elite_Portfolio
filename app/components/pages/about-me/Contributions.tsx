import Image from "next/image";
import FlipLink from "../../FlipLink";

function Contributions() {
  return (
    <section
      id="contributions"
      className="flex flex-col gap-[3em] md:flex-row max-w-full md:justify-between py-2"
    >
      <Image src="/abstract2g 1.png" alt="ring" width={324} height={276} />
      <div className="flex flex-col gap-1 ">
        <FlipLink
          className="
    unbounded
    text-[28px]
    md:text-[50px]
    font-normal
    uppercase
    leading-[123%]
    tracking-[-0.08em]
    bg-[#F8A308]
    text-black
    right-[-8px]
    md:right-[390px]
    py-2
   px-5
  
  "
        >
          Contribution
        </FlipLink>
        <FlipLink
          className="
    unbounded
    px-5
    py-2
    text-[28px]
    md:text-[50px]
    bottom-[4.2px]
    right-[-100.5px]
    md:bottom-[3.04px]
    md:right-[180px]
    font-normal
    uppercase
    leading-[123%]
    tracking-[-0.08em]
    bg-[#F8A308]
    text-black
  "
        >
          Participation
        </FlipLink>
        <FlipLink
          className="
    unbounded
    text-[28px]
    md:text-[50px]
    font-normal
    py-2
    right-[-155px]
    bottom-[8.3px]
    md:bottom-[6.7px]
    md:right-[-13px]
    uppercase
    leading-[123%]
    px-5
    tracking-[-0.08em]
    bg-[#F8A308]
    text-black
  "
        >
          Attribution
        </FlipLink>
      </div>
    </section>
  );
}

export default Contributions;
