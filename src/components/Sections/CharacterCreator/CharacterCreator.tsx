import Character from '../Hero/Characters/Character';
import SkillSelector from './SkillSelector/SkillSelector';
import classes from './CharacterCreator.module.scss';
import { FC } from 'react';
import { skillInterface } from '../../../Types/types';

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const CharacterCreator: FC<Props> = props => {
  return (
    <section id='creator' className={classes.creator}>
      <div className={classes['skill-selector__col']}>
        <SkillSelector
          allSkillsData={props.allSkillsData}
          isLoading={props.isLoading}
        ></SkillSelector>
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
        {/* <form
          onSubmit={e => {
            e.preventDefault();
            console.log('test');
          }}
          // action='gs://portfolio-27cdd.appspot.com/'
        >
          <input type='file' id='myFile' name='filename' />
          <input type='submit' />
        </form> */}
      </div>
    </section>
  );
};

export default CharacterCreator;
