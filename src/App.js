import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
