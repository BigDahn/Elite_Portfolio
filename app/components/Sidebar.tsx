"use client";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-[430px] bg-blue-950 z-50 flex flex-col p-6 gap-4 md:hidden">
          {/* Logo + Close button */}
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
          {/* Nav links */}
          <nav className="flex flex-col mx-auto justify-center w-full  items-center  gap-[1.4em]  unbounded text-[18px] font-semibold capitalize  text-white mt-8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about-me" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Sidebar;
