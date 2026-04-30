import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-jost">
      {/* MAIN FOOTER GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <p className="text-xl leading-[99%] tracking-[-8%] text-white/60 jost">
              A crypto trader that makes you money.
            </p>
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md text-yellow-400 font-bold">
              A
            </div>
          </div>
          <div className="jost leading-[90%] tracking-[-8%] text-[20px]">
            <h3 className="text-[20px] font-medium mb-4 text-white/50 ">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="jost leading-[90%] tracking-[-8%] text-[20px]">
            <h3 className="text-[20px] font-medium mb-4 text-white/50 ">
              Supports
            </h3>
            <div className="space-y-4  text-white/50">
              <div className="space-y-2">
                <p className="text-white/50">Reach me directly?</p>
                <p className="text-white font-medium">
                  (123) 567 8901
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white/50">Need support?</p>
                <p className="text-white">
                  help@emmanuelagida.com
                </p>
              </div>
            </div>
          </div>
          <div className="jost text-white/50 leading-[90%] tracking-[-8%] text-[20px]">
            <h3 className=" font-medium mb-4 ">
              Socials
            </h3>
            <ul className="space-y-4">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">

          <p>
            © EliteAymide. All Rights Reserved. Built by WebsiteHub
          </p>

          <div className="flex gap-4">
            <span>Privacy policy</span>
            <span>Terms and condition</span>
            <span>Copyright</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
