import Image from "next/image";

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
        <ul className="flex items-center gap-[2em] uppercase text-[14px] border-2 border-transparent px-6 py-[1.4em] rounded-full text-white">
          <li className="border rounded-4xl py-3 px-4">navbar</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Book Consultation</li>
        </ul>
        <h3>2nd logo</h3>
      </nav>
    </header>
  );
}

export default Header;
