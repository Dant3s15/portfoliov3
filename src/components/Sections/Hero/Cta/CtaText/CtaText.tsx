import { FC } from "react";
import Typewriter from "typewriter-effect";
import classes from "./CtaText.module.scss";

interface Props {
  className: string;
}

const CtaText: FC<Props> = ({ className }) => {
  return (
    <div className={classes.textWrapper}>
      <div className={`${classes.CtaText} ${className}`}>
        {
          <Typewriter
            options={{
              delay: 100,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span class =${classes.title}>Hi,</br> I'm Damian</span>`
                )
                .pauseFor(1000)
                .start();
            }}
          />
        }
        <span className={classes["sub-title"]}>
          {
            <Typewriter
              options={{
                delay: 70,
                cursor: "",
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString(`Frontend`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`React`)
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          }
          {
            <Typewriter
              options={{
                delay: 70,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(2600).typeString(`Developer`).start();
              }}
            />
          }
          {/* <span>Developer</span> */}
        </span>
      </div>
    </div>
  );
};

export default CtaText;
