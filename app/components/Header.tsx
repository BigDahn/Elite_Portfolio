import Image from "next/image";
import ContactUsBtn from "./ContactUs";

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-9999 w-full bg-transparent">
      <nav className="flex justify-between max-w-[1800px] px-[3em] py-[3em] items-center   mx-auto">
        <Image
          alt="logo"
          src="/Ayomide Logo 1.png"
          width={50}
          height={47}
          loading="eager"
          style={{ width: "auto", height: "auto" }}
        />
        <ul className="flex items-center gap-[2em] uppercase border-2 border-primary/50 backdrop-blur-3xl text-[11.76px] drop-shadow-2xl jost bg-black/50 px-6 py-[1.4em] rounded-full text-white">
          <li className="rounded-4xl py-3 px-4">Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Book Consultation</li>
        </ul>
        <ContactUsBtn />
      </nav>
    </header>
  );
}

export default Header;
