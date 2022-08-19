import { useEffect, useState } from "react";
import CardGlass from "../../../UI/CardGlass";
import classes from "./SkillTile.module.scss";

const SkillTile = ({ skillName }: { skillName: string }) => {
  const skillNameLower = skillName.toLowerCase();
  const [icon, setIcon] = useState<string>();

  const fetchIcon = async () => {
    let modifier = "original";
    const getLink = () => {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillNameLower}/${skillNameLower}-${modifier}.svg`;
    };

    let res = await fetch(getLink());
    if (!res.ok) {
      modifier = "plain";
      res = await fetch(getLink());
    }

    const iconBlob = await res.blob();
    const iconObjectURL = URL.createObjectURL(iconBlob);
    setIcon(iconObjectURL);
  };

  useEffect(() => {
    fetchIcon();
  }, []);

  // const iconSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillNameLower}/${skillNameLower}-original.svg`;
  return (
    <CardGlass className={`${classes["skill-tile"]}`}>
      {/* <div className={classes.time}>
    <img
      className={classes["time-icon"]}
      src="https://cdn-icons.flaticon.com/png/512/2364/premium/2364820.png?token=exp=1660662853~hmac=d6db4b97798d7b62f3488914ab1e90c9"
      alt=""
    />
    <p>14 months</p>
  </div> */}

      <img className={classes.icon} alt={skillName} src={icon} />
      <p className={classes.title}>{skillName}</p>
    </CardGlass>
  );
};

export default SkillTile;
