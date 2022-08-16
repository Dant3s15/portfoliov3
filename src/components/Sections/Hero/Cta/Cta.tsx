import ButtonPrimary from "../../../UI/ButtonPrimary";
import Typewriter from "typewriter-effect";
import classes from "./Cta.module.scss";
import CTAtext from "./CtaText/CtaText";
import ProjectCarousel from "../ProjectsCarousel/ProjectCarousel";
import CtaButton from "./CtaButton/CtaButton";

const Cta = () => {
  return (
    <div className={classes["cta-wrapper"]}>
      <div className={classes.cta}>
        <CTAtext
          className={""} // className={`${
          //   selectedCtx.ctaButtonClicked?.clicked ? classes.hidden : ""
          // }`}
        ></CTAtext>
        <CtaButton></CtaButton>
      </div>
      <ProjectCarousel></ProjectCarousel>
      {/* <CTAtext
        className={""} // className={`${
        //   selectedCtx.ctaButtonClicked?.clicked ? classes.hidden : ""
        // }`}
      ></CTAtext> */}
    </div>
  );
};

export default Cta;
