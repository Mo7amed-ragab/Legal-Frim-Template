import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import About from './About';
import Areas from './Areas';
import Them from './Them';
import Why from './Why';
import Clints from './Clints';
import Logos from './logos';
import FreeConsultation from './FreeConsultation';
export default function Homepage() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Areas />
      <Them />
      <Why />
      <Clints />
      <Logos />
      <FreeConsultation />
    </>
  );
}
