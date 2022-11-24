import React from 'react';
import styled from './SwiperItem.module.scss';

const SwiperItem = () => {
  return (
    <div className={styled.swiperItem}>
      <h1>FURNITURE</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some fo
      </p>
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

export default SwiperItem;
