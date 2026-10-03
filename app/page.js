'use client';

import { lazy, Suspense } from 'react';
import { LangProvider } from '../src/utils/LangContext';
import { Banner } from '../src/components/sections/banner/Banner';
import { Marquee } from '../src/components/commons/marquee/Marquee';
import { WhatsAppFloat } from '../src/components/commons/whatsapp/WhatsAppFloat';

const About = lazy(() => import('../src/components/sections/about/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('../src/components/sections/experience/Experience').then(m => ({ default: m.Experience })));
const Skills = lazy(() => import('../src/components/sections/skills/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('../src/components/sections/projects/Projects').then(m => ({ default: m.Projects })));
const Education = lazy(() => import('../src/components/sections/education/Education').then(m => ({ default: m.Education })));
const Footer = lazy(() => import('../src/components/commons/footer/Footer').then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <LangProvider>
      <div className="App">
        <Banner />
        <Marquee />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Footer />
        </Suspense>
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
