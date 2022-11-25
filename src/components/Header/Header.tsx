import React from 'react';
import { images } from '../../assets/images';
import { AiOutlineSearch } from 'react-icons/ai';

import styled from './Header.module.scss';

const navigation = [
  { name: 'Home', id: 1, href: 'index.html' },
  { name: 'services', id: 2, href: 'services.html' },
  { name: 'About', id: 3, href: 'about.html' },
  { name: 'Shop', id: 4, href: 'shop.html' },
  { name: 'Contact', id: 5, href: 'contact.html' },
];

const Header = () => {
  return (
    <div className={styled.headerSection}>
      <nav className={styled.navigation}>
        <div className={styled.logoWrap}>
          <a href="index.html">
            <img className={styled.heroLogo} src={images.logo} alt="logo" />
          </a>
        </div>
        <ul className={styled.navList}>
          {navigation.map(nav => (
            <li className={styled.navItem} key={nav.id}>
              <a className={styled.navLink} href={nav.href}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>{' '}
      </nav>

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
    </div>
  );
};

export default Header;
