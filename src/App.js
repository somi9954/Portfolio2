import './css/style.css'
import './css/bootstrap-icons.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Skills/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;