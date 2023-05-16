import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;
