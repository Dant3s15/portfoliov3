import CardGlass from "../../../UI/CardGlass";
import classes from "./InfoPreview.module.scss";

import lightappDesktop from "../../../../resources/img/projects/lightapp/lightapp_desktop.jpg";
import lightappMobile from "../../../../resources/img/projects/lightapp/lightapp_mobile.jpg";
import Skill2 from "../Skills/Skill2";
import { skillInterface } from "../../../../Types/types";
import { SetStateAction } from "react";

const InfoPreview = () => {
  return (
    <div className={classes["info-col"]}>
      <CardGlass className={classes["info-preview"]}>
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
        <div className={classes.descNstack}>
          <span className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            quasi tempore natus libero provident, laudantium quo aperiam
            molestias recusandae corporis!{" "}
          </span>
          <div className={classes.stack}>
            <p>Used:</p>
            <div className={classes["stack-items"]}>
              <Skill2
                skill={{
                  id: 1,
                  name: "html",
                  names: ["HTML", "HTML5"],
                  stacks: ["frontend"],
                  description:
                    "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.",
                  icon: "https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F1.svg?alt=media&token=35799b72-fe80-44bc-a3fb-5816fa12b5da",
                  web: [
                    "https://dev.w3.org/html5/html-author/",
                    "https://developer.mozilla.org/en-US/docs/Web/HTML",
                  ],
                  level: 8,
                }}
                data={{
                  skillTooltipHandler: function (
                    skill: skillInterface,
                    action?: string | undefined
                  ): void {
                    throw new Error("Function not implemented.");
                  },
                  setShowInfo: function (value: SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                  },
                }}
              ></Skill2>
              <Skill2
                skill={{
                  id: 2,
                  name: "css",
                  names: ["CSS", "CSS3"],
                  stacks: ["frontend"],
                  description:
                    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
                  icon: "https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F2.svg?alt=media&token=9faede00-011e-4c0a-b474-3308856fc65a",
                  web: ["https://www.w3.org/Style/CSS/specs.en.html"],
                  level: 8,
                }}
                data={{
                  skillTooltipHandler: function (
                    skill: skillInterface,
                    action?: string | undefined
                  ): void {
                    throw new Error("Function not implemented.");
                  },
                  setShowInfo: function (value: SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                  },
                }}
              ></Skill2>
              <Skill2
                skill={{
                  id: 3,
                  name: "javascript",
                  names: ["JavaScript"],
                  stacks: ["frontend", "backend"],
                  description:
                    "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
                  icon: "https://firebasestorage.googleapis.com/v0/b/web-dev-skills-api.appspot.com/o/all-skills%2F3.svg?alt=media&token=833e8a59-30eb-499b-8de9-0ddc81c6bda2",
                  web: [
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                  ],
                  level: 7,
                }}
                data={{
                  skillTooltipHandler: function (
                    skill: skillInterface,
                    action?: string | undefined
                  ): void {
                    throw new Error("Function not implemented.");
                  },
                  setShowInfo: function (value: SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                  },
                }}
              ></Skill2>
            </div>
          </div>
        </div>
      </CardGlass>
    </div>
  );
};

export default InfoPreview;
