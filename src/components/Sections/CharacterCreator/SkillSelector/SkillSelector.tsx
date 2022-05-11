import { Fragment, useEffect, useRef, useState } from 'react';
import CardGlass from '../../../UI/CardGlass';
import AllSkills from '../../../Utils/AllSkills';
import Skill from './Skill/Skill';
import SkillAddWindow from './SkillAddWindow';
import ButtonBig from '../../../UI/ButtonBig';
import classes from './SkillSelector.module.scss';
import { skillInterface } from '../../../../Types/types';

const SkillSelector = () => {
  const [allSkillsArr, setAllSkillsArr] = useState(AllSkills);
  const [allSkillsArrFiltered, setAllSkillsArrFiltered] =
    useState(allSkillsArr);
  const [allSkillsIsFiltered, setAllSkillsIsFiltered] = useState(false);

  const [addedSkills, setAddedSkills] = useState<any[]>([]);
  const [addedSkillsFiltered, setAddedSkillsFiltered] =
    useState<any[]>(addedSkills);
  const [addedSkillsIsFiltered, setAddedSkillsIsFiltered] = useState(false);

  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [skillAddingData, setSkillAddingData] = useState<any>(AllSkills[0]);
  const [levelIsSet, setlevelIsSet] = useState(false);

  const searchAllRef = useRef<HTMLInputElement>(null);
  const searchAddedRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (localStorage.getItem('leftChar')) {
      // const localSkills = JSON.parse(localStorage.getItem('leftChar') || '');
      // setAddedSkills(localSkills);
      //TODO get added skills from local storage and filter them out from all skills
      // setAllSkillsArr(curSkills => {
      //   console.log(curSkills);
      //   return curSkills.filter(cur => {
      //     return !JSON.parse(localStorage.getItem('leftChar') || '').includes(
      //       cur
      //     );
      //   });
      // });
      // console.log(localSkills);
      // setAllSkillsArr(cur => {
      //   return cur.filter(cr => {
      //     return !localSkills.includes(cr);
      //   });
      // });
    }
  }, []);

  const filterSkills = () => {
    const searchAllVal = searchAllRef.current?.value.toLowerCase();
    const searchAddedVal = searchAddedRef.current?.value.toLowerCase();

    if (searchAllVal) {
      const newArr = allSkillsArr.filter(skill => {
        return skill.name.toLowerCase().includes(searchAllVal);
      });
      setAllSkillsIsFiltered(true);
      setAllSkillsArrFiltered(newArr);
    } else {
      setAllSkillsIsFiltered(false);
    }
    if (searchAddedVal !== '') {
      const newArr: any[] = addedSkills.filter(skill =>
        skill.name.toLowerCase().includes(searchAddedVal)
      );
      console.log(newArr);
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
  const sortSkills = (arr: any[]) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };

  const skillChangeHandler = (skill: skillInterface) => {
    // const sortSkills = (arr: any[]) => {
    //   return arr.sort((a, b) => a.name.localeCompare(b.name));
    // };

    //SKILL ADDING

    if (allSkillsArr.some(curSkill => curSkill === skill)) {
      setIsAdding(true);
      // const skillTemp = skill;
      // console.log(skillTemp);
      setSkillAddingData(skill);
      if (isAdding && !isAdded) {
        setAllSkillsArr(prevAllSkills => {
          return sortSkills(
            prevAllSkills.filter(curSkill => curSkill !== skill)
          );
        });
        setAllSkillsArrFiltered(prevAllSkills => {
          return sortSkills(
            prevAllSkills.filter(curSkill => curSkill !== skill)
          );
        });

        setAddedSkills(prevAddedSKills => {
          return sortSkills([
            ...allSkillsArr.filter(curSkill => curSkill === skill),
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
              //TODO
              console.log(curSkill);
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
      setIsAdded(true);
      skillChangeHandler(skill);
    } else {
      //TODO select skill level popup
      console.log('scroll');
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
      // const data = await response.json();
      // console.log(data.name);
    }
  };

  const renderSkills = (skillsArr: {}[], sign: string) => {
    const newArr = sortSkills(skillsArr);
    // newArr.forEach(skill => {
    //   skill.level = undefined;
    // });
    return newArr.map((skill: any) => {
      return (
        <Skill
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
                <label className={classes['search-label']} htmlFor='search-all'>
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
          ></ButtonBig>
        </div>
      </CardGlass>
    </Fragment>
  );
};

export default SkillSelector;
