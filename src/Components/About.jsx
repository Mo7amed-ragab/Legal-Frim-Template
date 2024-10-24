import React from 'react';
import Numbers from './Numbers';
import Info from './Info';
import '../Css/About.css';
export default function About() {
  return (
    <div id="about">
      <div className="container">
        <Numbers />
        <Info />
      </div>
    </div>
  );
}
