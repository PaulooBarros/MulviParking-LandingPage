import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import HowItWorks from "./components/howitworks";
import CTA from "./components/cta";
import Benefits from "./components/benefits";
import AdminSection from "./components/adminsection";
import ClientAppSection from "./components/clientappsection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
      <HeroSection />
      <HowItWorks/>
      <Benefits/>
      <AdminSection />
      <ClientAppSection />
      <CTA /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;
