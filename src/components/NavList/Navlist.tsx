import React from 'react';

import styled from '../Header/Header.module.scss';

const Navlist = () => {
  const navigation = [
    { name: 'Home', id: 1, href: 'index.html' },
    { name: 'services', id: 2, href: 'services.html' },
    { name: 'About', id: 3, href: 'about.html' },
    { name: 'Shop', id: 4, href: 'shop.html' },
    { name: 'Contact', id: 5, href: 'contact.html' },
  ];

  return (
    <ul className={styled.navList}>
      {navigation.map(nav => (
        <li className={styled.navItem} key={nav.id}>
          <a className={styled.navLink} href={nav.href}>
            {nav.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navlist;
