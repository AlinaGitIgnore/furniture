import React from 'react';
import { services } from '../../utils/services';
import ServiceItem from '../ServiceItem/ServiceItem';
import styled from './Services.module.scss';

const Services = () => {
  return (
    <div className={styled.container}>
      <h2>Our Services</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        dolorum..
      </p>
      <ul className={styled.servicesList}>
        {services.map(service => {
          const { id, name, text, image } = service;
          return <ServiceItem key={id} image={image} text={text} name={name} />;
        })}
      </ul>
    </div>
  );
};

export default Services;