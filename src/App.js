import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/Footer/footer';
import { About } from './components/about/About';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;
