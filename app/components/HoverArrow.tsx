"use client"

import { motion, Variants } from "motion/react";
import { ArrowUpIcon } from "lucide-react"; // or your icon library


const arrow1Variants: Variants = {
  initial: { x: 0, y: 0, opacity: 1 },
  hover: { x: 25, y: -25, opacity: 0 }
};

const arrow2Variants: Variants = {
  initial: { x: -25, y: 25, opacity: 0 },
  hover: { x: 0, y: 0, opacity: 1 }
};

export default function HoverArrow({ isHovered }: { isHovered: boolean }) {
  return (
    <motion.div
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-3xl relative overflow-hidden cursor-pointer"
    >
      <motion.div variants={arrow1Variants} className="absolute transition-colors">
        <ArrowUpIcon size={16} className="rotate-45" />
      </motion.div>
      <motion.div variants={arrow2Variants} className="absolute">
        <ArrowUpIcon size={16} className="rotate-45" />
      </motion.div>
    </motion.div>
  );
}
