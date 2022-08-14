import { FC } from "react";
import Typewriter from "typewriter-effect";
import CardGlass from "../../UI/CardGlass";
import classes from "./CTAtext.module.scss";

interface Props {
  className: string;
}

const CTAtext: FC<Props> = ({ className }) => {
  return (
    <div className={`${classes.CTAtext} ${className}`}>
      {
        <Typewriter
          options={{
            delay: 40,
            cursor: "_",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span>Hi, I'm Damian</span></br>")
              .pauseFor(1000)
              .typeString(
                "<span>React</br>Frontend</br>Web</br>Developer</span></br>"
              )
              .pauseFor(0)
              .typeString("<span>From</br>Poland</span>")
              .start();
          }}
        />
      }
      {/* <span>Hey, I'm Damian</span>
      <br />
      <span>Frontend Web Developer</span>
      <br />
      <span>From Poland</span> */}
    </div>
  );
};

export default CTAtext;
