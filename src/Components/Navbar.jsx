import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import light from '../img/logo-light.png';
import dark from '../img/logo-dark.png';
import '../Css/Navbar.css';
import $ from 'jquery';

const Navbar = () => {
  const [active, setActive] = useState('navbar-nav');
  const [toggleIcon, setToggleIcon] = useState('nav-toggle');
  const [navbar, setNavbar] = useState(false);
  const navToggle = () => {
    active === 'navbar-nav'
      ? setActive('navbar-nav nav-active')
      : setActive('navbar-nav');
    toggleIcon === 'nav-toggle'
      ? setToggleIcon('nav-toggle toggle')
      : setToggleIcon('nav-toggle');
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  // ----------------------- scroll to div ----------------- //
  useEffect(() => {
    $(function () {
      $('.nav-link a').click(function () {
        $('html, body').animate(
          {
            scrollTop: $('#' + $(this).data('value')).offset().top,
          },
          500
        );
      });
    });
  }, []);
  return (
    <>
      <header className="nav-head">
        <navbar className={navbar ? 'navbar affix' : 'nav-navbar container'}>
          <div className="nav-container">
            <div className="nav-img">
              <a href="/" className="img">
                <img className="logo-dark" src={dark} alt="img" />
                <img className="logo-light" src={light} alt="img" />
              </a>
            </div>
            <div className="nav-con">
              <ul className={active}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="nav-link">
                  <a href="#" data-value="about">
                    About
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#" data-value="feature">
                    Feature
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#" data-value="them">
                    Them
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#" data-value="why-us">
                    Why us
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#" data-value="feedback">
                    Feedback
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#" data-value="form">
                    Free Consultation
                  </a>
                </li>
                <li>
                  <Link to="blog" data-value="blog">
                    blog
                  </Link>
                </li>
              </ul>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </navbar>
      </header>
    </>
  );
};
export default Navbar;
