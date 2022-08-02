import { FC } from "react";
import classes from "./Nav.module.scss";

interface Props {
  navItemHandler: (event: { currentTarget: Element }, id: string) => void;
}

const Nav: FC<Props> = ({ navItemHandler }) => {
  return (
    <nav className={classes.nav}>
      <a
        data-to="/about-me"
        data-character="1"
        onClick={(e) => navItemHandler(e, "my-projects")}
        className={`${classes.nav__item} `}
      >
        My projects
      </a>
      <a
        data-to="/about-me"
        data-character="1"
        onClick={(e) => navItemHandler(e, "about-me")}
        className={`${classes.nav__item} `}
      >
        Contact Me
      </a>
      <a
        data-to={"/creator"}
        data-character="0"
        onClick={(e) => navItemHandler(e, "creator")}
        className={`${classes.nav__item} `}
      >
        Character Creator
      </a>
    </nav>
  );
};

export default Nav;
