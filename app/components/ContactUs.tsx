"use client";

import { useId } from "react";
import Arrow from "@/assets/svgs/arrow.svg";
import { useRouter } from "next/navigation";

const ContactUsBtn = () => {
  const circlePathId = useId();
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/contact")}
      className="group relative hidden md:grid h-[50px] w-[50px] lg:h-[90px] lg:w-[90px] place-content-center rounded-full overflow-hidden"
    >
      {/* MAIN ICON */}
      <Arrow className="pointer-events-none relative z-10 rotate-45 text-black lg:h-[25px] h-[18px] " />

      {/* CIRCULAR TEXT — spins slowly on hover */}
      <svg
        viewBox="0 0 90 90"
        className="pointer-events-none absolute inset-0 z-10 group-hover:[animation:spin_8s_linear_infinite] w-[50px] h-[50px]  lg:w-[90px] lg:h-[90px]"
      >
        <path
          id={circlePathId}
          d="M45,45 m-42,0 a42,42 0 1,0 84,0 a42,42 0 1,0 -84,0"
          fill="none"
        />
        <text
          className="fill-white jost font-normal uppercase lg:text-[15px] text-[14px]"
          style={{ letterSpacing: "1em" }}
        >
          <textPath
            href={`#${circlePathId}`}
            startOffset="50%"
            textAnchor="middle"
          >
            CONTACT ME
          </textPath>
        </text>
      </svg>
    </button>
  );
};

export default ContactUsBtn;
