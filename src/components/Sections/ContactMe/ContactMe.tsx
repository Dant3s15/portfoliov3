import Typewriter from "typewriter-effect";
import classes from "./ContactMe.module.scss";
import { useInView } from "react-intersection-observer";
import useInViewDelay from "../../../hooks/useInViewDelay";
import ContactForm from "./ContactForm/ContactForm";
import { useState } from "react";
import linkedinlogo from "../../../resources/icons/logo-linkedin.svg";
import twitterlogo from "../../../resources/icons/logo-twitter.svg";
import PopUpWindow from "../../UI/PopUpWindow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const ContactMe = () => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const [popupTxt, setPopupTxt] = useState({
    message: "",
    btnTxt: "",
  });

  const { isMobile } = useWindowDimensions();

  const { ref, inView } = useInView({
    threshold: 0.1,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${1})`);
        root.style.setProperty("--mask-percent", `${50}%`);
        root.style.setProperty("--blur", `blur(${2}px)`);
        root.style.setProperty("--vmin", `10vmin 10vmin`);
        root.style.setProperty("--dot-opacity", `0.25`);
        root.style.setProperty("--dot-position", `80% 20%`);
        root.style.setProperty("--bg-opacity", `1`);
      }
    },
  });

  const [inViewDelay, setInViewDelay] = useInViewDelay({ inView });

  return (
    <section ref={ref} id="contact-me" className={`${classes["contact-me"]}`}>
      <div
        className={`${inView ? "fade-in-r" : "fade-out-r"} ${
          classes["bg-title"]
        }`}
      >
        CONTACT
      </div>

      <div className={`${classes["text-contact"]} padding`}>
        <div className={`${classes.title} ${inView ? "fade-in" : "fade-out"}`}>
          {inViewDelay && !isMobile ? (
            <Typewriter
              options={{
                delay: 30,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .typeString(
                    `<h2 class =${classes["title-span"]}><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>M</span><span>e</span></h2>`
                  )
                  .start();
              }}
            />
          ) : (
            <h2 className={classes["title-span"]}>Contact Me</h2>
          )}
        </div>

        <div className={classes.links}>
          <span
            className={`${classes.text}  ${inView ? "fade-in" : "fade-out"}`}
          >
            You can contact me using:
          </span>
          <ul
            className={`${classes["links-row"]} ${
              inView ? "fade-in-r" : "fade-out-r"
            }`}
          >
            <li className={classes.link}>
              <a
                className={classes.logo}
                target="_blank"
                href="https://www.linkedin.com/in/damiansobieraj"
              >
                <img src={linkedinlogo} alt="linkedin logo" />
                <p className={classes["link-name"]}>LinkedIn</p>
              </a>
            </li>
            <li className={classes.link}>
              <a
                className={classes.logo}
                target="_blank"
                href="https://twitter.com/DevmianS"
              >
                <img src={twitterlogo} alt="twitter logo" />
                <p className={classes["link-name"]}>Twitter</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className={`${classes.text}  ${inView ? "fade-in" : "fade-out"}`}>
        Or send me a message using form below:
      </span>
      <ContactForm
        className={`${classes.title} ${
          inView ? "fade-in" : "fade-out"
        } padding`}
        popupState={setPopupVisible}
        setPopupTxt={setPopupTxt}
      >
        {popupVisible && (
          <PopUpWindow
            message={popupTxt.message}
            btnTxt={popupTxt.btnTxt}
            onClick={() => {
              setPopupVisible(false);
            }}
          ></PopUpWindow>
        )}
      </ContactForm>
    </section>
  );
};

export default ContactMe;
