import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Css/logos.css';
import logo1 from '../img/logo1.jpg';
import logo2 from '../img/logo2.jpg';
import logo3 from '../img/logo3.jpg';
import logo4 from '../img/logo4.jpg';
import logo5 from '../img/logo5.jpg';

export default function Logos() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          399: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <div>
          <SwiperSlide>
            <img src={logo1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo4} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo5} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo4} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo5} alt="img" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
