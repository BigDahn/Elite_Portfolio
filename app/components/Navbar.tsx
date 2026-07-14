"use client";

import { Menu, PhoneOutgoing } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function MobileNav({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <div
      className="flex items-center w-[114px] h-[66px] justify-center rounded-md gap-3 outline
    outline-gray-100/20 bg-[#222B59] md:hidden"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href={"/contact"}
          className="bg-[#F8A308] w-[40px] h-[39px] rounded-md flex items-center justify-center"
        >
          <PhoneOutgoing strokeWidth={2.1} />
        </Link>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Menu color="silver" size={30} />
      </motion.button>
    </div>
  );
}

export default MobileNav;
