import Image from "next/image";
import FlipLink from "../../FlipLink";

function Contributions() {
  return (
    <section id="contributions" className="flex max-w-full justify-between py-2">
      <Image
        src="/abstract2g 1.png"
        alt="ring"
        width={324}
        height={276}
      />
      <div className="flex flex-col gap-1">
        <FlipLink
          className="
    unbounded
    text-[50px]
    font-normal
    uppercase
    leading-[123%]
    tracking-[-0.08em]
    bg-[#F8A308]
    text-black
    right-32
    px-5
  "
        >
          Contribution
        </FlipLink>
        <FlipLink
          className="
    unbounded
    px-5
    text-[50px]
    right-24
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
    text-[50px]
    font-normal
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



