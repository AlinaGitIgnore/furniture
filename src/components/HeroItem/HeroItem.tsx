import React from 'react';
import styled from './HeroItem.module.scss';

export interface IHeroItemProps {
  slider: {
    title: string;
    text: string;
  };
}

const HeroItem: React.FC<IHeroItemProps> = ({ slider }) => {
  return (
    <div className={styled.swiperItem}>
      <h1> {slider.title}</h1>
      <p>{slider.text}</p>
      <button
        onClick={() => {
          console.log('contact.html');
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default HeroItem;
