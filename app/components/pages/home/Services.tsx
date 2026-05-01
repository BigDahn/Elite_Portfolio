import ExternalLinkButton from "../../ExternalLinkButton"
import Headings from "../../headings"
import RadialBlur from "../../RadialBlur"
import SectionContainer from "../../SectionContainer"
import ServiceList from "./ServicesList"

const Services = () => {
  return (
    <SectionContainer id="my-services" className="bg-black">
      <div className="h-full px-10 py-14 overflow-hidden space-y-14 relative">
        <div className="pb-12">
          <Headings className="bg-white" text="Services" textClassName="text-white" />
        </div>
        <div>
          <div className="text-white w-full grid grid-cols-2 gap-x-12 items-center justify-between">
            <div>
              <h3 className="unbounded uppercase leading-[113%] text-[#D9D9D9] tracking-[-11%] text-[50px] font-extrabold">Strategic Services.</h3>
              <h3 className="unbounded leading-[110%] text-[#D9D9D9] tracking-[-11%] text-[50px] font-extrabold uppercase">For Lasting Impact</h3>
            </div>
            <div>
              <p className="jost font-light text-[25px] text-[#FAFAFA]/90 leading-[120%] tracking-[-4%]">A suite of high-value services designed to support organizations, institutions, and leaders—delivering expert guidance, strategic insight, and actionable solutions that drive growth.</p>
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
          <ExternalLinkButton text="More of my Services" href="/" className="w-67 py-4 gap-3.75!" textClassName="text-base!" />
        </div>
        <RadialBlur blurClassName="bottom-0" className="absolute -bottom-56" />
      </div>
    </SectionContainer>
  )
}

export default Services
