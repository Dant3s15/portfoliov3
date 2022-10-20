import { FC } from "react";
import Typewriter from "typewriter-effect";
import classes from "./CtaText.module.scss";

interface Props {
  className: string;
}

const CtaText: FC<Props> = ({ className }) => {
  return (
    <div className={classes.textWrapper}>
      <div className={`${classes["cta-text"]} ${className}`}>
        {
          <h1>
            <Typewriter
              options={{
                delay: 30,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(300)
                  .typeString(
                    `<span class =${classes.title}><span class = ${classes.hi}>H</span><span class = ${classes.hi}>i</span></span>`
                  )
                  .pauseFor(500)
                  .typeString(
                    `<span class =${classes.title}></br><span>I</span><span>'</span><span>m</span> <span>D</span><span>a</span><span>m</span><span>i</span><span>a</span><span>n</span></span>`
                  )
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
        }
        <h3 className={classes["sub-title"]}>
          {
            <Typewriter
              options={{
                delay: 50,
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
                  .typeString(`Frontend`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`React`)
                  .pauseFor(2000)
                  // .deleteAll()
                  .start();
              }}
            />
          }
          {
            <Typewriter
              options={{
                delay: 50,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(2400).typeString(`Developer`).start();
              }}
            />
          }
          {/* <span>Developer</span> */}
        </h3>
      </div>
    </div>
  );
};

export default CtaText;
