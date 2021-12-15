import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import Navigation from '../src/components/Navigation';
import Hero from './components/Hero';

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
