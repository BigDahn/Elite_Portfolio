"use client";

import { motion } from "motion/react";
import clsx from "clsx";

const DURATION = 0.25;
const STAGGER = 0.03;

type FlipLinkProps = {
  children: string;
  className?: string;
};

const FlipLink = ({
  children,
  className,
}: FlipLinkProps) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={clsx(
        `
        relative
        inline-block
        overflow-hidden
        whitespace-nowrap
        cursor-pointer
        `,
        className
      )}
    >
      {/* TOP LAYER */}
      <div className="flex">
        {children.split("").map((letter, i) => (
          <motion.span
            key={`top-${i}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      {/* BOTTOM LAYER */}
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlipLink;
