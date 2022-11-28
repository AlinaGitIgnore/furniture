import React from 'react';

import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import styled from './Copyright.module.scss';

const socials = [
  { component: <FaFacebookF />, id: 1 },
  { component: <AiOutlineTwitter />, id: 2 },
  { component: <FaInstagram />, id: 3 },
  { component: <AiFillLinkedin />, id: 4 },
];

const Copyright = () => {
  return (
    <div className={styled.copyrightWrap}>
      <ul className={styled.socialList}>
        {socials.map(social => (
          <li className={styled.socialItem} key={social.id}>
            <a href="#">{social.component}</a>
          </li>
        ))}
        {/* <li className={styled.socialItem} key="1">
          <a href="#">
            <FaFacebookF />
          </a>
        </li>
        <li className={styled.socialItem} key="2">
          <a href="#">
            <AiOutlineTwitter />
          </a>
        </li>
        <li className={styled.socialItem} key="3">
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li className={styled.socialItem} key="4">
          <a href="#">
            <AiFillLinkedin />
          </a>
        </li> */}
      </ul>
      <p className={styled.copyright}>2022 All Rights Reserved</p>
    </div>
  );
};

export default Copyright;
