import React, { useEffect, useRef, useState } from 'react';
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
import ProjectSlide from 'components/ProjectSlide/ProjectSlide';

import { breakArr } from 'utils/breakArr';
interface IProps {
  items: any;
  name: string;
}

export const Swiper: React.FC<IProps> = ({ items, name }) => {
  const [projectSlideArr, setProjectSlideArr] = useState([]);
  const [commentsSliderArr, setCommentsSliderArr] = useState([]);

  const isMobileOrLaptop = useMediaQuery({
    query: '(max-width: 720px)',
  });

  useEffect(() => {
    const projectSlide = breakArr(3, items);
    const commentsSlider = breakArr(2, items);
    //@ts-ignore
    setProjectSlideArr(projectSlide);
    //@ts-ignore
    setCommentsSliderArr(commentsSlider);
  }, [items]);

  const sliderRef = useRef(null);

  var settings = {
    arrows: false,
    dots: true,
    className: 'slider',
    infinite: true,
    slidesToShow: 1,
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
          name === 'heroSliders'
            ? { borderRadius: '50%' }
            : name === 'projects'
            ? { borderRadius: 'none' }
            : { display: 'none' }
        }
        //@ts-ignore
        onClick={() => sliderRef.current.slickPrev()}
      >
        {name === 'heroSliders' ? (
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
            {projectSlideArr.map(
              (item: { title: string; image: string; id: string | number }) => (
                <ProjectSlide projects={item} key={item.id} />
              ),
            )}
          </Slider>
        </div>
      ) : name === 'comments' ? (
        <div className={styled.sliderWrapComment}>
          <Slider {...settings} ref={sliderRef}>
            {commentsSliderArr.map((commentsPair, idx) => (
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
          name === 'heroSliders'
            ? { borderRadius: '50%' }
            : name === 'projects'
            ? { borderRadius: 'none' }
            : { display: 'none' }
        }
        //@ts-ignore
        onClick={() => sliderRef.current.slickNext()}
      >
        {name === 'heroSliders' ? <MdArrowRightAlt /> : <SlArrowRight />}
      </div>
    </div>
  );
};
export default Swiper;
