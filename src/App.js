import './App.css';
import Bio from './components/biographie/Bio';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';
import Temoignage from './components/temoignage/Temoignage';
import Verbal from './components/verbal/Verbal';

function App() {

  return (
    <>
    <Header/>
    <Slider/>
    <Bio/>
    <Verbal/>
    <Services/>
    <Temoignage/>
    <Contact/>
    
    </>
  );
}

export default App;
