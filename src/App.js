import { lazy, Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { LangProvider } from './utils/LangContext';
import { FaWhatsapp } from 'react-icons/fa';
import { Banner } from './components/sections/banner/Banner';

const About = lazy(() => import('./components/sections/about/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('./components/sections/experience/Experience').then(m => ({ default: m.Experience })));
const Skills = lazy(() => import('./components/sections/skills/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/projects/Projects').then(m => ({ default: m.Projects })));
const Certifications = lazy(() => import('./components/sections/certifications/Certifications').then(m => ({ default: m.Certifications })));
const Footer = lazy(() => import('./components/commons/footer/Footer').then(m => ({ default: m.Footer })));

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Banner />
        <Suspense fallback={null}>
          <About />
          <hr className="section-divider" />
          <Experience />
          <hr className="section-divider" />
          <Skills />
          <hr className="section-divider" />
          <Projects />
          <hr className="section-divider" />
          <Certifications />
          <hr className="section-divider" />
          <Footer />
        </Suspense>
        <a
          href="https://wa.me/525561652599"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </LangProvider>
  );
}

export default App;
