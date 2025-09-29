"use client";
import React from 'react';
import SectionStack from './components/stack/SectionStack';
import { items, recommendationsGroups, techStack } from '../constant/app';
import Recommendation from './components/box/Recommendations';
import TechStackAndCertifications from './components/box/TechStackAndCertifications';
import AboutMeTerminalCard from './components/box/AboutMeCard';
import AOSInitializer from './components/aos/AOSInitializer';
import HomeSection from './components/stack/HomeStack';
import ProjectsSection from './components/stack/ProjectSection';

export default function Home() {
  return (
    <>
      <AOSInitializer />
      <HomeSection />
      <SectionStack>
        <TechStackAndCertifications techStack={techStack} items={items} />
        <AboutMeTerminalCard />
      </SectionStack>
      <main className="bg-[#000000] [background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:20px_20px] text-[#E9EAEC] py-10">
        <ProjectsSection />
        <Recommendation recommendationsGroups={recommendationsGroups} />
      </main>
    </>
  );
}
