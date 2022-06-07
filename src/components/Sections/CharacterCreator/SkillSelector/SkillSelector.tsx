import { FC, Fragment, useEffect, useRef, useState } from 'react';
import CardGlass from '../../../UI/CardGlass';
import Skill from './Skill/Skill';
import SkillAddWindow from './SkillAddWindow';
import ButtonBig from '../../../UI/ButtonBig';
import classes from './SkillSelector.module.scss';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { skillInterface } from '../../../../Types/types';

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const SkillSelector: FC<Props> = props => {
  const [allSkillsArr, setAllSkillsArr] = useState<skillInterface[]>([]);
  const [allSkillsArrFiltered, setAllSkillsArrFiltered] =
    useState(allSkillsArr);
  const [allSkillsIsFiltered, setAllSkillsIsFiltered] = useState(false);

  const [addedSkills, setAddedSkills] = useState<skillInterface[]>([]);
  const [addedSkillsFiltered, setAddedSkillsFiltered] =
    useState<skillInterface[]>(addedSkills);
  const [addedSkillsIsFiltered, setAddedSkillsIsFiltered] = useState(false);

  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [skillAddingData, setSkillAddingData] = useState<skillInterface>(
    props.allSkillsData[0]
  );
  const [levelIsSet, setlevelIsSet] = useState(false);
  const [whichTooltip, setWhichTooltip] = useState(undefined);

  const searchAllRef = useRef<HTMLInputElement>(null);
  const searchAddedRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAllSkillsArr(props.allSkillsData);
  }, [props.isLoading]);

  useEffect(() => {
    //TODO check local storage for errors

    if (localStorage.getItem('leftChar')) {
      const localSkills = JSON.parse(localStorage.getItem('leftChar') || '');
      setAddedSkills(localSkills);
      const localSkillsIds = localSkills.map((el: { name: string }) => el.name);

      setAllSkillsArr(prevAllSkills =>
        prevAllSkills.filter(
          curSkill => !localSkillsIds.includes(curSkill.name)
        )
      );
    }
  }, []);
  //refresh all skills data when skill selector is rendered but skills not yet fetched

  const filterSkills = () => {
    const searchAllVal = searchAllRef.current?.value.toLowerCase();
    const searchAddedVal = searchAddedRef.current?.value.toLowerCase();

    if (searchAllVal) {
      const newArr = allSkillsArr.filter(skill => {
        return skill.names[0].toLowerCase().includes(searchAllVal);
      });
      setAllSkillsIsFiltered(true);
      setAllSkillsArrFiltered(newArr);
    } else {
      setAllSkillsIsFiltered(false);
    }
    if (searchAddedVal !== undefined) {
      const newArr: skillInterface[] = addedSkills.filter(skill =>
        skill.names[0].toLowerCase().includes(searchAddedVal)
      );
      setAddedSkillsIsFiltered(true);
      setAddedSkillsFiltered(newArr);
    } else {
      setAddedSkillsIsFiltered(false);
    }
  };

  const cancelAddingHandler = () => {
    setIsAdding(false);
    setIsAdded(false);
  };
  const sortSkills = (arr: skillInterface[]) => {
    return arr.sort((a, b) => {
      return a.names[0].localeCompare(b.names[0]);
    });
  };

  const skillChangeHandler = (skill: skillInterface) => {
    //SKILL ADDING

    if (allSkillsArr.some(curSkill => curSkill === skill)) {
      setIsAdding(true);
      setSkillAddingData(skill);
      if (isAdding && !isAdded) {
        setAllSkillsArr(prevAllSkills => {
          return sortSkills(
            prevAllSkills.filter(curSkill => {
              return curSkill !== skill;
            })
          );
        });
        setAllSkillsArrFiltered(prevAllSkills => {
          return sortSkills(
            prevAllSkills.filter(curSkill => curSkill !== skill)
          );
        });

        setAddedSkills(prevAddedSKills => {
          return sortSkills([
            ...allSkillsArr.filter(curSkill => {
              return curSkill === skill;
            }),
            ...prevAddedSKills,
          ]);
        });
        setIsAdding(false);
        setIsAdded(false);
      }
    } else if (allSkillsArr.some(curSkill => curSkill !== skill)) {
      //SKILL REMOVING
      if (!isAdding) {
        setAddedSkills(prevAllSkills => {
          return sortSkills(
            prevAllSkills.filter(curSkill => curSkill !== skill)
          );
        });
        setAddedSkillsFiltered(prevAllSkills => {
          return sortSkills(
            prevAllSkills.filter(curSkill => curSkill !== skill)
          );
        });

        setAllSkillsArr(prevAllSkills => {
          return sortSkills([
            ...addedSkills.filter(curSkill => {
              skill.level = 0;
              return curSkill === skill;
            }),
            ...prevAllSkills,
          ]);
        });
      }
    }
    setlevelIsSet(false);
  };
  const skillAddHandler = (skill: skillInterface) => {
    if (levelIsSet) {
      setWhichTooltip(undefined);
      setIsAdded(true);
      skillChangeHandler(skill);
    }
  };

  const saveCharHandler = () => {
    if (addedSkills.length === 0) {
      console.log('add Skills');
      return;
    } else {
      // const response = await fetch(
      //   'https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app/saved-characters.json',
      //   {
      //     method: 'POST',
      //     body: JSON.stringify(addedSkills),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      localStorage.setItem('leftChar', JSON.stringify(addedSkills));
      window.dispatchEvent(new Event('storage'));
    }
  };

  const renderSkills = (skillsArr: skillInterface[], sign: string) => {
    const newArr = sortSkills(skillsArr);

    return newArr.map((skill: skillInterface) => {
      if (skill.id === 0) {
        return;
      } else
        return (
          <Skill
            onTooltip={{
              whichTooltip,
              setWhichTooltip,
            }}
            onSkillChange={skillChangeHandler}
            key={skill.id}
            data={skill}
            sign={sign}
          ></Skill>
        );
    });
  };

  return (
    <Fragment>
      <CardGlass className={classes['skill-selector--card']}>
        {props.isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className={classes['skill-selector']}>
            {isAdding && (
              <SkillAddWindow
                onSetLevel={setlevelIsSet}
                onCancel={cancelAddingHandler}
                onSkillAdd={skillAddHandler}
                skillData={skillAddingData}
              ></SkillAddWindow>
            )}
            <div className={classes['skills-selector__grid']}>
              <div className={classes['title-row']}>
                <p className={classes['title']}>All Skills</p>
                <div className={classes['search-field']}>
                  <label
                    className={classes['search-label']}
                    htmlFor='search-all'
                  >
                    Search
                  </label>
                  <input
                    onChange={filterSkills}
                    ref={searchAllRef}
                    id='search-all'
                    type='text'
                  />
                </div>
              </div>
              <div className={classes['title-row']}>
                <p className={classes['title']}>Added Skills</p>
                <div className={classes['search-field']}>
                  <label
                    className={classes['search-label']}
                    htmlFor='search-added'
                  >
                    Search
                  </label>
                  <input
                    onChange={filterSkills}
                    ref={searchAddedRef}
                    id='search-added'
                    type='text'
                  />
                </div>
              </div>

              <div className={`${classes['skills-menu']} ${classes.all}`}>
                {allSkillsIsFiltered === false
                  ? renderSkills(allSkillsArr, '+')
                  : renderSkills(allSkillsArrFiltered, '+')}
              </div>
              <div className={`${classes['skills-menu']} ${classes.added}`}>
                {addedSkillsIsFiltered === false
                  ? renderSkills(addedSkills, '-')
                  : renderSkills(addedSkillsFiltered, '-')}
              </div>
            </div>
            <ButtonBig
              onClick={saveCharHandler}
              type='submit'
              text='Save Character'
              isGreyedOut={addedSkills.length === 0 ? true : false}
            ></ButtonBig>
          </div>
        )}
      </CardGlass>
    </Fragment>
  );
};

export default SkillSelector;
