import React from 'react';

import Header from './components/Header/Header';

import styled from './App.module.scss';
import Hero from './components/Hero/Hero';
import OurServices from './components/OurServices/OurServices';
import AboutUs from './components/AboutUs/AboutUs';
import Furnitures from './components/Furnitures/Furnitures';

function App() {
  return (
    <div className="App">
      <Hero />
      <OurServices />
      <AboutUs />
      <Furnitures />
    </div>
  );
}

export default App;
