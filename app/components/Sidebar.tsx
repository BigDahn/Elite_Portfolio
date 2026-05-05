"use client";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const navItems = [
  { label: "Home", href: "/", exact: true },
  { label: "About Me", href: "/about-me" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Book Consultation", href: "/contact", aliases: ["/contact-us"] },
];

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[10000] md:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ y: "-6%", opacity: 0.7, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "-4%", opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="relative h-dvh w-full bg-blue-950 flex flex-col p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <Image
                alt="logo"
                src="/Ayomide Logo 1.png"
                width={50}
                height={47}
                style={{ width: "auto", height: "auto" }}
              />
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center gap-4 text-center">
              {navItems.map((item, index) => {
                const activePaths = [item.href, ...(item.aliases ?? [])];
                const isActive = item.exact
                  ? activePaths.includes(pathname)
                  : activePaths.some(
                      (activePath) =>
                        pathname === activePath ||
                        pathname.startsWith(`${activePath}/`),
                    );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ delay: 0.06 * index, duration: 0.26 }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block w-full rounded-2xl px-6 py-4 unbounded text-[clamp(1.8rem,7vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white/12 hover:text-[#F8A308]",
                        isActive &&
                          "bg-white/12 text-[#F8A308] shadow-[0_0_0_1px_rgba(248,163,8,0.35)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
