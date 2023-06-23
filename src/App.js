import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Banner } from './components/sections/banner/Banner';
import { Skills } from './components/sections/skills/Skills';
import { Projects } from './components/sections/projects/Projects';
import { Footer } from './components/commons/footer/Footer';
import { About } from './components/sections/about/About';
import { Expirience } from './components/sections/experience/Experience';
import { Certifications } from './components/sections/certifications/Certifications';


function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <About></About>
      <Expirience></Expirience>
      <Skills></Skills>
      <Projects></Projects>
      <Certifications></Certifications>
      <Footer></Footer>
    </div>
  );
}

export default App;
