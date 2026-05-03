"use client";
import { useRef, useState, useCallback } from "react";
import ExternalLinkButton from "../../ExternalLinkButton";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function useScramble(originalText: string) {
  const [text, setText] = useState(originalText);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalFrames = originalText.length * 3;

    const tick = () => {
      setText(
        originalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor(iteration / 3)) return originalText[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      iteration++;
      if (iteration <= totalFrames) {
        frameRef.current = setTimeout(tick, 30);
      } else {
        setText(originalText);
      }
    };

    if (frameRef.current) clearTimeout(frameRef.current);
    tick();
  }, [originalText]);

  return { text, scramble };
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ServiceItem {
  title: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
}

interface ServiceRowProps extends ServiceItem {
  index: number;
}

// ─── Single Row ───────────────────────────────────────────────────────────────

const ServiceRow = ({
  index,
  title,
  description,
  href,
  ctaLabel = "Book Me Now",
}: ServiceRowProps) => {
  const { text, scramble } = useScramble(title);
  const [active, setActive] = useState(false);

  return (
    <div
      className={`h-50 group flex flex-col w-[100%] md:flex-row  items-center md:items-start  gap-4 md:gap-3 justify-between px-6 py-5 border-b border-white/10 cursor-default transition-colors duration-300 ${
        active ? "bg-white/5" : "bg-transparent"
      }`}
      onMouseEnter={() => {
        setActive(true);
        scramble();
      }}
      onMouseLeave={() => setActive(false)}
    >
      <div className="flex items-start w-full gap-3  md:gap-5">
        <span className="text-white/30 font-extrabold w-[20px]  capitalize jakarta  mt-1 select-none">
          {String(index).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-3  md:gap-1">
          <span className="text-white/70 jakarta font-extrabold text-[17px] md:text-3xl tracking-[-6%] leading-[113%] transition-all duration-150">
            {text}
          </span>
          {description && (
            <span className="text-white/70 text-[16px] md:text-[25px] font-normal jost tracking-[-4%] leading-[120%]">
              {description}
            </span>
          )}
        </div>
      </div>
      {href && (
        <div
          className={`transition-opacity duration-300  justify-end flex w-full ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <ExternalLinkButton
            href={href}
            text={ctaLabel}
            className="md:w-54 w-full"
            textClassName="text-base!"
          />
        </div>
      )}
    </div>
  );
};

// ─── List ────────────────────────────────────────────────────────────────────

interface ServiceListProps {
  services: ServiceItem[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <div className="w-full border-t border-white/10">
      {services.map((service, i) => (
        <ServiceRow key={i} index={i + 1} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
