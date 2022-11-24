import React from 'react';

import Header from './components/Header/Header';

import styled from './App.module.scss';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Furnitures from './components/Furnitures/Furnitures';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <AboutUs />
      <Furnitures />
      <Projects />
    </div>
  );
}

export default App;
