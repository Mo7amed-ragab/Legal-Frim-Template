import React, { useEffect } from 'react';
import about_man from '../img/about-man.png';
import signture from '../img/signture.png';

export default function Info() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutInfoH1 = document.querySelector('.About_info h1');
      const aboutInfoP = document.querySelector('.About_info p');
      const aboutContentImg = document.querySelector('.about_content img');
      const aboutInfoH1Top = aboutInfoH1.getBoundingClientRect().top;
      const triggerOffset = 100;
      if (aboutInfoH1Top < window.innerHeight - triggerOffset) {
        aboutInfoH1.classList.add('visible');
        aboutInfoP.classList.add('visible');
        aboutContentImg.classList.add('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="About_info ">
        <div>
          <img src={about_man} alt="about_man" />
        </div>
        <div className="about_content">
          <div>
            <h1>About Our Firm ?</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sede do
              eiusmod tempor incididunt ut labore dolore magna aliqa Ut enim ad
              minim veniam, quis nostrud exercitation.
              <br />
              <br />
              Euis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupida.
            </p>
          </div>
          <div>
            <img src={signture} alt="signture" />
          </div>
        </div>
      </div>
    </>
  );
}
