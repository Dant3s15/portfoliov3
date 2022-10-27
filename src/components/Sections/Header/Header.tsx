import { useState, useEffect, FC, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";
import SelectedContext from "../../../context/selected-context";
import HeroVisibleContext from "../../../context/hero-visible-context";
import classes from "./Header.module.scss";
import HamburgerIcon from "../../Icons/HamburgerIcon";
import CloseIcon from "../../Icons/CloseIcon";
import logo from "../../../resources/logo.svg";
// import { ShepherdTourContext } from "react-shepherd";

const Header: FC = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();
  const ctx = useContext(SelectedContext);
  const heroIsVisibleCtx = useContext(HeroVisibleContext);
  // const tour = useContext(ShepherdTourContext);

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
    // tour?.complete();
    const changeStates = (elem: Element) => {
      setHamburgerState(false);
      if (!ctx.ctaButtonClicked?.clicked) {
        ctx.ctaButtonHandler?.();
      }
      const charNr = Number(elem?.getAttribute?.("data-character"));
      if (isNaN(charNr)) {
        if (ctx.setSelected) ctx?.setSelected(false);
      }
      let char = document
        .querySelector(`[data-const-pos="${charNr}"]`)
        ?.getAttribute("data-character");
      if (char) {
        ctx.rotateCharactersHandler?.(char ? +char : null);
        ctx.setWhichSelected?.(charNr);
        ctx.setSelected?.(true);
      }
    };
    const scrollHandler = (overwrite = id) => {
      const element = document.querySelector(`#${overwrite}`);
      console.log(element, overwrite);
      element?.scrollIntoView({
        behavior: "smooth",
        block: `${overwrite !== "about-me" ? "center" : "end"}`,
      });
    };
    // const navEl = event.currentTarget;
    // if (heroIsVisibleCtx.heroIsVisible) {
    //   changeStates(navEl);
    //   // navigate(`${navEl.getAttribute("data-to")}`);
    //   if (location.pathname !== navEl.getAttribute("data-to")) {
    //     setTimeout(() => {
    //       scrollHandler();
    //     }, 750);
    //   } else scrollHandler();
    // } else {
    //   if (location.pathname !== navEl.getAttribute("data-to")) {
    //     scrollHandler("hero");
    //     setTimeout(() => {
    //       // navigate(`${navEl.getAttribute("data-to")}`);
    //       changeStates(navEl);
    //       setTimeout(() => {
    //         scrollHandler();
    //       }, 600);
    //     }, 750);
    //   } else {
    //   }
    // }
    setHamburgerState(false);
    scrollHandler();
  };

  return (
    <header className={`${classes.header} `}>
      <div
        className={`${classes["header-wrapper"]} card-glass ${
          hamburgerState
            ? classes["hamburger-active"]
            : classes["hamburger-not-active"]
        }`}
      >
        <div className={classes.navigation}>
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
