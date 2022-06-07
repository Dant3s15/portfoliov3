import { useState, useEffect, FC, MouseEventHandler, useContext } from 'react';
import SelectedContext from '../../../context/selected-context';
import classes from './Header.module.scss';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import CloseIcon from '../../Icons/CloseIcon';
import GoogleLogIn from '../../Icons/google/GoogleLogIn';
import logo from '../../../resources/logo.svg';
import { User } from 'firebase/auth';
import { Link } from 'react-router-dom';

interface Props {
  data: {
    google: {
      user?: User | null | undefined;
      auth?: any;
      signInWithGoogle?: () => void;
    };
  };
}

const Header: FC<Props> = props => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const ctx = useContext(SelectedContext);

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
    setHamburgerState(false);
    if (!ctx.ctaButtonClicked?.clicked) {
      ctx.ctaButtonHandler?.();
    }
    const charNr = Number(event.currentTarget.getAttribute('data-character'));
    let char = document
      .querySelector(`[data-const-pos="${charNr}"]`)
      ?.getAttribute('data-character');

    ctx.rotateCharactersHandler?.(char ? +char : null);
    ctx.setWhichSelected?.(charNr);
    ctx.setSelected?.(true);

    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
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
            <Link
              to={'/'}
              data-character='1'
              className={classes.logo}
              onClick={e => navItemHandler(e, 'hero')}
            >
              <img src={logo} alt='' />
            </Link>
          </div>
          <nav className={classes.nav}>
            <Link
              to={'/about-me'}
              data-character='1'
              onClick={e => navItemHandler(e, 'my-projects')}
              className={classes.nav__item}
            >
              My projects
            </Link>
            <Link
              to={'/about-me'}
              data-character='1'
              onClick={e => navItemHandler(e, 'about-me')}
              className={classes.nav__item}
            >
              About Me
            </Link>
            <Link
              to={'/creator'}
              data-character='0'
              onClick={e => navItemHandler(e, 'creator')}
              className={classes.nav__item}
            >
              Character Creator
            </Link>
            {!props.data.google.user && (
              <button
                className={`${classes.nav__item} ${classes.google}`}
                onClick={props.data.google.signInWithGoogle}
                id='login'
              >
                <GoogleLogIn></GoogleLogIn>
                <p>Sign in with Google</p>
              </button>
            )}
            {props.data.google.auth.currentUser && (
              <button
                className={`${classes.nav__item} ${classes['google']}`}
                onClick={() => props.data.google.auth.signOut()}
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
