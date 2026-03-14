import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { LangProvider } from './utils/LangContext';
import { FaWhatsapp } from 'react-icons/fa';
import { Banner } from './components/sections/banner/Banner';
import { Skills } from './components/sections/skills/Skills';
import { Projects } from './components/sections/projects/Projects';
import { Footer } from './components/commons/footer/Footer';
import { About } from './components/sections/about/About';
import { Experience } from './components/sections/experience/Experience';
import { Certifications } from './components/sections/certifications/Certifications';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Banner />
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
