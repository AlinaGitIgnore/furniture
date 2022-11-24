import React, { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdArrowRightAlt } from 'react-icons/md';
import styled from './Carousel.module.scss';
import SwiperItem from '../SwiperItem/SwiperItem';

const Carousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={styled.container}>
      <div ref={navigationPrevRef} className={styled.controller}>
        <MdArrowRightAlt style={{ rotate: '180deg' }} />
      </div>

      <Swiper
        slidesPerView={0}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={true}
        onSwiper={swiper => {
          setTimeout(() => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
      </Swiper>

      <div ref={navigationNextRef} className={styled.controller}>
        <MdArrowRightAlt />
      </div>
    </div>
  );
};

export default Carousel;
