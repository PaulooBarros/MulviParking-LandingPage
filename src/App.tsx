import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import HowItWorks from "./components/howitworks";
import CTA from "./components/cta";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
      <HeroSection />
      <HowItWorks/>
      <CTA /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;
