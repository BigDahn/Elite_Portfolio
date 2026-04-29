import Image from "next/image";
import React from "react";

function Header() {
  return (
    <main className="absolute top-0 left-0 right-0 z-9999 w-full bg-transparent">
      <header className="flex justify-between max-w-[1800px] px-[3em] py-[3em] items-center   mx-auto">
        <Image
          alt="logo"
          src="/Ayomide Logo 1.png"
          width={50}
          height={47}
          loading="eager"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex items-center gap-[2em] uppercase text-[14px] border-red-100 border px-6 py-[1.4em] rounded-full text-white">
          <h2 className="border rounded-4xl py-3 px-4">navbar</h2>
          <h2>navbar</h2>
          <h2>navbar</h2>
          <h2>navbar</h2>
          <h2>navbar</h2>
        </div>
        <h3>2nd logo</h3>
      </header>
    </main>
  );
}

export default Header;
