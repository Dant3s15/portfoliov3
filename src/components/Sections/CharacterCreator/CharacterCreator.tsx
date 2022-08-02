import Character from "../Hero/Characters/Character";
import SkillSelector from "./SkillSelector/SkillSelector";
import classes from "./CharacterCreator.module.scss";
import { FC } from "react";
import { skillInterface } from "../../../Types/types";

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const CharacterCreator: FC<Props> = ({ allSkillsData, isLoading }) => {
  return (
    <section id="creator" className={classes.creator}>
      <div className={classes["skill-selector__col"]}>
        <SkillSelector
          key={Math.random()}
          allSkillsData={allSkillsData}
          isLoading={isLoading}
        ></SkillSelector>
      </div>
      <div className={classes["image-selector__col"]}>
        <div className={`${classes["image-selector"]} cancel-absolute`}>
          <Character
            onRotateCharacters={() => {
              return;
            }}
            data={3}
            name="Front"
          ></Character>
        </div>
      </div>
    </section>
  );
};

export default CharacterCreator;
