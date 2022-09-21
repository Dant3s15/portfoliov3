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
import { useInView } from "react-intersection-observer";
interface Props {
  // allSkillsData: skillInterface[];
  // isLoading: boolean;
}

const Hero: FC<Props> = () => {
  const ctx = useContext(SelectedContext);
  // const heroVisibleCtx = useContext(HeroVisibleContext);
  // const heroRef = useRef(null);
  // const entry = useIntersectionObserver(heroRef, {
  //   threshold: 0.7,
  // });
  // const isVisible = !!entry?.isIntersecting;
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${0.1})`);
        root.style.setProperty("--mask-percent", `${100}%`);
        root.style.setProperty("--blur", `blur(${200}px)`);
      }
      // else root.style.setProperty("--saturation", `saturate(${0.1})`);
    },
  });
  // useEffect(() => {
  //   console.log(entry?.intersectionRatio);
  //   if (inView) {
  //     console.log("yep");
  //   } else console.log("nope");
  // }, [entry?.intersectionRatio]);

  // useEffect(() => {
  //   console.log(entry?.intersectionRatio);
  //   // if (isVisible) {
  //   //   heroVisibleCtx.setHeroIsVisible(true);
  //   // } else heroVisibleCtx.setHeroIsVisible(false);
  // }, [entry?.intersectionRatio]);

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
      ref={ref}
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
