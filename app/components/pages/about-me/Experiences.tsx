import Headings from "../../headings";
import { Check } from "lucide-react";

const ExperiencesArray: IProfessionalExperience[] = [
  {
    date: "2026 - PRESENT",
    title: "Mubite Prop Firm — Brand Partner & Video Creator",
    achievements: [
      "Produced and edited short-form content showcasing trading benefits of the Prop Firm, driving a 30% follower growth on the brand’s African exposure within 3 months.",
      "Designed content strategies and performance reports that improved campaign consistency and visual brand identity across all touchpoints.",
      "Collaborated with internal marketing teams to develop narrative-driven promotional videos that strengthened lead acquisition.",
    ],
  },
  {
    date: "2025 - PRESENT",
    title: "Pumpkin DEX - Brand Partner",
    achievements: [
      "Livestream 3 times a week on the platform, teaching and analysing the technical analysis of the crypto and the commodity Markets.",
      "Collaborated with the internal team to drive narrative driven promotional contents to drive sign-ups and Volume on the DEX.",
    ],
  },
  {
    date: "2025 - 2026",
    title: "Blueberry Funded — Brand Partner & Video Creator",
    achievements: [
      "Produced and edited short-form content showcasing trading benefits, driving a 35% follower growth on the brand’s TikTok handle within 3 months.",
      "Designed content calendars and performance reports that improved campaign consistency and visual brand identity across all touchpoints.",
      "Collaborated with internal creative teams to develop narrative-driven promotional videos that strengthened lead acquisition.",
    ],
  },
  {
    date: "2023 - PRESENT",
    title: "Bybit Exchange — Affiliate & Content Creator",
    achievements: [
      "Generated over $2.1M trading volume through affiliate-driven campaigns and targeted content strategies.",
      "Onboarded nearly 200 verified traders through organic content on YouTube, TikTok, and Telegram.",
      "Developed 20+ crypto explainer videos that simplified trading tools, leading to a 22% click-through rate improvement on referral links.",
      "Partnered with Bybit’s marketing division to amplify campaigns, achieving an average engagement rate of 8.5% per post.",
    ],
  },
  {
    date: "2023 - 2025",
    title: "OptionFlow Finance — Community Moderator",
    achievements: [
      "Oversaw Discord and Telegram channels exceeding 25,000 members, maintaining high engagement and reducing spam incidents by 60% through structured moderation systems.",
      "Created announcement campaigns that consistently reached 90%+ message visibility, enhancing investor confidence and communication clarity.",
      "Developed and executed FAQ automation workflow, decreasing repetitive inquiries by 40%, freeing developer time for core operations.",
      "Collaborated with the marketing team to deliver promotional content and partnership updates, resulting in a 15% monthly increase in returning community users.",
    ],
  },
  {
    date: "2022 - 2025",
    title: "MuesliSwap DEX (Cardano) — Community Manager",
    achievements: [
      "Managed multi-channel communication hubs (Discord, X & Telegram) with 12K+ combined members, achieving 25% higher weekly engagement rate via active discussions and contests.",
      "Authored over 50+ project announcements and partnership updates, contributing to steady liquidity inflow and consistent trading volume growth.",
      "Designed and launched user education initiatives (“Ask Me Anything” sessions & beginner threads), increasing new-user retention by 18% within two months.",
      "Collaborated with the core dev team to communicate technical updates in digestible content formats for both retail and institutional investors.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="py-10 space-y-12" id="professional-experiences">
      <div className="px-10">
        <Headings text="Professional Experiences" textClassName="text-white" />
      </div>
      <div className="px-2">
        {ExperiencesArray.map((experience) => (
          <ProfessionalExperience {...experience} key={experience.title} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;

interface IProfessionalExperience {
  date: string;
  title: string;
  achievements: string[];
}

function ProfessionalExperience({
  date,
  title,
  achievements,
}: IProfessionalExperience) {
  return (
    <div className="border-y border-y-white/5 min-h-75 grid relative grid-cols-1 md:grid-cols-[minmax(100px,150px)_1fr] lg:grid-cols-[minmax(293px,350px)_1fr] text-white/70">
      <div className="relative jost font-medium leading-[170%] tracking-[-10%] text-[14px] md:text-lg lg:text-xl p-10">
        <p>{date}</p>
        <div
          className="absolute h-4 w-4 bg-[#CC9933] left-2 md:-right-2 top-12"
          style={{ backgroundColor: "gold" }}
        />
      </div>
      <div className="border-l border-l-white/5 flex flex-col space-y-3 p-10 px-15">
        <h3 className="unbounded font-medium text-[15px] md:text-2xl lg:text-2xl leading-[170%] tracking-[-6%] text-white">
          {title}
        </h3>
        <ul className="space-y-4">
          {achievements.map((achievement, index: number) => (
            <li
              key={index}
              className="satoshi font-light flex items-start gap-x-3 text-white/50 text-sm md:text-base lg:text-lg"
            >
              <div
                className="md:h-6 md:w-6 h-3 w-3 items-center justify-center  rounded-full"
                style={{ backgroundColor: "gold" }}
              >
                {" "}
                <Check color="black" className="p-1 stroke-4 rotate-12" />
              </div>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
