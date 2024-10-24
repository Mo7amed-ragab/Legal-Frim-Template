import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Clints() {
  useEffect(() => {
    const handleScroll = () => {
      const clients = document.querySelector('.clients');
      const clientsV = clients.getBoundingClientRect().top;
      const triggerOffset = 100;
      if (clientsV < window.innerHeight - triggerOffset) {
        clients.classList.add('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slides = [
    {
      image: img1,
      paragraph:
        '“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”',
      authorName: ' - Steve Martin',
    },
    {
      image: img2,
      paragraph:
        '“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”',
      authorName: ' - Maya Jonson',
    },
    {
      image: img3,
      paragraph:
        '“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”',
      authorName: ' - Mark Smith',
    },
    {
      image: img3,
      paragraph:
        '“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”',
      authorName: ' - Mark Smith',
    },
    {
      image: img2,
      paragraph:
        '“Legal represented me on a very serious matter where I was looking at significant prison time. Immediately, I knew that I was in good hands.”',
      authorName: ' - Maya Jonson',
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    className: 'slick-slider-custom slide_client ',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="clients">
        <div className="container " id="feedback">
          <div className="clients_content">
            <h1>Clients Feedback</h1>
            <p>
              Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
              tempor incidide labeore dolore magna.
            </p>
          </div>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <Slide
                key={index}
                image={slide.image}
                paragraph={slide.paragraph}
                authorName={slide.authorName}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
