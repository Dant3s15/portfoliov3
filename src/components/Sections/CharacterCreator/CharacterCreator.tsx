import Character from '../Hero/Characters/Character';
import SkillSelector from './SkillSelector/SkillSelector';
import classes from './CharacterCreator.module.scss';
const CharacterCreator = () => {
  return (
    <section id='creator' className={classes.creator}>
      <div className={classes['skill-selector__col']}>
        <SkillSelector></SkillSelector>
      </div>
      <div className={classes['image-selector__col']}>
        <div className={`${classes['image-selector']} cancel-absolute`}>
          <Character
            onRotateCharacters={() => {
              return;
            }}
            data={3}
            name='Front'
          ></Character>
        </div>
      </div>
    </section>
  );
};

export default CharacterCreator;
