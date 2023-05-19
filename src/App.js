import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
