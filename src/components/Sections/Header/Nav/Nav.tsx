import { FC } from "react";
// import GoogleLogIn from "../../../Icons/google/GoogleLogIn";
// import { User } from "firebase/auth";

import classes from "./Nav.module.scss";

interface Props {
  navItemHandler: (event: { currentTarget: Element }, id: string) => void;
  // google: {
  //   user?: User | null | undefined;
  //   auth?: any;
  //   signInWithGoogle?: () => void;
  // };
}

const Nav: FC<Props> = ({ navItemHandler }) => {
  return (
    <nav className={classes.nav}>
      <a
        data-to="/about-me"
        data-character="1"
        onClick={(e) => navItemHandler(e, "my-projects")}
        className={`${classes.nav__item} `}
      >
        My projects
      </a>
      <a
        data-to="/about-me"
        data-character="1"
        onClick={(e) => navItemHandler(e, "about-me")}
        className={`${classes.nav__item} `}
      >
        Contact Me
      </a>
      <a
        data-to={"/creator"}
        data-character="0"
        onClick={(e) => navItemHandler(e, "creator")}
        className={`${classes.nav__item} `}
      >
        Character Creator
      </a>
      {/* {!google.user && (
        <button
          className={`${classes.nav__item} ${classes.google}`}
          onClick={google.signInWithGoogle}
          id="login"
        >
          <GoogleLogIn></GoogleLogIn>
          <p>Sign in with Google</p>
        </button>
      )}
      {google.auth.currentUser && (
        <button
          className={`${classes.nav__item} ${classes["google"]}`}
          onClick={() => google.auth.signOut()}
          id="login"
        >
          <GoogleLogIn></GoogleLogIn>
          <p>Sign Out</p>
        </button>
      )} */}
    </nav>
  );
};

export default Nav;
