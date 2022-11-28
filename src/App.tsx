import React from 'react';

import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Furnitures from './components/Furnitures/Furnitures';
import Projects from './components/Projects/Projects';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Clients from './components/Clients/Clients';

import styled from './App.module.scss';
import ContactUs from './components/ContactUs/ContactUs';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <AboutUs />
      <Furnitures />
      <WhoWeAre />
      <Projects />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
