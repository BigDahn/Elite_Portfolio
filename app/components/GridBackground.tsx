import type { ReactNode } from "react";


// components/HeroBackground.jsx
type HeroBackgroundProps = {
  children: ReactNode;
};

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-178.5 w-full overflow-hidden bg-[#05060d]">
        <div className="absolute inset-0"
          style={{
            background: `
            radial-gradient(circle at 50% 8%, rgba(88,56,255,0.95) 0%, rgba(70,45,220,0.85) 18%, rgba(30,25,95,0.72) 42%, rgba(8,9,18,1) 78%),
            linear-gradient(to bottom, #14162f 0%, #080910 100%)
          `,
          }}
        />

        <div
          style={{
            background: `
            radial-gradient(ellipse 18% 70% at 0% 50%, rgba(0,0,0,0.75) 0%, transparent 70%),
            radial-gradient(ellipse 18% 70% at 100% 50%, rgba(0,0,0,0.75) 0%, transparent 70%)
          `,
          }}
          className="absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 10% 35%, rgba(90,70,255,0.16) 0%, transparent 4%)",
            filter: "blur(55px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
            backgroundSize: "150px 150px",
            opacity: 0.9,
          }}
        />
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
