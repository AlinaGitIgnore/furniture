import Header from '../Header/Header';
import Swiper from '../Swiper/Swiper';
import { heroSliders } from '../../utils/heroSliders';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import styled from './Hero.module.scss';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styled.heroSection}>
      {isModalOpen && (
        <Modal closeModal={() => closeModal()}>
          <>
            <h3>Login</h3>
            <input name="login" />
            <input name="password" type="password" />
          </>
        </Modal>
      )}
      <div className={`container`} id="home">
        <Header openModal={() => openModal()} />
        <Swiper items={heroSliders} name="heroSliders" />
      </div>
    </section>
  );
};

export default Hero;
