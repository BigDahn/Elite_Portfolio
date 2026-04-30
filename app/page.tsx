"use client"

import SectionContainer from "./components/SectionContainer";
import HomePageHero from "./components/pages/home/Hero";
import TrackRecord from "./components/pages/home/TrackRecord";
import TradingHistory from "./components/pages/home/TradingHistory";
import AboutMe from "./components/pages/home/aboutMe";

export default function Page() {

  return (
    <SectionContainer id="hero">
      <HomePageHero />
      <AboutMe />
      <TrackRecord />
      <TradingHistory />
    </SectionContainer>
  );
}
