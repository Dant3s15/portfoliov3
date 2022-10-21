import { FC, Fragment, useEffect, useState } from "react";
import Character from "../Hero/Characters/Character";
import CardGlass from "../../UI/CardGlass";
import ContactForm from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";
import Typewriter from "typewriter-effect";
import classes from "./AboutMe.module.scss";
import { skillInterface } from "../../../Types/types";
import PopUpWindow from "../../UI/PopUpWindow";
import myPhoto from "../../../resources/img/character.png";
import { useInView } from "react-intersection-observer";
import useInViewDelay from "../../../hooks/useInViewDelay";

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const ContactMe: FC<Props> = ({ allSkillsData, isLoading }) => {
  // const [popupVisible, setPopupVisible] = useState(false);
  // const [popupText, setPopupText] = useState({
  //   message: "test",
  //   btnTxt: "test",
  // });

  const { ref, inView } = useInView({
    threshold: 0.3,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${1})`);
        root.style.setProperty("--mask-percent", `${50}%`);
        root.style.setProperty("--blur", `blur(${2}px)`);
        root.style.setProperty("--vmin", `6.5vmin 6.5vmin`);
        root.style.setProperty("--dot-opacity", `0.25`);
        root.style.setProperty("--dot-position", `50% 80%`);
      }
    },
  });

  const [inViewDelay, setInViewDelay] = useInViewDelay({ inView });
  // const [inViewDelay, setInViewDelay] = useState(inView);

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout;
  //   if (!inView) {
  //     timeout = setTimeout(() => {
  //       setInViewDelay(inView);
  //     }, 1000);
  //   } else setInViewDelay(inView);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [inView]);

  return (
    <div ref={ref} id="about-me" className={`${classes["about-me"]} padding`}>
      <div
        className={`${inView ? "fade-in" : "fade-out"} ${classes["bg-title"]}`}
      >
        ABOUT ME
      </div>
      <div className={classes["my-photo"]}>
        {/* <div className={`${classes["char__container"]} cancel-absolute`}> */}
        {/* <Character
              onRotateCharacters={() => {
                return;
              }}
              data={3}
              // name="Damian"
            ></Character> */}
        <img
          className={`${classes.title} ${inView ? "fade-in" : "fade-out"}`}
          src={myPhoto}
          alt="photo of me"
        />
        {/* </div> */}
      </div>
      <div className={classes["text-about"]}>
        <div
          className={`${classes.title} ${inView ? "fade-in-r" : "fade-out-r"}`}
        >
          {inViewDelay && (
            <Typewriter
              options={{
                delay: 30,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .typeString(
                    `<span class =${classes["title-span"]}><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>M</span><span>e</span></span>`
                  )
                  .start();
              }}
            />
          )}
        </div>
        <span
          className={`${classes.text}  ${inView ? "fade-in-r" : "fade-out-r"}`}
        >
          Hey, my name is Damian, I'm knowledge-hungry, react, frontend web
          developer from Poland.
        </span>
      </div>
    </div>
  );
};

export default ContactMe;
{
  /* <div className={classes["text-wrapper"]}>
  <CardGlass corner className={classes["glass-card--custom"]}>
  {popupVisible && (
    <PopUpWindow
    message={popupText.message}
    btnTxt={popupText.btnTxt}
                onClick={() => {
                  setPopupVisible(false);
                }}
              />
            )}
            <div className={`${classes["text-container"]} `}>
              <Typewriter
                options={{
                  delay: 100,
                  cursor: "_",
                  wrapperClassName: classes.title,
                  cursorClassName: classes["title__cursor"],
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`<h2>About Me</h2>`)
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(`<h2>Contact Me</h2>`)
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
              <div className={classes.text}>
                {
                  <Typewriter
                    options={{
                      delay: 30,
                      cursor: "",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .typeString(
                          "<span>Hey, I'm Damian, your Frontend Developer from Poland 😊</span>"
                        )
                        .pauseFor(1000)
                        .typeString(
                          "<span>I can help you build your dream project 😉</span>"
                        )
                        .pauseFor(1000)
                        .typeString(
                          '<span>You can contact me by sending me an <a href="mailto:damiansobierajdev@gmail.com">email📧</a> or using the form below:</span>'
                        )
                        .start();
                    }}
                  />
                }
              </div>
[]
            </div>
          </CardGlass>
        </div> */
}
