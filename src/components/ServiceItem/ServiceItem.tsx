import React from 'react';
import styled from './ServiceItem.module.scss';
import { services } from '../../utils/services';

interface IProps {
  id: number;
  text: string;
  name: string;
  image: string;
}

const ServiceItem: React.FC<IProps> = ({ id, name, text, image }) => {
  return (
    <li className={styled.container} key={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{text}</p>

      <button>Read more</button>
    </li>
  );
};

export default ServiceItem;
