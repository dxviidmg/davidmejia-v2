import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
}

export default App;
