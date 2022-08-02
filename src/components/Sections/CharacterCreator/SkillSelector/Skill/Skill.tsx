import { FC } from "react";
import { skillInterface } from "../../../../../Types/types";
import SkillTooltip from "../../../../UI/SkillTooltip";
import classes from "./Skill.module.scss";

interface Props {
  onSkillChange: Function;
  onTooltip?: {
    whichTooltip: number | undefined;
    setWhichTooltip: Function;
  };
  data: skillInterface;
  sign?: string;
}

const Skill: FC<Props> = ({ data, onTooltip, onSkillChange, sign }) => {
  const nameShortener = (name: string, length: number) => {
    if (name.length > length) {
      const shortName = name.slice(0, length);
      return `${shortName}...`;
    } else return name;
  };

  const levelHandler = (
    <div className={classes.level}>
      <p key={Math.random()} className={classes["level-number"]}>
        {data.level}
      </p>
    </div>
  );

  return (
    <div
      className={`${classes.skill} ${
        onTooltip?.whichTooltip === data?.id ? classes["has-tooltip"] : ""
      }`}
      onClick={() => {
        console.log("click");
        if (data?.id !== onTooltip?.whichTooltip)
          onTooltip?.setWhichTooltip(data?.id);
        else onTooltip.setWhichTooltip(undefined);
      }}
    >
      <div className={classes.icon}>
        <img src={data?.icon} alt={`${data?.names[0]} icon`} />
      </div>
      <div className={classes.name}>{nameShortener(data.names[0], 12)}</div>
      {data.level ? levelHandler : ""}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onSkillChange(data);
        }}
        className={classes["manage-skill"]}
      >
        {sign}
      </button>
      <SkillTooltip data={data} />
    </div>
  );
};

export default Skill;
