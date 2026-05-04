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
      className="group relative hidden md:grid h-[90px] w-[90px] place-content-center rounded-full overflow-hidden"
    >
      {/* MAIN ICON */}
      <Arrow className="pointer-events-none relative z-10 rotate-45 text-black" />

      {/* CIRCULAR TEXT — spins slowly on hover */}
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        className="pointer-events-none absolute inset-0 z-10 group-hover:[animation:spin_8s_linear_infinite]"
      >
        <path
          id={circlePathId}
          d="M45,45 m-42,0 a42,42 0 1,0 84,0 a42,42 0 1,0 -84,0"
          fill="none"
        />
        <text
          className="fill-white jost font-normal uppercase"
          style={{ fontSize: "15px", letterSpacing: "1em" }}
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
