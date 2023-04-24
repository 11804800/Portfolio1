import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Certificate from './Components/Certificate';
import About from './Components/About';
import Project from './Components/Project';
import Publication from './Components/Publication';
import Upcoming from './Components/Upcoming';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Certificate/>
      <Publication/>
      <Project/>
      <Upcoming/>
      <Footer/>
    </div>
  );
}

export default App;
