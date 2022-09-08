import { useState, useContext, FC, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import classes from "./Hero.module.scss";
import SelectedContext from "../../../context/selected-context";
import HeroVisibleContext from "../../../context/hero-visible-context";
import Characters from "./Characters/Characters";
import SkillsList from "./Skills/Skills";
import { useRef } from "react";
import { skillInterface } from "../../../Types/types";
import ProjectCarousel from "./ProjectsCarousel/ProjectCarousel";
import Cta from "./Cta/Cta";
import ParallaxBackground from "../../Utils/ParallaxBackground/ParallaxBackground";

interface Props {
  // allSkillsData: skillInterface[];
  // isLoading: boolean;
}

const Hero: FC<Props> = () => {
  const ctx = useContext(SelectedContext);
  const heroVisibleCtx = useContext(HeroVisibleContext);
  const heroRef = useRef(null);
  const entry = useIntersectionObserver(heroRef, {
    threshold: 0.7,
  });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      heroVisibleCtx.setHeroIsVisible(true);
    } else heroVisibleCtx.setHeroIsVisible(false);
  }, [isVisible]);

  //TODO
  // useEffect(() => {
  //   const root = document.documentElement;
  //   const degInterval = setInterval(() => {
  //     let deg = parseInt(
  //       getComputedStyle(document.documentElement).getPropertyValue(
  //         "--gradient-deg"
  //       )
  //     );
  //     console.log(deg);
  //     root.style.setProperty("--gradient-deg", `${deg + 1}deg`);
  //   }, 500);
  //   return () => clearInterval(degInterval);
  // }, []);

  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });

  const charStateDataHandler = (data: {
    leftChar: number;
    frontChar: number;
    rightChar: number;
  }) => {
    setCharState(data);
  };

  const heroOnClickHandler = (e: {
    stopPropagation: () => void;
    target: any;
  }) => {
    e.stopPropagation();
    if (e.target.classList.contains(classes["section-hero"])) {
      ctx.setSelected?.(false);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onClick={heroOnClickHandler}
      className={`${classes["section-hero"]} 
      ${!ctx.ctaButtonClicked?.clicked ? classes.gray : ""}
      `}
    >
      {/* <div className={classes["character-selection"]}> */}
      <Cta></Cta>

      {/* <Characters
          heroRef={heroRef}
          charState={charStateDataHandler}
        ></Characters> */}
      {/* <SkillsList
          isLoading={isLoading}
          className={classes["character-skills"]}
          charStateData={charState}
          allSkillsData={allSkillsData}
        ></SkillsList> */}

      {/* <ProjectCarousel></ProjectCarousel> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
