import Header from '../Header/Header';
import SwiperItem from '../HeroItem/HeroItem';
import styled from './Hero.module.scss';
import Swiper from '../Swiper/Swiper';
import { heroSliders } from '../../utils/heroSliders';

const Hero = () => {
  return (
    <div className={styled.heroSection}>
      <Header />
      <Swiper items={heroSliders} slidesToShow={1} name="heroSliders" />
    </div>
  );
};

export default Hero;
