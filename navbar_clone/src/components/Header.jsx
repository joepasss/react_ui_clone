import React, { useState, useEffect } from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    return () => window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>navbar</h2>

        <nav
          className={`${classes.header_content_nav} ${
            menuOpen ? classes.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <a href='/'>PageOne</a>
            </li>
            <li>
              <a href='/'>PageTwo</a>
            </li>
            <li>
              <a href='/'>PageThree</a>
            </li>
          </ul>
          <button>CTA PAGE</button>
        </nav>
        <div className={classes.header_content_toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
