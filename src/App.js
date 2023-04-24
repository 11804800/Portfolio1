import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Certificate from './Components/Certificate';
import About from './Components/About';
import Project from './Components/Project';
import Publication from './Components/Publication';
import Upcoming from './Components/Upcoming';
import Footer from './Components/Footer';
import { useSpring,animated } from 'react-spring';
function App() {
  const fade = useSpring({
    from: {
        opacity: 0.1,
        transform: "opacity(0.1)"
    },
    to: {
        opacity: 1,
        transform: "opacity(1)"
    },
    config: { duration: 3000 }
});
  return (
    <animated.div className="App" style={fade}>
      <Header/>
      <Home/>
      <About/>
      <Certificate/>
      <Publication/>
      <Project/>
      <Upcoming/>
      <Footer/>
    </animated.div>
  );
}

export default App;
