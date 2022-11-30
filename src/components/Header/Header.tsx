import { images } from '../../assets/images';
import Navlist from 'components/NavList/Navlist';
import { useMediaQuery } from 'react-responsive';
import Menu from 'components/Menu/Menu';
import Connect from 'components/Connect/Connect';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

import styled from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobileOrLaptop = useMediaQuery({
    query: '(max-width: 720px)',
  });

  return (
    <div className={styled.headerSection}>
      <nav className={styled.navigation}>
        <div className={styled.logoWrap}>
          <a href="index.html">
            <img className={styled.heroLogo} src={images.logo} alt="logo" />
          </a>
        </div>

        {isMobileOrLaptop ? (
          <>
            <div
              className={styled.burgerMenu}
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
          </>
        ) : (
          <>
            <Navlist />
            <Connect />
          </>
        )}
      </nav>
      {isOpen && (
        <Menu>
          <Navlist />
          <Connect />
        </Menu>
      )}
    </div>
  );
};

export default Header;
