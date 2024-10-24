import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import '../Css/Blog.css';
import lightimg from '../img/logo-light.png';
import darkimg from '../img/logo-dark.png';
import blog1 from '../img/blog (1).jpg';
import blog2 from '../img/blog (2).jpg';
import blog3 from '../img/blog (3).jpg';
import blog4 from '../img/blog (4).jpg';
import blog5 from '../img/blog (5).jpg';
import blog6 from '../img/blog (6).jpg';
import blog7 from '../img/blog (7).jpg';
import blog8 from '../img/blog (8).jpg';
import blog9 from '../img/blog (9).jpg';
import {
  faLink,
  faAnglesRight,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Blog = () => {
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
  return (
    <>
      <header className="nav-head head-trans" id="blog">
        <navbar className={navbar ? 'navbar affix' : 'nav-navbar'}>
          <div className="nav-container">
            <div className="nav-img">
              <a href="/" className="img">
                <img className="logo-dark" src={darkimg} alt="img" />
                <img className="logo-light" src={lightimg} alt="img" />
              </a>
            </div>
            <div className="nav-con">
              <ul className={active}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="./Blog.jsx">blog</a>
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
      <section className="banner-section">
        <div className="overlaay"></div>
        <div className="cont">
          <h1>Blog Standard</h1>
          <ol>
            <li>
              <Link to="/" className="con-a">
                Home
              </Link>
            </li>
            <li>
              <i class="fa-sharp fa-regular fa-slash-forward"></i>
            </li>
            <li className="ol-blo">Blog Standard</li>
          </ol>
        </div>
      </section>
      <section className="blog-grid">
        <div className="all-grid nav-container">
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog1} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    10 things to know about tax practice in usa for companies
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  Read More <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog2} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    The incredible growing presidential legal team how to?{' '}
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog3} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    So what can law firms do?19 thing you will learn{' '}
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog4} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    3 things law firms must understand to increase gender
                    diversity{' '}
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog5} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    10 things to know about entertainment law{' '}
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog6} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    What stops lawyers from using Macs at work?{' '}
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link href="#">
                  <img src={blog7} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link href="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link href="#">
                    An important footnote in the history of legal education{' '}
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link href="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link to="#">
                  <img src={blog8} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link to="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link to="#">
                    Lawyers as leaders: is your personality too legal?
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link to="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="b-grid">
            <div className="conn-grid">
              <div className="img-grid">
                <Link to="#">
                  <img src={blog9} alt="img" />
                </Link>
                <div className="overlaay">
                  <Link to="#">
                    <FontAwesomeIcon icon={faLink} />{' '}
                  </Link>
                </div>
              </div>
              <div className="mintitle-grid">
                <span>Jan 20, 2017</span>
                <span>
                  <FontAwesomeIcon icon={faComment} /> 3 comments
                </span>
              </div>
              <div className="title-grid">
                <h4>
                  <Link to="#">
                    Never fire a potential key witness before trial
                  </Link>
                </h4>
              </div>
              <div className="more-grid">
                <Link to="#">
                  read more <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row-blog nav-container">
          <div className="blog-center">
            <ul className="blog-list">
              <li className="blog-active">
                <Link to="#">1</Link>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
