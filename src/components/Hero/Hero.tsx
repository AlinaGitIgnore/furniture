import Header from '../Header/Header';
import SwiperItem from '../HeroItem/HeroItem';
import styled from './Hero.module.scss';
import Swiper from '../Swiper/Swiper';
import { heroSliders } from '../../utils/heroSliders';

const Hero = () => {
  return (
    <section className={styled.heroSection}>
      <div className={`container`}>
        <Header />
        <Swiper items={heroSliders} slidesToShow={1} name="heroSliders" />
      </div>
    </section>
  );
};

export default Hero;
