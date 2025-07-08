"use client";
import React from 'react';
import SectionStack from './components/stack/SectionStack';
import { items, recommendationsGroups, techStack } from '../constant/app';
import Recommendation from './components/box/Recommendations';
import TechStackAndCertifications from './components/box/TechStackAndCertifications';
import AboutMeTerminalCard from './components/box/AboutMeCard';
import AOSInitializer from './components/aos/AOSInitializer';
import HomeSection from './components/stack/HomeStack';
export default function Home() {
  return (
    <>
      <AOSInitializer />
      <HomeSection/>
      <SectionStack>
        <TechStackAndCertifications techStack={techStack} items={items} />
        <AboutMeTerminalCard />
      </SectionStack >
      <Recommendation recommendationsGroups={recommendationsGroups} />
    </>
  );
}