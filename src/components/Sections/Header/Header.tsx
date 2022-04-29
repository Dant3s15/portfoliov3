import { useState, useEffect, FC } from 'react';
import classes from './Header.module.scss';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import CloseIcon from '../../Icons/CloseIcon';
import GoogleLogIn from '../../Icons/google/GoogleLogIn';
import googleLogin from '../../../resources/img/google/btn_google_signin_light_normal_web@2x.png';
import { User } from 'firebase/auth';

// interface InsideGoogle {
//   user?: USER | null | undefined;
// }

// interface Google {
//   google?: InsideGoogle;
// }

// function debounce(fn: () => {}, ms: number) {
//   let timer: any;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = null;
//       fn.apply(this, arguments);
//     }, ms);
//   };
// }

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
  });

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
            {/* <a href='#' className={classes.nav__item}>
              About me
            </a> */}
            <a href='#' className={classes.nav__item}>
              My projects
            </a>
            <a href='#' className={classes.nav__item}>
              Contact me
            </a>
            <a href='#' className={classes.nav__item}>
              Creator
            </a>
            {!props.data.google.user && (
              <button
                className={`${classes.nav__item} ${classes.google}`}
                onClick={props.data.google.signInWithGoogle}
                id='login'
              >
                {/* <img src={googleLogin} alt='' /> */}

                <GoogleLogIn></GoogleLogIn>
                <p>Sign in with Google</p>
              </button>
            )}
            {props.data.google.auth.currentUser && (
              <button
                className={`${classes.nav__item} ${classes['google']}`}
                onClick={() => props.data.google.auth.signOut()}
                // ref={googleLoginRef}
                id='login'
              >
                <GoogleLogIn></GoogleLogIn>
                <p>Sign Out</p>
              </button>
            )}
            {/* <GoogleButton googleData={props.googleData}></GoogleButton> */}
            {/* <SignIn></SignIn> */}
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
        {/* <nav className={classes['nav-mobile']}>
          <a href='#' className={classes['nav__item--mobile']}>
            SECTION1
          </a>
          <a href='#' className={classes['nav__item--mobile']}>
            SECTION2
          </a>
          <a href='#' className={classes['nav__item--mobile']}>
            SECTION3
          </a>
          <a href='#' className={classes['nav__item--mobile']}>
            SECTION4
          </a>
        </nav> */}
      </div>
    </header>
  );
};

// function GoogleButton(props) {
//   console.log(props.LoggedIn);
//   if (!props.LoggedIn) {
//     return (
//       <button
//         className={`${classes.nav__item} ${classes.google}`}
//         onClick={props.googleData.signInWithGoogle}
//         // ref={googleLoginRef}
//         id='login'
//       >
//         <GoogleLogIn></GoogleLogIn>
//         <p>Sign in with Google</p>
//       </button>
//     );
//   } else {
//     return (
//       <button
//         className={`${classes.nav__item} ${classes.google}`}
//         onClick={props.googleData.auth.signOut()}
//         // ref={googleLoginRef}
//         id='login'
//       >
//         <GoogleLogIn></GoogleLogIn>
//         <p>Sign Out</p>
//       </button>
//     );
//   }
// }

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   return (
//     <button onClick={signInWithGoogle} className={classes.nav__item} id='login'>
//       <GoogleLogIn></GoogleLogIn> <p>Sign in with Google</p>
//     </button>
//   );
// }

export default Header;
