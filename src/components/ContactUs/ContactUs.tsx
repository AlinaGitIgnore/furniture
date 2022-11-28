import React from 'react';
import { images } from 'assets/images';
import ContactForm from '../Form/ContactForm';
import styled from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <div className={styled.container}>
      <ContactForm />
      <div className={styled.image}>
        <img src={images.image9} alt="shelves" />
      </div>
    </div>
  );
};

export default ContactUs;
