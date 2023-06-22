import logo from './logo.svg';
import './App.css';
import { Banner } from './components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/footer/Footer';
import { About } from './components/about/About';
import { Expirience } from './components/experience/Experience';
import { Certifications } from './components/certifications/Certifications';

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
