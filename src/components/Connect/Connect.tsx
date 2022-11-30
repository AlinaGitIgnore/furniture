import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import styled from '../Header/Header.module.scss';

const Connect = () => {
  return (
    <div className={styled.rightSection}>
      <div className={styled.telWrap}>
        <p>Call Us: </p>
        <a href="+011234567890">+011234567890</a>
      </div>
      <div className={styled.search}>
        <AiOutlineSearch />
        {/* <input /> */}
      </div>
      <a className={styled.navLink} href="login">
        Login
      </a>
    </div>
  );
};

export default Connect;
