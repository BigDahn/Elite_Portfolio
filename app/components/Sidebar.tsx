"use client";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="h-screen fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full h-screen bg-blue-950 z-999 flex flex-col p-6 gap-4 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Image
                alt="logo"
                src="/Ayomide Logo 1.png"
                width={50}
                height={47}
                style={{ width: "auto", height: "auto" }}
              />
              <button onClick={() => setIsOpen(false)}>
                <X color="white" size={24} />
              </button>
            </div>
            <nav className="flex flex-col mx-auto justify-center h-screen w-full items-center gap-[1.4em] unbounded text-[18px] font-semibold capitalize text-white mt-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about-me", label: "About Me" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
