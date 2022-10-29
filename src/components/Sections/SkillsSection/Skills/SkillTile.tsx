import { useEffect, useState } from "react";
import CardGlass from "../../../UI/CardGlass";
import classes from "./SkillTile.module.scss";
import getDevicon from "../../../Utils/getDevicon";
const SkillTile = ({
  skill,
  inView,
  activeId,
  skillId,
}: {
  skill: { name: string; time: string };
  inView: boolean;
  activeId: number;
  skillId: number;
}) => {
  const [icon, setIcon] = useState<string>();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const fetchIcon = async () => {
    let modifier = "original";

    let res = await fetch(getDevicon(skill.name, modifier));
    if (!res.ok) {
      modifier = "plain";
      res = await fetch(getDevicon(skill.name, modifier));
    }

    const iconBlob = await res.blob();
    const iconObjectURL = URL.createObjectURL(iconBlob);
    setIcon(iconObjectURL);
  };

  useEffect(() => {
    fetchIcon();
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHovering(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isHovering]);

  const calcTime = () => {
    const dateNow = new Date();
    const skillDate = new Date(skill.time);

    const diffInMonths = () => {
      const diff =
        dateNow.getMonth() -
        skillDate.getMonth() +
        12 * (dateNow.getFullYear() - skillDate.getFullYear());

      const years = Math.floor(diff / 12);
      const months = diff % 12;

      return { years, months };
    };

    return diffInMonths();
  };

  const skillTime = calcTime();
  return (
    <div className={`${classes["skill-tile"]}`}>
      <CardGlass
        datatile="tile"
        onMouseOver={() => {
          setIsHovering(true);
        }}
        className={`${classes["card-inner"]} ${
          isHovering || activeId === skillId
            ? classes["flip-back"]
            : classes["flip"]
        }`}
      >
        <div className={classes["card-front"]}>
          <img className={classes.icon} alt={skill.name} src={icon} />
          <p className={classes.title}>{skill.name}</p>
        </div>

        <div className={classes["card-back"]}>
          <div className={classes["time-text"]}>
            <p className={classes.subtitle}>Using</p>
            <p className={classes.title}>{skill.name}</p>
            <p className={classes.subtitle}>since</p>
          </div>
          <div className={classes.time}>
            {skillTime.years > 0 && (
              <p className={classes.year}>
                {skillTime.years}
                {skillTime.years > 0 &&
                  (skillTime.years > 1 ? " years" : " year")}
              </p>
            )}

            {skillTime.months > 0 && (
              <p className={classes.month}>
                {skillTime.months}
                {skillTime.months > 0 &&
                  (skillTime.months > 1 ? " months" : " month")}
              </p>
            )}
          </div>
        </div>
      </CardGlass>
    </div>
  );
};

export default SkillTile;
