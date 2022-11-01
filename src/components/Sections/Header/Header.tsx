import { useState, useEffect, FC } from "react";
import Nav from "./Nav/Nav";
import classes from "./Header.module.scss";
import HamburgerIcon from "../../Icons/HamburgerIcon";
import CloseIcon from "../../Icons/CloseIcon";
import logo from "../../../resources/logo.svg";

const Header: FC = () => {
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
    window.addEventListener("resize", closeHamburgerOnBigScreens);
    return () => {
      window.removeEventListener("resize", closeHamburgerOnBigScreens);
    };
  }),
    [hamburgerState];

  const navItemHandler = (event: { currentTarget: Element }, id: string) => {
    const scrollHandler = (overwrite = id) => {
      const element = document.querySelector(`#${overwrite}`);
      element?.scrollIntoView({
        behavior: "smooth",
        block: `${overwrite !== "about-me" ? "center" : "end"}`,
      });
    };

    setHamburgerState(false);
    scrollHandler();
  };

  return (
    <header className={`${classes.header}`}>
      <div
        className={`${classes["header-wrapper"]} card-glass ${
          hamburgerState
            ? classes["hamburger-active"]
            : classes["hamburger-not-active"]
        }`}
      >
        <div className={`${classes.navigation} wrapper`}>
          <div className={classes["logo-item"]}>
            <a
              data-to="/"
              data-character="null"
              className={classes.logo}
              onClick={(e) => navItemHandler(e, "hero")}
            >
              <img src={logo} alt="" />
            </a>
          </div>
          <Nav
            navItemHandler={navItemHandler}
            setHamburgerState={setHamburgerState}
          ></Nav>

          <button
            className={classes["hamburger-button"]}
            onClick={hamburgerButtonHandler}
          >
            <HamburgerIcon
              className={`${classes["hamburger-icon"]} ${
                hamburgerState ? classes["hidden-btn"] : ""
              } `}
              alt="hamburger icon"
            ></HamburgerIcon>

            <CloseIcon
              className={`${classes["close-icon"]} ${
                !hamburgerState ? classes["hidden-btn"] : ""
              }`}
              alt="close icon"
            ></CloseIcon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
