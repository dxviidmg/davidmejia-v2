'use client';

import { lazy, Suspense } from 'react';
import { LangProvider } from '../src/utils/LangContext';
import { Banner } from '../src/components/sections/banner/Banner';
import { Marquee } from '../src/components/commons/marquee/Marquee';
import { WhatsAppFloat } from '../src/components/commons/whatsapp/WhatsAppFloat';

// Sections below the fold load on demand; each file exports a named component
const lazySection = (load, name) => lazy(() => load().then((m) => ({ default: m[name] })));

const About = lazySection(() => import('../src/components/sections/about/About'), 'About');
const Experience = lazySection(() => import('../src/components/sections/experience/Experience'), 'Experience');
const Skills = lazySection(() => import('../src/components/sections/skills/Skills'), 'Skills');
const Projects = lazySection(() => import('../src/components/sections/projects/Projects'), 'Projects');
const Education = lazySection(() => import('../src/components/sections/education/Education'), 'Education');
const Footer = lazySection(() => import('../src/components/commons/footer/Footer'), 'Footer');

export default function Home() {
  return (
    <LangProvider>
      <div className="App">
        <main>
          <Banner />
          <Marquee />
          <Suspense fallback={null}>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
