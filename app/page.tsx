"use client"; import FooterArc from "./components/FooterArc"; import Hero from "./components/Hero";
import SectionContainer from "./components/SectionContainer";
import FAQ from "./components/pages/home/Faq";
import HomePageHero from "./components/pages/home/Hero";
import Services from "./components/pages/home/Services";
import Testimonials from "./components/pages/home/Testimonials";
import TrackRecord from "./components/pages/home/TrackRecord";
import TradingHistory from "./components/pages/home/TradingHistory";
import AboutMe from "./components/pages/home/aboutMe";

export default function Page() {
  return (
    <SectionContainer id="hero" className="">
      <Hero
        animate={true}
        followCursor={false}
        className="min-h-screen overflow-hidden lg:min-h-screen flex items-center lg:flex-col lg:justify-center relative"
      >
        <HomePageHero />
      </Hero>

      <AboutMe />
      <TrackRecord />
      <TradingHistory />
      <Services />
      <Testimonials
        testimonials={[
          {
            name: "James Okafor",
            handle: "@jamesokafor",
            rating: 5,
            content:
              "Elite Ayomide's crypto consulting completely changed how I approach trading. Up 3x in 6 months.",
          },
          {
            name: "Fatima Bello",
            handle: "@fatimab",
            rating: 5,
            content:
              "The one-on-one mentorship was worth every penny. Clear, actionable, and results-driven.",
          },
          {
            name: "Chidi Nwosu",
            handle: "@chidinwosu",
            rating: 4,
            content:
              "Best crypto mentor I've worked with. Simplified DeFi concepts I'd struggled with for years.",
          },
          {
            name: "Amaka Eze",
            handle: "@amakaeze",
            rating: 5,
            content:
              "I went from losing trades to consistent profits within 90 days. Highly recommend.",
          },
          {
            name: "Tunde Adesanya",
            handle: "@tundea",
            rating: 5,
            content:
              "The group mentorship community alone is worth it. Everyone is helpful and the signals are sharp.",
          },
          {
            name: "Ngozi Williams",
            handle: "@ngoziwill",
            rating: 5,
            content:
              "Exceptional service. The strategy sessions helped me build a portfolio I'm actually proud of.",
          },
        ]}
      />
      <FAQ
        items={[

          {
            question: "What services do you offer?",
            answer: [
              "Crypto consulting",
              "Crypto mentorship",
              "One-on-one crypto mentorship",
              "Private trading investment",
              "Video content creation",
              "Community growth strategy",
            ],
          },
          {
            question: "Who do you work with?",
            answer: [
              "Individuals looking for a profitable trading strategy through our crypto classes and mentorship.",
              "High-net-worth individuals in Africa or the diaspora seeking steady investment growth with strict risk management.",
              "Crypto brands looking to expand their reach through video content creation, marketing, and community management.",
            ],
          },
          {
            question: "How can clients get started?",
            answer: [
              "Send us an email: EliteAyomide@gmail.com",
              "Book a one-on-one session via the contact page.",
              "Send us a direct Telegram DM on @realeliteayomide.",
              "Send us a WhatsApp DM on +2347042161165 or +2347065000143.",
            ],
          },
          {
            question: "What are your rates or engagement models?",
            answer: ["Lifetime Mentorship: $100(One time fee)", "Community Strategy & Management: $500 per month", "Branding/Promotion: $15p per month"]
          },
        ]}
      />
      <FooterArc />
    </SectionContainer>
  );
}
