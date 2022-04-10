import { Fragment, useRef, useState, useEffect } from 'react';
import CardGlass from '../../../UI/CardGlass';
import AllSkills from '../../../Utils/AllSkills';
import Skill from './Skill/Skill';
import SkillAddWindow from './SkillAddWindow';
import classes from './SkillSelector.module.scss';

const SkillSelector = props => {
  const [allSkillsArr, setAllSkillsArr] = useState(AllSkills);
  const [allSkillsArrFiltered, setAllSkillsArrFiltered] =
    useState(allSkillsArr);
  const [allSkillsIsFiltered, setAllSkillsIsFiltered] = useState(false);

  const [addedSkills, setAddedSkills] = useState([]);
  const [addedSkillsFiltered, setAddedSkillsFiltered] = useState(addedSkills);
  const [addedSkillsIsFiltered, setAddedSkillsIsFiltered] = useState(false);
  const [isLevel, setIsLevel] = useState(false);

  const searchAllRef = useRef('');
  const searchAddedRef = useRef('');

  const filterSkills = () => {
    const searchAllVal = searchAllRef.current.value.toLowerCase();
    const searchAddedVal = searchAddedRef.current.value.toLowerCase();

    if (searchAllVal !== '') {
      const newArr = allSkillsArr.filter(skill => {
        return skill.name.toLowerCase().includes(searchAllVal);
      });
      setAllSkillsIsFiltered(true);
      setAllSkillsArrFiltered(newArr);
    } else {
      setAllSkillsIsFiltered(false);
    }
    if (searchAddedVal !== '') {
      const newArr = addedSkills.filter(skill => {
        return skill.name.toLowerCase().includes(searchAddedVal);
      });
      setAddedSkillsIsFiltered(true);
      setAddedSkillsFiltered(newArr);
    } else {
      setAddedSkillsIsFiltered(false);
    }
  };

  const skillChangeHandler = skill => {
    const sortSkills = arr => {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    };

    if (allSkillsArr.some(curSkill => curSkill === skill)) {
      setAllSkillsArr(prevAllSkills => {
        return sortSkills(prevAllSkills.filter(curSkill => curSkill !== skill));
      });
      setAllSkillsArrFiltered(prevAllSkills => {
        return sortSkills(prevAllSkills.filter(curSkill => curSkill !== skill));
      });

      setAddedSkills(prevAddedSKills => {
        return sortSkills([
          ...allSkillsArr.filter(curSkill => curSkill === skill),
          ...prevAddedSKills,
        ]);
      });
    } else {
      setAddedSkills(prevAllSkills => {
        return sortSkills(prevAllSkills.filter(curSkill => curSkill !== skill));
      });
      setAddedSkillsFiltered(prevAllSkills => {
        return sortSkills(prevAllSkills.filter(curSkill => curSkill !== skill));
      });

      setAllSkillsArr(prevAddedSKills => {
        return sortSkills([
          ...addedSkills.filter(curSkill => curSkill === skill),
          ...prevAddedSKills,
        ]);
      });
    }
  };

  const addingSkillWindowHandler = () => {
    return <SkillAddWindow skillData={AllSkills[1]}></SkillAddWindow>;
  };

  const renderSkills = (skillsArr, sign) => {
    return skillsArr.map(skill => {
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
      <div className={classes['skill-selector']}>
        <CardGlass>
          {/* {addingSkillWindowHandler()} */}
          <div className={classes['skills-selector__grid']}>
            <div className={classes['title-row']}>
              All Skills
              <div className={classes['search-field']}>
                <label htmlFor='search-all'>Search</label>
                <input
                  onChange={filterSkills}
                  ref={searchAllRef}
                  id='search-all'
                  type='text'
                />
              </div>
            </div>
            <div className={classes['title-row']}>
              Added Skills
              <div className={classes['search-field']}>
                <label htmlFor='search-added'>Search</label>
                <input
                  onChange={filterSkills}
                  ref={searchAddedRef}
                  id='search-added'
                  type='text'
                />
              </div>
            </div>
            <div className={classes['skills-menu']}>
              {/* {renderSkills(allSkillsArr, '+')} */}
              {allSkillsIsFiltered === false
                ? renderSkills(allSkillsArr, '+')
                : renderSkills(allSkillsArrFiltered, '+')}
            </div>
            <div className={classes['skills-menu']}>
              {/* {renderSkills(addedSkills, '-')} */}
              {addedSkillsIsFiltered === false
                ? renderSkills(addedSkills, '-')
                : renderSkills(addedSkillsFiltered, '-')}
              {/* {renderSkills(addedSkills)} */}
            </div>
          </div>
        </CardGlass>
      </div>
    </Fragment>
  );
};

export default SkillSelector;
