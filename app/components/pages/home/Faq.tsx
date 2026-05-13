"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Headings from "../../headings";
import RadialBlur from "../../RadialBlur";
import SectionContainer from "../../SectionContainer";

export interface FAQItem {
  question: string;
  answer: string | string[];
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  return (
    <SectionContainer id="faq" className="bg-black">
      <div className="h-full px-10 py-14 overflow-hidden space-y-12 relative">
        <div className="mx-auto flex flex-col items-center relative z-50 text-center gap-4 max-w-221.5">
          <h2 className="unbounded text-white font-extrabold text-[25px] md:text-[46px] leading-tight">
            Frequently Asked Question
          </h2>
          <p className="jost font-light text-white/50 text-[15px] md:text-[25px] max-w-[344px] md:max-w-[880px] leading-[130%] tracking-[-2%]">
            Find quick answers about Elite Ayomide crypto and earning options.
            Get the information you need to trade smarter
          </p>
        </div>
        <div className="max-w-6xl mx-auto w-full">
          <Accordion type="single" collapsible defaultValue="item-0" asChild>
            <ul className="m-0 list-none p-0">
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  asChild
                  className="hover:bg-slate-100/5 duration-500 px-5 rounded-lg py-2 min-h-32 flex flex-col justify-center"
                >
                  <li>
                    <AccordionTrigger className="jost text-white font-medium text-[15px] hover:no-underline hover:text-white/80 transition-colors [&>svg]:hidden flex justify-between items-start  gap-4 group">
                      <span className="unbounded max-w-[170px] md:max-w-lg text-[15px] md:text-[20px] leading-[130%] tracking-[-2%] text-left">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="jost max-w-6xl text-white/50 font-normal text-[13px] md:text-[16px] leading-[160%] pt-1 pb-4">
                      {Array.isArray(item.answer) ? (
                        <ul className="list-disc space-y-2 pl-5">
                          {item.answer.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        item.answer
                      )}
                    </AccordionContent>
                  </li>
                </AccordionItem>
              ))}
            </ul>
          </Accordion>
        </div>
        <RadialBlur className="absolute -top-32" />
      </div>
    </SectionContainer>
  );
};

export default FAQ;
