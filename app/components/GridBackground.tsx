import type { ReactNode } from "react";


// components/HeroBackground.jsx
type HeroBackgroundProps = {
  children: ReactNode;
};

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-178.5 w-full overflow-hidden bg-[#05060d]">
        <div className="relative  max-w-[872px] flex  m-auto top-[40%] z-10">
          {children}
        </div>
      </div>
      <div className="min-w-screen z-50">
        <video
          src="/47f6d05d-a120-471f-b8e4-55016c8548ea.mp4"
          className=""
          autoPlay
          loop
        />
      </div>
    </main>
  );
}
