import React, { useEffect } from 'react';
import '../Css/Areas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faPaperPlane,
  faRegistered,
  faLightbulb,
  faChartBar,
  faFontAwesome,
} from '@fortawesome/free-regular-svg-icons';

export default function Areas() {
  useEffect(() => {
    const handleScroll = () => {
      const Areas_content = document.querySelector('.Areas_content');
      const Practice = document.querySelector('.Practice');
      const Areas = Areas_content.getBoundingClientRect().top;
      const triggerOffset = 100;
      if (Areas < window.innerHeight - triggerOffset) {
        Areas_content.classList.add('visible');
        Practice.classList.add('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="Areas" id="feature">
      <div className="container">
        <div className="Areas_content">
          <h2>Practice Areas</h2>
          <p>
            Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod
            tempor incidide labeore dolore magna.
          </p>
        </div>
        <div className="Practice">
          <div className="item">
            <div>
              <FontAwesomeIcon className="item-icon" icon={faAddressCard} />
            </div>
            <div>
              <h3>Criminal Law</h3>
              <p>
                Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                tempor incidide.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon className="item-icon" icon={faPaperPlane} />
            </div>
            <div>
              <h3>Real Estate Law </h3>
              <p>
                Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                tempor incidide.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon className="item-icon" icon={faRegistered} />
            </div>
            <div>
              <h3>Family Law</h3>
              <p>
                Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                tempor incidide.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon className="item-icon" icon={faLightbulb} />
            </div>
            <div>
              <h3>International Law</h3>
              <p>
                Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                tempor incidide.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon className="item-icon" icon={faChartBar} />
            </div>
            <div>
              <h3>Financial Law</h3>
              <p>
                Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                tempor incidide.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon className="item-icon" icon={faFontAwesome} />
            </div>
            <div>
              <h3>Technology Law</h3>
              <p>
                Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                tempor incidide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
