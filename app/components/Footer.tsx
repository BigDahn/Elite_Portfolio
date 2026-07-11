"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="w-screen z-9999999999 overflow-hidden  text-white font-jost"
      style={{ background: "url(/footer.png)" }}
    >
      <div className="overflow-hidden"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5">
            <p className="text-xl select-none leading-[99%] tracking-[-8%] text-white/60 jost">
              The crypto trader that makes you money.
            </p>
            <Image
              src="/Ayomide Logo 1.png"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          <div className="jost leading-[90%] tracking-[-8%] text-[20px]">
            <h3 className="text-[20px] font-medium mb-4 text-white/50 ">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-me">About Me</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
          <div className="jost leading-[90%] tracking-[-8%] text-[20px]">
            <h3 className="text-[20px] font-medium mb-4 text-white/50 ">
              Supports
            </h3>
            <div className="space-y-4  text-white/50">
              <div className="space-y-2">
                <p className="text-white/50">Reach me directly?</p>
                <div className="space-y-3">
                  <p className="text-white font-medium">+2347042161165</p>
                  <p className="text-white font-medium">+2348168130747</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-white/50">Need support?</p>
                <p className="text-white">eliteayomide1@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="jost text-white/50 leading-[90%] tracking-[-8%] text-[20px]">
            <h3 className=" font-medium mb-4 ">Socials</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/@EliteAyomide "
                  target="_blank"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="https://x.com/eliteayomide" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/eliteayomide"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/@eliteayomide?_r=1&_t=ZS-95UTULUsSTC "
                  target="_blank"
                >
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 jost">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[18px] tracking-[-5%] text-gray-400">
          <p>© EliteAyomide. All Rights Reserved. Built by WebsiteHub</p>

          <div className="flex gap-4 text-[13px]">
            <span>Privacy policy</span>
            <span>|</span>
            <span>Terms and condition</span>
            <span>|</span>
            <span>Copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
