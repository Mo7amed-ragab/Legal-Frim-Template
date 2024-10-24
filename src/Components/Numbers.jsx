import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareFromSquare,
  faUser,
  faStar,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

export default function Numbers() {
  const [casesWon, setCasesWon] = useState(109);
  const [skilledLawyers, setSkilledLawyers] = useState(1075);
  const [happyClients, setHappyClients] = useState(321);
  const [greatRewards, setGreatRewards] = useState(864);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY < 20 && window.scrollY > 10;
      if (scrolledDown) {
        setIsScrolling(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isScrolling) {
      const interval = setInterval(() => {
        setCasesWon((prevValue) => prevValue + Math.floor(Math.random() * 10));
        setSkilledLawyers(
          (prevValue) => prevValue + Math.floor(Math.random() * 10)
        );
        setHappyClients(
          (prevValue) => prevValue + Math.floor(Math.random() * 10)
        );
        setGreatRewards(
          (prevValue) => prevValue + Math.floor(Math.random() * 10)
        );
      }, 10);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        setIsScrolling(false);
      }, 2000);
      // Cleanup the interval and timeout when the component unmounts or when scrolling stops
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isScrolling]);

  return (
    <div className="number ">
      <div className="icon-all">
        <div className="icons">
          <div>
            <FontAwesomeIcon className="font-icon" icon={faShareFromSquare} />
          </div>
          <div>
            <h1>{casesWon}</h1>
            <p>Cases Won</p>
          </div>
        </div>
        <div className="icons">
          <div>
            <FontAwesomeIcon className="font-icon" icon={faPenToSquare} />
          </div>
          <div>
            <h1>{skilledLawyers}</h1>
            <p>Skilled Lawyers</p>
          </div>
        </div>
        <div className="icons">
          <div>
            <FontAwesomeIcon className="font-icon" icon={faUser} />
          </div>
          <div>
            <h1>{happyClients}</h1>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="icons">
          <div>
            <FontAwesomeIcon className="font-icon" icon={faStar} />
          </div>
          <div>
            <h1>{greatRewards}</h1>
            <p>Great Rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
