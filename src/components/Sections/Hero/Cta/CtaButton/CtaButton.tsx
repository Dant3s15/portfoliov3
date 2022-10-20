import ButtonPrimary from "../../../../UI/ButtonPrimary";
import Typewriter from "typewriter-effect";
import classes from "./CtaButton.module.scss";

const CtaButton = () => {
  return (
    <div className={classes["cta-button"]}>
      <ButtonPrimary
        isAbsolute={false}
        onClick={() => {
          let projects = document.getElementById("projects-section");
          projects?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "center",
          });
          console.log("todo");
        }}
        text="Learn More"
      ></ButtonPrimary>
      {/* <div className={`${classes["cta__text"]}`}>
        <Typewriter
        options={{
          loop: true,
          delay: 100,
          cursor: "",
        }}
        onInit={(typewriter) => {
          typewriter
              .typeString("Create")
              .pauseFor(4000)
              .deleteAll()
              .typeString("Level Up")
              .pauseFor(4000)
              .deleteAll()
              .start();
            }}
        />
        <span className={classes["your-dev"]}>your Dev</span>
      </div> */}
    </div>
  );
};

export default CtaButton;
