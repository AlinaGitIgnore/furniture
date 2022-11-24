import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdArrowRightAlt } from 'react-icons/md';
import styled from './Swiper.module.scss';

interface IProps {
  children: React.ReactNode;
}
export const Swiper: React.FC<IProps> = ({ children }) => {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
  };
  return (
    <div className={styled.container}>
      <div
        className={`${styled.controllerPrev} ${styled.controller}`}
        //@ts-ignore
        onClick={() => sliderRef.current.slickPrev()}
      >
        <MdArrowRightAlt style={{ rotate: '180deg' }} />
      </div>
      <Slider {...settings} ref={sliderRef}>
        {children}
        {children}
        {children}
      </Slider>

      <div
        className={`${styled.controllerNext} ${styled.controller}`}
        //@ts-ignore
        onClick={() => sliderRef.current.slickNext()}
      >
        <MdArrowRightAlt />
      </div>
    </div>
  );
};
export default Swiper;
