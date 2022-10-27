import { useEffect, useState } from "react";
import CardGlass from "../../../UI/CardGlass";
import classes from "./SkillTile.module.scss";
import getDevicon from "../../../Utils/getDevicon";
// import Tilt from "react-parallax-tilt";
const SkillTile = ({
  skill,
  inView,
  activeId,
  skillId,
}: // initialAnimation,
{
  skill: { name: string; time: string };
  inView: boolean;
  activeId: number;
  skillId: number;
  // initialAnimation: boolean;
}) => {
  // const skillNameLower = skillName.toLowerCase();
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

  // useEffect(() => {
  //   setIsHovering(!inView);
  // }, [inView]);

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
  //TODO check skill tile styled as navbar
  // const iconSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillNameLower}/${skillNameLower}-original.svg`;
  return (
    <div className={`${classes["skill-tile"]}`}>
      <CardGlass
        datatile="tile"
        onMouseOver={() => {
          setIsHovering(true);
        }}
        // onMouseLeave={() => {
        //   setIsHovering(false);
        // }}
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
        {/* <div className={classes.time}>
    <img
    className={classes["time-icon"]}
    src="https://cdn-icons.flaticon.com/png/512/2364/premium/2364820.png?token=exp=1660662853~hmac=d6db4b97798d7b62f3488914ab1e90c9"
    alt=""
    />
    <p>14 months</p>
  </div> */}
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
