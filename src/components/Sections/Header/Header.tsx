import { useState, useEffect, FC, MouseEventHandler, useContext } from 'react';
import SelectedContext from '../../../context/selected-context';
import classes from './Header.module.scss';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import CloseIcon from '../../Icons/CloseIcon';
import GoogleLogIn from '../../Icons/google/GoogleLogIn';
// import googleLogin from '../../../resources/img/google/btn_google_signin_light_normal_web@2x.png';
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
  });

  const navItemHandler = (event: { currentTarget: Element }, id: string) => {
    if (!ctx.ctaButtonClicked.clicked) {
      ctx.ctaButtonHandler();
    }
    const charNr = Number(event.currentTarget.getAttribute('data-character'));
    // console.log(charNr);
    let char = document
      .querySelector(`[data-const-pos="${charNr}"]`)
      ?.getAttribute('data-character');
    ctx.rotateCharactersHandler(char ? +char : null);
    ctx.setRenderSection(true);
    ctx.setWhichSelected(charNr);
    ctx.setSelected(true);

    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      element?.scrollIntoView();
    }, 500);
    // ctx.setCtaClicked({ clicked: true });
    // console.log(ctx.ctaClicked.clicked);

    //TODO add scroll to effect
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
            <a className={classes.logo} href='#'>
              <img src='src/resources/logo.svg' alt='' />
            </a>
          </div>
          <nav className={classes.nav}>
            {/* <a href='#' className={classes.nav__item}>
              About me
            </a> */}
            <button
              data-character='1'
              onClick={e => navItemHandler(e, 'my-projects')}
              className={classes.nav__item}
            >
              My projects
            </button>
            <button
              data-character='1'
              onClick={e => navItemHandler(e, 'about-me')}
              className={classes.nav__item}
            >
              About Me
            </button>
            <button
              data-character='0'
              onClick={e => navItemHandler(e, 'creator')}
              className={classes.nav__item}
            >
              Character Creator
            </button>
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
