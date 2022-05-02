import Character from '../Hero/Characters/Character';
import SkillSelector from './SkillSelector/SkillSelector';
import classes from './CharacterCreator.module.scss';
import { useEffect } from 'react';
const CharacterCreator = () => {
  // useEffect(() => {
  //   return () => {
  //     const hero = document.querySelector(`#hero`);
  //     hero?.scrollIntoView();

  //     console.log('hh');
  //   };
  // });

  return (
    <div id='creator' className={classes.creator}>
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
    </div>
  );
};

export default CharacterCreator;
