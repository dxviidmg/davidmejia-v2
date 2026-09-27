import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { LangProvider } from './utils/LangContext';
import { Banner } from './components/sections/banner/Banner';
import { Marquee } from './components/commons/marquee/Marquee';

const About = lazy(() => import('./components/sections/about/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('./components/sections/experience/Experience').then(m => ({ default: m.Experience })));
const Skills = lazy(() => import('./components/sections/skills/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/projects/Projects').then(m => ({ default: m.Projects })));
const Education = lazy(() => import('./components/sections/education/Education').then(m => ({ default: m.Education })));
const Footer = lazy(() => import('./components/commons/footer/Footer').then(m => ({ default: m.Footer })));

function App() {
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
      </div>
    </LangProvider>
  );
}

export default App;
