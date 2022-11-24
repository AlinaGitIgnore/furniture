import Header from '../Header/Header';
import SwiperItem from '../SwiperItem/SwiperItem';
import styled from './Hero.module.scss';
import Swiper from '../Swiper/Swiper';

const Hero = () => {
  return (
    <div className={styled.heroSection}>
      <Header />
      <Swiper>
        <SwiperItem />
      </Swiper>
    </div>
  );
};

export default Hero;
