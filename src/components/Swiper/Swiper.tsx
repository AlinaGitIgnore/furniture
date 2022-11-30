import React, { useRef } from 'react';
import Slider from 'react-slick';
import { MdArrowRightAlt } from 'react-icons/md';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import styled from './Swiper.module.scss';
import HeroItem from '../HeroItem/HeroItem';
import ProjectItem from '../ProjectItem/ProjectItem';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import CommentPage from '../CommentPage/CommentPage';
import { useMediaQuery } from 'react-responsive';
interface IProps {
  items: any;
  slidesToShow: number;
  name: string;
}

export const Swiper: React.FC<IProps> = ({ items, slidesToShow, name }) => {
  const isMobileOrLaptop = useMediaQuery({
    query: '(max-width: 720px)',
  });

  const sliderRef = useRef(null);
  let size = 2;
  let subarray = [];

  for (let i = 0; i < Math.ceil(items.length / size); i++) {
    subarray[i] = items.slice(i * size, i * size + size);
  }

  var settings = {
    arrows: false,
    dots: true,
    className: 'slider',
    infinite: true,
    slidesToShow:
      name === 'heroSliders' || name === 'comments' ? 1 : slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined,
    ) => (
      <ul
        style={
          name === 'comments' && !isMobileOrLaptop
            ? {
                width: '150px',
                margin: '0px',
                position: 'absolute',
                bottom: '70px',
                left: '80px',
                backgroundColor: 'none',
              }
            : { display: 'none' }
        }
      >
        {dots}
      </ul>
    ),
    customPaging: () => <button></button>,
  };
  return (
    <div className={styled.container}>
      <div
        className={`${styled.controllerPrev} ${styled.controller}`}
        style={
          slidesToShow === 1
            ? { borderRadius: '50%' }
            : slidesToShow === 3
            ? { borderRadius: 'none' }
            : { display: 'none' }
        }
        //@ts-ignore
        onClick={() => sliderRef.current.slickPrev()}
      >
        {slidesToShow === 1 ? (
          <MdArrowRightAlt style={{ rotate: '180deg' }} />
        ) : (
          <SlArrowLeft />
        )}
      </div>

      {name === 'heroSliders' ? (
        <div className={styled.sliderWrap}>
          <Slider {...settings} ref={sliderRef}>
            {items.map(
              (item: { title: string; text: string; id: string | number }) => (
                <HeroItem slider={item} key={item.id} />
              ),
            )}
          </Slider>
        </div>
      ) : name === 'projects' ? (
        <div className={styled.sliderWrap}>
          <Slider {...settings} ref={sliderRef}>
            {items.map(
              (item: { title: string; image: string; id: string | number }) => (
                <ProjectItem project={item} key={item.id} />
              ),
            )}
          </Slider>
        </div>
      ) : name === 'comments' ? (
        <div className={styled.sliderWrapComment}>
          <Slider {...settings} ref={sliderRef}>
            {subarray.map((commentsPair, idx) => (
              <CommentPage commentsPair={commentsPair} key={idx} />
            ))}
          </Slider>
        </div>
      ) : (
        <></>
      )}

      <div
        className={`${styled.controllerNext} ${styled.controller}`}
        style={
          slidesToShow === 1
            ? { borderRadius: '50%' }
            : slidesToShow === 3
            ? { borderRadius: 'none' }
            : { display: 'none' }
        }
        //@ts-ignore
        onClick={() => sliderRef.current.slickNext()}
      >
        {slidesToShow === 1 ? <MdArrowRightAlt /> : <SlArrowRight />}
      </div>
    </div>
  );
};
export default Swiper;
