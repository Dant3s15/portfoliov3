import { FC } from "react";
// import Tooltip from '@mui/material/Tooltip';
import classes from "./Skill2.module.scss";
import { skillInterface } from "../../../../Types/types";

interface Props {
  skill: skillInterface;
  data: {
    skillTooltipHandler: (skill: skillInterface, action?: string) => void;
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Skill2: FC<Props> = ({ data, skill }: Props) => {
  const nameShortener = (name: string) => {
    if (name.length > 20) {
      const shortName = name.slice(0, 20);
      return `${shortName}...`;
    } else return name;
  };

  return (
    <div className={classes.wrapper}>
      <button
        className={`${classes["skill-tile"]} `}
        onMouseDown={() => {
          data.skillTooltipHandler(skill, "add");
        }}
        onMouseLeave={() => {
          data.skillTooltipHandler(skill);
        }}
      >
        {/* <Tooltip
          arrow
          placement='top'
          title={`${skill.name.toUpperCase()} Proficiency Level`}
        > */}
        <div className={`${classes["skill-tile-level"]}`}>
          <span>{skill.level}</span>
        </div>
        {/* </Tooltip> */}
        <div className={classes["skill-tile-icon"]}>
          <img src={skill.icon} alt={`${skill.names[0]} icon`}></img>
        </div>
        <div className={classes["skill-tile-name"]}>
          <p>{nameShortener(skill.names[0])}</p>
        </div>
      </button>
    </div>
  );
};

export default Skill2;
