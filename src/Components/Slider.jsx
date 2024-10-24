import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
// import { getCLS } from 'web-vitals';
import { motion } from 'framer-motion';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
};

function Slider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SlickSlider {...settings}>
        <div className="slider" id="slider">
          <img src="../img/slide-1.jpg" alt="Slider 1" />
          <div className="desc container">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Welcome to Legal Firm
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              This should be used to tell a story and let your users know a
              little more about your service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button>Free Consultation</Button>
            </motion.div>
          </div>
        </div>
        <div className="slider">
          <img src="../img/slide-2.jpg" alt="Slider 2" />
          <div className="desc container">
            <h1>Hire Experted Attorneys</h1>
            <p>
              This should be used to tell a story and let your users know a
              little more about your service.
            </p>
            <Button>contact us</Button>
          </div>
        </div>
        <div className="slider">
          <img src="../img/slide-3.jpg" alt="Slider 3" />
          <div className="desc container">
            <h1>advanced legal services</h1>
            <p>
              This should be used to tell a story and let your users know a
              little more about your service.
            </p>
            <Button>hire us now</Button>
          </div>
        </div>
      </SlickSlider>
    </>
  );
}

export default Slider;
