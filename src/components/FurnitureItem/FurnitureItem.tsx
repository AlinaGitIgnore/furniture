import React from 'react';
import styled from './FurnitureItem.module.scss';

interface IProps {
  furniture: {
    image: string;
    id: number;
    text: string;
    title: string;
  };
}

const FurnitureItem: React.FC<IProps> = ({ furniture }) => {
  return (
    <li className={styled.furnitureItem}>
      <img src={furniture.image} alt={`img ${furniture.id}`} />
      <h4>{furniture.title}</h4>
      <p>{furniture.text}</p>
    </li>
  );
};

export default FurnitureItem;
