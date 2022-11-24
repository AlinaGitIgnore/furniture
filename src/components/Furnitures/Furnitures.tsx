import React from 'react';
import { furnitures } from '../../utils/furnitures';
import FurnitureItem from '../FurnitureItem/FurnitureItem';
import styled from './Furnitures.module.scss';

const Furnitures = () => {
  return (
    <div className={styled.container}>
      <div className={styled.textWrap}>
        <h2>Our furnitures</h2>
        <p>There are many variations of passages of Lorem Ipsum</p>
      </div>
      <ul className={styled.furnitureList}>
        {furnitures.map(furniture => (
          <FurnitureItem furniture={furniture} />
        ))}
      </ul>
    </div>
  );
};

export default Furnitures;
