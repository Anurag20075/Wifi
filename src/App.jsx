// import Header from './components/Header';
// import Hero from './components/Hero';

// import Plans from './components/Plans';
// import OTTAddons from './components/OTTAddons';
// import WhyChoose from './components/WhyChoose';

// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Hero />

//       <Plans />
//       <OTTAddons />
//       <WhyChoose />

//       <Footer />
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import OTTAddons from "./components/OTTAddons";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";

import PlanDetails from "./pages/PlanDetails";

function Home() {
  return (
    <>
      <Hero />
      <Plans />
      <OTTAddons />
      <WhyChoose />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/plans/:planName"
            element={<PlanDetails />}
          />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
