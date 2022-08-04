import { Fragment } from "react";
import classes from "./InfoCard.module.scss";
import lightappDesktop from "../../../../resources/img/projects/lightapp/lightapp_desktop.jpg";
import lightappMobile from "../../../../resources/img/projects/lightapp/lightapp_mobile.jpg";

const InfoCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.imagesNtitle}>
        <header className={classes.title}>LightApp</header>
        <div className={classes.images}>
          <img
            className={classes["img-desktop"]}
            src={lightappDesktop}
            alt="lightapp desktop"
          />
          <img
            className={classes["img-mobile"]}
            src={lightappMobile}
            alt="lightapp mobile"
          />
        </div>
      </div>
      <div className={classes.overview}>
        <span className={classes.description}>
          Responsive web app for getting the best suited light bulb luminocity
          depending on the lamp and room types.
        </span>
        <div className={classes.stack}>
          <p>Created with:</p>
          <div className={classes["stack-items"]}>
            <span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <p>React</p>
            </span>
            <span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />

              <p>Sass</p>
            </span>
            <span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

              <p>TypeScript</p>
            </span>
            <span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />

              <p>Tailwind CSS</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
