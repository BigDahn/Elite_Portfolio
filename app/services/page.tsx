import ExternalLinkButton from "../components/ExternalLinkButton";
import FooterArc from "../components/FooterArc";
import Hero from "../components/Hero";
import Image from "next/image";

const services = [
  {
    label: "Crypto Consulting",
    description: "Advisory on crypto investment and trading to make.",
    content:
      "This service is designed to make life easier for your crypto trading and investment decisions. We will host calls together to help you solve the problems of unprofitability. Crypto decisions need an expert like us to help you. With over 70% win rate, our services will help you make more money.",
  },
  {
    label: "Crypto Membership",
    description: "Advisory on crypto investment and trading to make.",
    content:
      "Most traders don't struggle because of psychology, they struggle because of strategy. Our mentorship academy equips you with battle-tested frameworks across Crypto, Forex, and Stock trading. With a 70% student profitability rate, our results speak for themselves. Enroll once, and gain lifetime access to our ever-evolving library of proven strategies.",
    cta: " https://eliteayomidesolutions.com/elite-academy/",
  },
  {
    label: "Private Trading Investments",
    description: "Advisory on crypto investment and trading to make.",
    content:
      "Don't have time to trade? Let the experts handle it. We manage your capital using disciplined risk management and our proprietary trading strategies  with full transparency and legal backing at every step. Choose your preferred payout structure: monthly, quarterly, or annually. Your money, professionally managed.",
    cta: "https://t.me/realeliteayomide ",
  },
  {
    label: "Video Content Creation",
    description: "Advisory on crypto investment and trading to make.",
    content:
      "In today's attention economy, visibility is everything. With a 20,000+ member community spanning our social media platforms, we help brands break through the noise. We produce high-quality, platform-optimized video content tailored to your brand's identity, goals, and audience, at a rate that actually makes sense for your budget.",
    cta: "mailto://Eliteayomide1@gmail.com",
    text: "Send a mail",
  },
  {
    label: "Community Growth Strategies",
    description: "Advisory on crypto investment and trading to make.",
    content:
      "Every serious crypto project needs a thriving community because without growth, there's no proof of life. We deploy tested, data-driven strategies to build you a community that doesn't just grow in numbers, but in loyalty and engagement. From launch to scale, we make your community your strongest asset.",
    cta: "https://t.me/realeliteayomide ",
    text: "Telegram",
  },
];

const Page = () => {
  return (
    <div className="bg-black">
      <Hero className="h-[60vh]">
        <div />
      </Hero>
      <div className="bg-black space-y-16 pb-24 px-4">
        {services.map((service) => (
          <ServiceCard {...service} key={service.label} />
        ))}
      </div>
      <FooterArc />
    </div>
  );
};

export default Page;

interface IServiceCard {
  label: string;
  description: string;
  content: string;
  cta?: string;
}

const ServiceCard = ({ label, description, content, cta }: IServiceCard) => {
  return (
    <div className="rounded-t-lg max-w-7xl mx-auto relative h-125">
      <Image
        src="/Frame 2121453901.png"
        className="top-24"
        fill
        alt="Service Image"
      />
      <div className="bg-[#0B0B0B] rounded-t-lg p-3 flex items-center z-999 relative justify-center flex-col">
        <h2 className="unbounded text-[20px] text-center lg:text-[50px] text-transparent leading-[93%] py-3 tracking-[-8%] bg-linear-to-b from-white to-blue-800 bg-clip-text">
          {label}
        </h2>
        <p className="jost leading-[120%] tracking-[-4%] text-center lg:text-2xl text-white/70">
          {description}
        </p>
      </div>
      <div className="relative">
        <p className="py-18 text-justify px-20 text-white/70 font-mono z-50 relative">
          {content}
        </p>
        {cta && (
          <ExternalLinkButton
            href={cta}
            text="Link"
            className="mx-auto py-4 px-4"
          />
        )}
      </div>
    </div>
  );
};
