import { FC, Fragment, useState } from "react";
import Character from "../Hero/Characters/Character";
import CardGlass from "../../UI/CardGlass";
import ContactForm from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";
import Typewriter from "typewriter-effect";
import classes from "./AboutMe.module.scss";
import { skillInterface } from "../../../Types/types";
import { motion } from "framer-motion";
import PopUpWindow from "../../UI/PopUpWindow";

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const AboutMe: FC<Props> = ({ allSkillsData, isLoading }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState({
    message: "test",
    btnTxt: "test",
  });

  return (
    <Fragment>
      <Projects allSkillsData={allSkillsData} isLoading={isLoading} />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="about-me"
        className={classes["about-me"]}
      >
        <div className={classes["about-me-char"]}>
          <div className={`${classes["char__container"]} cancel-absolute`}>
            <Character
              onRotateCharacters={() => {
                return;
              }}
              data={3}
              name="Damian"
            ></Character>
          </div>
        </div>

        <div className={classes["text-wrapper"]}>
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
                  delay: 200,
                  cursor: "_",
                  wrapperClassName: classes.title,
                  cursorClassName: classes["title__cursor"],
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`<h2>About Me</h2>`)
                    .pauseFor(4000)
                    .deleteAll()
                    .typeString(`<h2>Contact Me</h2>`)
                    .pauseFor(4000)
                    .deleteAll()
                    .start();
                }}
              />
              <div className={classes.text}>
                <Typewriter
                  options={{
                    delay: 60,
                    cursor: "",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString(
                        "<span>Hey, I'm Damian, your Frontend Developer from Poland 😊</span>"
                      )
                      .pauseFor(2000)
                      .typeString(
                        "<span>I can help you build your dream project 😉</span>"
                      )
                      .pauseFor(2000)
                      .typeString(
                        '<span>You can contact me by sending me an <a href="mailto:damiansobierajdev@gmail.com">email📧</a> or using the form below:</span>'
                      )
                      .start();
                  }}
                />
              </div>
              <ContactForm
                setPopupTxt={setPopupText}
                // popupText={popupText}
                popupState={setPopupVisible}
              />
            </div>
          </CardGlass>
        </div>
      </motion.section>
    </Fragment>
  );
};

export default AboutMe;
