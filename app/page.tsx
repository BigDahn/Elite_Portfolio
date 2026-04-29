"use client"

import { useRouter } from "next/navigation"
import SectionContainer from "./components/SectionContainer";
import HomePageHero from "./components/pages/home/Hero";
import AboutMe from "./components/pages/home/aboutMe";

export default function Page() {

  return (
    <SectionContainer id="hero">
      <HomePageHero />
      <AboutMe />
    </SectionContainer>
  );
}
