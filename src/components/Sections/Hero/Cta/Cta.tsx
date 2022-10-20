import ButtonPrimary from "../../../UI/ButtonPrimary";
import Typewriter from "typewriter-effect";
import classes from "./Cta.module.scss";
import CTAtext from "./CtaText/CtaText";
import ProjectCarousel from "../ProjectsCarousel/ProjectCarousel";
import CtaButton from "./CtaButton/CtaButton";

type Props = {
  heroInView: boolean;
};

const Cta = ({ heroInView }: Props) => {
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

      <ProjectCarousel heroInView={heroInView}></ProjectCarousel>

      {/* <CTAtext
        className={""} // className={`${
          //   selectedCtx.ctaButtonClicked?.clicked ? classes.hidden : ""
          // }`}
        ></CTAtext> */}
    </div>
  );
};

export default Cta;
