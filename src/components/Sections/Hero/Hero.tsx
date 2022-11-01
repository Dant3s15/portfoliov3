import { useInView } from "react-intersection-observer";
import Cta from "./Cta/Cta";
import classes from "./Hero.module.scss";

const Hero = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    onChange(inView) {
      let root = document.documentElement;
      if (inView) {
        root.style.setProperty("--saturation", `saturate(${0.1})`);
        root.style.setProperty("--mask-percent", `${100}%`);
        root.style.setProperty("--blur", `blur(${50}px)`);
        root.style.setProperty("--vmin", `30vmin 1vmin`);
        root.style.setProperty("--dot-opacity", `0.05`);
        root.style.setProperty("--dot-position", `0% 0%`);
      }
    },
  });

  return (
    <section
      id="hero"
      ref={ref}
      className={`${classes["section-hero"]} 
      wrapper`}
    >
      <Cta heroInView={inView}></Cta>
    </section>
  );
};

export default Hero;
