import { useState, useEffect, FC, MouseEventHandler, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SelectedContext from '../../../context/selected-context';
import HeroVisibleContext from '../../../context/hero-visible-context';
import classes from './Header.module.scss';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import CloseIcon from '../../Icons/CloseIcon';
import GoogleLogIn from '../../Icons/google/GoogleLogIn';
import logo from '../../../resources/logo.svg';
import { User } from 'firebase/auth';

interface Props {
  data: {
    google: {
      user?: User | null | undefined;
      auth?: any;
      signInWithGoogle?: () => void;
    };
  };
}

const Header: FC<Props> = ({ data: { google } }) => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const ctx = useContext(SelectedContext);
  const heroIsVisibleCtx = useContext(HeroVisibleContext);

  const hamburgerButtonHandler = () => {
    if (!hamburgerState) {
      setHamburgerState(true);
    } else {
      setHamburgerState(false);
    }
  };
  useEffect(() => {
    function closeHamburgerOnBigScreens() {
      setHamburgerState(false);
    }
    window.addEventListener('resize', closeHamburgerOnBigScreens);
    return () => {
      window.removeEventListener('resize', closeHamburgerOnBigScreens);
    };
  }),
    [hamburgerState];

  const navItemHandler = (event: { currentTarget: Element }, id: string) => {
    const changeStates = (elem: Element) => {
      setHamburgerState(false);
      if (!ctx.ctaButtonClicked?.clicked) {
        ctx.ctaButtonHandler?.();
      }
      const charNr = Number(elem?.getAttribute?.('data-character'));
      if (isNaN(charNr)) {
        if (ctx.setSelected) ctx?.setSelected(false);
      }
      let char = document
        .querySelector(`[data-const-pos="${charNr}"]`)
        ?.getAttribute('data-character');
      if (char) {
        ctx.rotateCharactersHandler?.(char ? +char : null);
        ctx.setWhichSelected?.(charNr);
        ctx.setSelected?.(true);
      }
    };
    const scrollHandler = (overwrite = id) => {
      const element = document.querySelector(`#${overwrite}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    };
    const navEl = event.currentTarget;
    if (heroIsVisibleCtx.heroIsVisible) {
      changeStates(navEl);
      navigate(`${navEl.getAttribute('data-to')}`);
      if (location.pathname !== navEl.getAttribute('data-to')) {
        setTimeout(() => {
          scrollHandler();
        }, 750);
      } else scrollHandler();
    } else {
      if (location.pathname !== navEl.getAttribute('data-to')) {
        scrollHandler('hero');
        setTimeout(() => {
          navigate(`${navEl.getAttribute('data-to')}`);
          changeStates(navEl);
          setTimeout(() => {
            scrollHandler();
          }, 600);
        }, 750);
      } else {
        scrollHandler();
      }
    }
  };

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
            <a
              data-to='/'
              data-character='null'
              className={classes.logo}
              onClick={e => navItemHandler(e, 'hero')}
            >
              <img src={logo} alt='' />
            </a>
          </div>
          <nav className={classes.nav}>
            <a
              data-to='/about-me'
              data-character='1'
              onClick={e => navItemHandler(e, 'my-projects')}
              className={`${classes.nav__item} `}
            >
              My projects
            </a>
            <a
              data-to='/about-me'
              data-character='1'
              onClick={e => navItemHandler(e, 'about-me')}
              className={`${classes.nav__item} `}
            >
              About Me
            </a>
            <a
              data-to={'/creator'}
              data-character='0'
              onClick={e => navItemHandler(e, 'creator')}
              className={`${classes.nav__item} `}
            >
              Character Creator
            </a>
            {!google.user && (
              <button
                className={`${classes.nav__item} ${classes.google}`}
                onClick={google.signInWithGoogle}
                id='login'
              >
                <GoogleLogIn></GoogleLogIn>
                <p>Sign in with Google</p>
              </button>
            )}
            {google.auth.currentUser && (
              <button
                className={`${classes.nav__item} ${classes['google']}`}
                onClick={() => google.auth.signOut()}
                id='login'
              >
                <GoogleLogIn></GoogleLogIn>
                <p>Sign Out</p>
              </button>
            )}
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
      </div>
    </header>
  );
};

export default Header;
