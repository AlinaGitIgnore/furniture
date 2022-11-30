import Header from '../Header/Header';
import SwiperItem from '../HeroItem/HeroItem';
import Swiper from '../Swiper/Swiper';
import { heroSliders } from '../../utils/heroSliders';

import styled from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styled.heroSection}>
      <div className={`container`}>
        <Header />
        <Swiper items={heroSliders} name="heroSliders" />
      </div>
    </section>
  );
};

export default Hero;
