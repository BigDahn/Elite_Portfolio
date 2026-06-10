import Headings from "../../headings";
import SectionContainer from "../../SectionContainer";

function Experience() {
  return (
    <SectionContainer id="Experience" className="bg-black py-4">
      <div className="h-19">
        <Headings
          text="Professional Experience"
          textClassName="text-[#D9D9D9]"
        />
      </div>
      {/*-- EXPERIENCE NOTE HERE & TABLE --*/}
      <section className="flex gap-[20em] items-start py-[3em] max-h-[500px] border-t-gray-400 border-b-gray-400 border-t border-b">
        <h2 className="text-[20px] text-white jost leading-[170%] tracking-[-10%] uppercase py-2.5">
          2026 - PRESENT
        </h2>

        <div className="flex flex-col gap-3">
          <h2 className="unbounded text-[30px] leading-[170%] tracking-[-6%] font-normal text-white">
            Mubite Prop Firm — Brand Partner & Video Creator
          </h2>
          <ul className="flex flex-col gap-1.5">
            <li className="text-[20px] font-[400px] satoshi leading-[120%] tracking-[-4%] max-w-[900px]">
              Produced and edited short-form content showcasing trading benefits
              of the Prop Firm, driving a 30% follower growth on the brand’s
              African exposure within 3 months.
            </li>
            <li className="text-[20px] font-[400px] satoshi leading-[120%] tracking-[-4%] max-w-[900px]">
              Designed content strategies and performance reports that improved
              campaign consistency and visual brand identity across all
              touchpoints.
            </li>
            <li className="text-[20px] font-[400px] satoshi leading-[120%] tracking-[-4%] max-w-[900px]">
              Collaborated with internal marketing teams to develop
              narrative-driven promotional videos that strengthened lead
              acquisition.
            </li>
          </ul>
        </div>
      </section>
    </SectionContainer>
  );
}

export default Experience;
