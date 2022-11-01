import { FC } from "react";
import classes from "./Nav.module.scss";

interface Props {
  navItemHandler: (event: { currentTarget: Element }, id: string) => void;
  setHamburgerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: FC<Props> = ({ navItemHandler, setHamburgerState }) => {
  return (
    <nav className={`${classes.nav}`}>
      <a
        onClick={(e) => navItemHandler(e, "projects-section")}
        className={`${classes.nav__item} `}
      >
        Projects
      </a>
      <a
        onClick={(e) => navItemHandler(e, "my-skills")}
        className={`${classes.nav__item} `}
      >
        Skills
      </a>
      <a
        onClick={(e) => navItemHandler(e, "about-me")}
        className={`${classes.nav__item} `}
      >
        About
      </a>
      <a
        onClick={(e) => navItemHandler(e, "contact-me")}
        className={`${classes.nav__item} `}
      >
        Contact
      </a>
    </nav>
  );
};

export default Nav;
