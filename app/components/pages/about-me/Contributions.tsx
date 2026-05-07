import Image from "next/image";
import FlipLink from "../../FlipLink";

function Contributions() {
  return (
    <section
      id="contributions"
      className="flex flex-col gap-[3em] md:flex-row max-w-full md:justify-between py-2"
    >
      <Image src="/abstract2g 1.png" alt="ring" width={324} height={276} />
      <div className="overflow-hidden flex relative flex-col px-5 gap-1 justify-center sm:w-screen lg:w-full items-center">
        <FlipLink
          className="
    unbounded
    w-fit
    text-[30px]
    lg:text-[50px]
    font-normal
    uppercase
    leading-[123%]
    tracking-[-0.08em]
    bg-[#F8A308]
    text-black
    absolute
    left-0
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
    w-fit
    py-2
    absolute
    text-[30px]
    lg:text-[50px]
    font-normal
    uppercase
    leading-[123%]
    tracking-[-0.08em]
    left-14
    bg-[#F8A308]
    text-black
  "
        >
          Participation
        </FlipLink>
        <FlipLink
          className="
    unbounded
    text-[30px]
    lg:text-[50px]
    font-normal
    py-2
    w-fit
    uppercase
    leading-[123%]
    px-5
    absolute
    tracking-[-0.08em]
    left-18
    lg:left-32
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
