import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-jost">
      {/* MAIN FOOTER GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              A crypto trader that makes you money.
            </p>
            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md text-yellow-400 font-bold">
              A
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About Me</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Supports
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p>Reach me directly?</p>
                <p className="text-white font-medium">
                  (123) 567 8901
                </p>
              </div>

              <div>
                <p>Need support?</p>
                <p className="text-white">
                  help@emmanueldjida.com
                </p>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">
              Socials
            </h3>

            <ul className="space-y-2 text-sm">
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
