import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from '../Header/Header.module.scss';

interface IProps {
  openModal: () => void;
}

const Connect: React.FC<IProps> = ({ openModal }) => {
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
      <div className={styled.navLink} onClick={() => openModal()}>
        Login
      </div>
    </div>
  );
};

export default Connect;
