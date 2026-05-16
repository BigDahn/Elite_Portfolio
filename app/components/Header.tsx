"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUsBtn from "./ContactUs";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import MobileNav from "./Navbar";
import Sidebar from "./Sidebar";

const navItems = [
  { label: "Home", href: "/", exact: true },
  { label: "About Me", href: "/about-me" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Book Consultation", href: "/contact", aliases: ["/contact-us"] },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobileViewport = window.innerWidth < 780;

      if (!isMobileViewport) {
        setIsMobileNavVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 0) {
        setIsMobileNavVisible(true);
        lastScrollY.current = 0;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;
      if (Math.abs(delta) < 8) return;

      if (delta > 0 && currentScrollY > 64) {
        setIsMobileNavVisible(false);
      } else {
        setIsMobileNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsMobileNavVisible(true);
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-9999 w-full bg-transparent transition-transform duration-300 md:translate-y-0",
        isMobileNavVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav className="flex justify-between max-w-450 px-4 md:px-[3em] py-[2em] lg:py-[1em] items-center  mx-auto">
        <Link href="/">
          <Image
            alt="logo"
            src="/Ayomide Logo 1.png"
            width={50}
            height={47}
            loading="eager"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ul className=" hidden md:flex md:items-center lg:gap-[2em] uppercase border-2 border-black/10 backdrop-blur-3xl   text-[9px] lg:text-[11.76px] drop-shadow-2xl jost bg-black/50 px-3 lg:px-6 py-[1em] lg:py-[1.4em] rounded-full text-white">
          {navItems.map((item) => {
            const activePaths = [item.href, ...(item.aliases ?? [])];
            const isActive = item.exact
              ? activePaths.includes(pathname)
              : activePaths.some(
                (activePath) =>
                  pathname === activePath ||
                  pathname.startsWith(`${activePath}/`),
              );

            return (
              <motion.li key={item.label} layout className="relative">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative z-10 rounded-full jost font-medium text-[12px] px-4 py-3 transition-colors duration-200 hover:text-[#F8A308] flex items-center justify-center",
                    isActive && "text-white font-semibold px-10 py-4",
                  )}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-active-bg"
                    className="absolute inset-0 bg-white/10 bg-[#CC9933]/20 border-b-2 border-[#cc9933] rounded-full -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
        <ContactUsBtn />
      </nav>
    </header>
  );
}

export default Header;
