import { useState, useRef } from 'react';
import classes from './Header.module.scss';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import CloseIcon from '../../Icons/CloseIcon';

const Header = props => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const hamburgerButtonHandler = () => {
    if (!hamburgerState) {
      setHamburgerState(true);
      console.log('hamburger opened');
    } else {
      setHamburgerState(false);
      console.log('hamburger closed');
    }
  };

  const googleLoginRef = useRef();

  const googleLoginHandler = e => {};

  return (
    <header className={classes.header}>
      <div
        className={`${classes['header-wrapper']} card-glass ${
          hamburgerState
            ? classes['hamburger-active']
            : classes['hamburger-not-active']
        }`}
      >
        <div className={classes.navigation}>
          <div className={classes['logo-item']}>
            <a className={classes.logo} href='#'>
              <img src='src/resources/logo.svg' alt='' />
            </a>
          </div>
          <nav className={classes.nav}>
            <a href='#' className={classes.nav__item}>
              SECTION1
            </a>
            <a href='#' className={classes.nav__item}>
              SECTION2
            </a>
            <a href='#' className={classes.nav__item}>
              SECTION3
            </a>
            <a href='#' className={classes.nav__item}>
              SECTION4
            </a>
            <button
              className={classes.nav__item}
              onClick={googleLoginHandler}
              ref={googleLoginRef}
              id='login'
            >
              Google
            </button>
          </nav>
          <button
            className={classes['hamburger-button']}
            onClick={hamburgerButtonHandler}
          >
            <HamburgerIcon
              className={`${classes['hamburger-icon']} ${
                hamburgerState ? classes['hidden-btn'] : ''
              } `}
              alt='hamburger icon'
            ></HamburgerIcon>

            <CloseIcon
              className={`${classes['close-icon']} ${
                !hamburgerState ? classes['hidden-btn'] : ''
              }`}
              alt='close icon'
            ></CloseIcon>
          </button>
        </div>
        <nav className={classes['nav-mobile']}>
          <a href='#' className={classes['nav__item']}>
            SECTION1
          </a>
          <a href='#' className={classes['nav__item']}>
            SECTION2
          </a>
          <a href='#' className={classes['nav__item']}>
            SECTION3
          </a>
          <a href='#' className={classes['nav__item']}>
            SECTION4
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
