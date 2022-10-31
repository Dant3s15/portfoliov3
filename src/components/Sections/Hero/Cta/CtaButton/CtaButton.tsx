import ButtonPrimary from "../../../../UI/ButtonPrimary";
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
      />
    </div>
  );
};

export default CtaButton;
