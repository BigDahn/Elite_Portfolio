"use client";
import { useRef } from "react";
import Headings from "../../headings";
import SectionContainer from "../../SectionContainer";
import SectionContent from "../../SectionContent";

export interface Testimonial {
  name: string;
  handle?: string;
  avatar?: string;
  rating?: number;
  content: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? "#F8A308" : "none"}
        stroke={i < rating ? "#F8A308" : "#00000020"} // ← was #ffffff30
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-black/5 rounded-[20px] p-5 space-y-4 shrink-0 w-full md:max-h-113 min-h-80 flex flex-col justify-center">
    {/* ↑ was bg-white/5 border-white/10 */}
    <div className="flex items-center gap-3"></div>
    <p className="jost text-black/60 text-[23px] leading-[120%] tracking-[-4%] font-light">
      {testimonial.content}
    </p>
    {/* ↑ was text-white/60 */}
    <p className="jakarta font-bold text-black text-[22px] leading-tight">
      {testimonial.name}
    </p>
    <StarRating rating={testimonial.rating} />
  </div>
);


const MarqueeColumn = ({
  items,
  reverse = false,
  duration = "30s",
}: {
  items: Testimonial[];
  reverse?: boolean;
  duration?: string;
}) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden h-[600px]">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 z-10 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 z-10 bg-gradient-to-t from-white to-transparent" />
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `${reverse ? "marqueeUp" : "marqueeDown"} ${duration} linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
};


const MobileCarousel = ({ items }: { items: Testimonial[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="flex relative flex-col gap-4 items-center overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 z-10 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 z-10 bg-gradient-to-t from-white to-transparent" />
      {items.map((t, i) => (
        <div key={i} className="snap-center shrink-0 w-[80vw] max-w-[320px]">
          <TestimonialCard testimonial={t} />
        </div>
      ))}
    </div>
  );
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  // Split into 3 columns
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <SectionContainer id="testimonials" className="bg-white overflow-hidden">
      {/* keyframes */}
      <style>{`
        @keyframes marqueeDown {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeUp {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <SectionContent className="space-y-10">
        <div className="space-y-5 text-center flex  items-center flex-col">
          <Headings
            text="Trusted and experienced power elite CUSTOMERS"
            textClassName="text-base! leading-[170%]!"
            headerClassName="flex flex-col gap-2 items-center md:flex md:flex-row md:items-center md:gap-3"
          />
          <h3 className="font-bold uppercase text-center jakarta text-[36px] md:text-[50px] leading-[113%] tracking-[-0.11em] text-black">
            500+ Trusted Customers
          </h3>
        </div>

        {/* DESKTOP — 3 marquee columns */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          <MarqueeColumn items={col1} duration="28s" />
          <MarqueeColumn items={col2} reverse duration="22s" />
          <MarqueeColumn items={col3} duration="35s" />
        </div>

        {/* MOBILE — horizontal carousel */}
        <div className="md:hidden">
          <MobileCarousel items={testimonials} />
        </div>
      </SectionContent>
    </SectionContainer>
  );
};

export default Testimonials;
