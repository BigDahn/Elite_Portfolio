"use client";

import FooterArc from "./components/FooterArc";
import Hero from "./components/Hero";
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
    <SectionContainer id="hero">
      <Hero
        animate={true}
        followCursor={false}
        className="overflow-hidden h-screen lg:min-h-screen flex items-center lg:flex-col lg:justify-center relative"
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
            question: "How does Elite Ayomide work?",
            answer:
              "Ayomide AI-driven bots to automate trading, security, and monitoring, ensuring fast and efficient blockchain transactions.",
          },
          {
            question: "Is my data secure with Ayomide?",
            answer:
              "Yes, we use industry-standard encryption and security protocols to keep your data safe at all times.",
          },
          {
            question: "What are the earning options available?",
            answer:
              "You can earn through staking, trading signals, mentorship programs, and one-on-one consulting sessions.",
          },
          {
            question: "What are the earning options available?",
            answer:
              "We offer flexible earning models tailored to both beginners and experienced crypto traders.",
          },
        ]}
      />
      <FooterArc />
    </SectionContainer>
  );
}
