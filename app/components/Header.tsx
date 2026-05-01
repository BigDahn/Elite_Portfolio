"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactUsBtn from "./ContactUs";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", exact: true },
  { label: "About Me", href: "/about-me" },
  { label: "Services", href: "/#my-services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Book Consultation", href: "/contact", aliases: ["/contact-us"] },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-9999 w-full bg-transparent">
      <nav className="flex justify-between max-w-450 px-[3em] py-[3em] items-center   mx-auto">
        <Image
          alt="logo"
          src="/Ayomide Logo 1.png"
          width={50}
          height={47}
          loading="eager"
          style={{ width: "auto", height: "auto" }}
        />
        <ul className="flex items-center gap-[2em] uppercase border-2 border-black/10 backdrop-blur-3xl text-[11.76px] drop-shadow-2xl jost bg-black/50 px-6 py-[2.4em] rounded-full text-white">
          {navItems.map((item) => {
            const activePaths = [item.href, ...(item.aliases ?? [])];
            const isActive = item.exact
              ? activePaths.includes(pathname)
              : activePaths.some((activePath) =>
                pathname === activePath || pathname.startsWith(`${activePath}/`)
              );

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full jost font-medium text-[12px] px-4 py-3 transition-colors duration-200 hover:text-[#F8A308] ",
                    isActive && "bg-white/10 bg-[#CC9933]/20    text-white font-semibold border-b-2 px-10 py-4 border-[#cc9933] h-[50px]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ContactUsBtn />
      </nav>
    </header>
  );
}

export default Header;
