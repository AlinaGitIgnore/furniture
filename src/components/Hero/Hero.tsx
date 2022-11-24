import Header from '../Header/Header';
import Swiper from '../Swiper/Carousel';
import styled from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styled.heroSection}>
      <Header />
      <Swiper />
    </div>
  );
};

export default Hero;
