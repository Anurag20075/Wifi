import Header from './components/Header';
import Hero from './components/Hero';

import Plans from './components/Plans';
import OTTAddons from './components/OTTAddons';
import WhyChoose from './components/WhyChoose';

import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <Plans />
      <OTTAddons />
      <WhyChoose />

      <Footer />
    </div>
  );
}

export default App;
