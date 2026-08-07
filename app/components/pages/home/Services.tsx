import ExternalLinkButton from "../../ExternalLinkButton";
import Headings from "../../headings";
import RadialBlur from "../../RadialBlur";
import SectionContainer from "../../SectionContainer";
import ServiceList from "./ServicesList";
import Looper from "@/assets/svgs/Looper-3.svg";
import SectionContent from "../../SectionContent";

const Services = () => {
  return (
    <SectionContainer id="my-services" className="bg-black">
      <SectionContent className="h-full overflow-hidden space-y-14 relative">
        <div className="absolute right-0 -top-10">
          <Looper />
        </div>
        <div className="md:pb-12 pb-2">
          <Headings
            className="bg-white"
            text="Services"
            textClassName="text-white"
          />
        </div>
        <div className="w-full ">
          <div className="text-white w-full relative grid space-y-5 lg:space-y-0 lg:grid-cols-2 gap-x-12 gap-2 items-center z-20 justify-between p-5 py-10">
            <div className="relative z-30">
              <h3 className="unbounded uppercase leading-[113%] text-[#D9D9D9] tracking-[-11%] text-[30px] lg:text-[45px] font-extrabold">
                Strategic Services.
              </h3>
              <h3 className="unbounded leading-[110%] text-[#D9D9D9] tracking-[-11%] text-[30px] lg:text-[45px] font-extrabold uppercase">
                For Lasting Impact
              </h3>
            </div>
            <div>
              <p className="jost font-normal text-[20px] md:text-[25px] text-[#FAFAFA]/90 leading-[120%] tracking-[-4%]">
                A suite of high-value services designed to support
                organizations, institutions, and leaders—delivering expert
                guidance, strategic insight, and actionable solutions that drive
                growth.
              </p>
            </div>
          </div>
        </div>
        <ServiceList
          services={[
            {
              title: "Crypto Consulting",
              description: "Advisory on crypto investment and trading to make.",
              href: "https://cal.com/yourlink",
              ctaLabel: "Book Me Now",
            },
            { title: "Crypto Mentorship", href: "https://cal.com" },
            { title: "One-on-One Crypto Mentorship", href: "https://cal.com" },
          ]}
        />
        <div className="flex justify-center relative z-10">
          <ExternalLinkButton
            text="More of my Services"
            href="/services"
            className="md:w-67 w-fit px-5 py-4 gap-3.75!"
            textClassName="text-base!"
          />
        </div>
        <RadialBlur blurClassName="bottom-0" className="absolute -bottom-56" />
      </SectionContent>
    </SectionContainer>
  );
};

export default Services;
