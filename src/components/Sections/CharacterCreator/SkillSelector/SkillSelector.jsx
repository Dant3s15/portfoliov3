import { Fragment, useRef, useState, useEffect } from 'react';
import CardGlass from '../../../UI/CardGlass';
import AllSkills from '../../../Utils/AllSkills';
import Skill from './Skill/Skill';
import classes from './SkillSelector.module.scss';

const SkillSelector = props => {
  const [allSkillsArr, setAllSkillsArr] = useState(AllSkills);
  const [allSkillsArrFiltered, setAllSkillsArrFiltered] =
    useState(allSkillsArr);
  const [allSkillsIsFiltered, setAllSkillsIsFiltered] = useState(false);
  const [addedSkills, setAddedSkills] = useState([]);
  const [addedSkillsFiltered, setAddedSkillsFiltered] = useState(addedSkills);
  const [addedSkillsIsFiltered, setAddedSkillsIsFiltered] = useState(false);

  const searchAllRef = useRef('');
  const searchAddedRef = useRef('');

  //TODO BUG: when trying to add skill when filtering it does not remove it from the all skills list

  //TODO BUG: when filtering list are not refreshed
  useEffect(() => {
    setAllSkillsArr(prevAllSkills => {
      return [...prevAllSkills.filter(skill => !addedSkills.includes(skill))];
    });
  }, [addedSkills]);

  // useEffect(() => {
  //   filterAllSkills();
  // }, [searchAllRef]);

  const addedSkillsHandler = id => {
    setAddedSkills(prevAddedSkills => {
      return [
        ...prevAddedSkills,
        ...allSkillsArr.filter(skill => skill.id === id),
      ];
    });

    setAllSkillsArr(prevAllSkills => {
      return [
        ...prevAllSkills,
        ...addedSkills.filter(skill => skill.id === id),
      ];
    });
  };

  //TODO
  const filterAllSkills = () => {
    if (searchAllRef.current.value !== '') {
      setAllSkillsIsFiltered(true);
      console.log('filtered');
    } else {
      setAllSkillsIsFiltered(false);
    }
    setAllSkillsArrFiltered(
      AllSkills.filter(skill => {
        if (skill.name) {
          if (
            skill.name
              .toLowerCase()
              .includes(searchAllRef.current.value.toLowerCase()) &&
            addedSkills.includes(skill) === false
          ) {
            return <Skill key={skill.id} data={skill}></Skill>;
          }
        }
      })
    );
  };

  const filterAddedSkills = () => {
    if (searchAddedRef.current.value !== '') {
      setAddedSkillsIsFiltered(true);
      console.log('filtered added');
    } else {
      setAddedSkillsIsFiltered(false);
    }

    setAddedSkillsFiltered(
      AllSkills.filter(skill => {
        if (skill.name) {
          if (
            skill.name
              .toLowerCase()
              .includes(searchAddedRef.current.value.toLowerCase()) &&
            allSkillsArr.includes(skill) === false
          ) {
            return <Skill key={skill.id} data={skill}></Skill>;
          }
        }
      })
    );
  };

  const renderSkills = skillsArr => {
    return skillsArr.map(skill => {
      return (
        <Skill
          onSkillChange={addedSkillsHandler}
          key={skill.id}
          data={skill}
        ></Skill>
      );
    });
  };

  return (
    <Fragment>
      <div className={classes['skill-selector']}>
        <CardGlass>
          <div className={classes['skills-selector__grid']}>
            <div className={classes['title-row']}>
              All Skills
              <div className={classes['search-field']}>
                <label htmlFor='search-all'>Search</label>
                <input
                  onChange={filterAllSkills}
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
                  onChange={filterAddedSkills}
                  ref={searchAddedRef}
                  id='search-added'
                  type='text'
                />
              </div>
            </div>
            <div className={classes['skills-menu']}>
              {allSkillsIsFiltered === false
                ? renderSkills(allSkillsArr)
                : renderSkills(allSkillsArrFiltered)}
            </div>
            <div className={classes['skills-menu']}>
              {addedSkillsIsFiltered === false
                ? renderSkills(addedSkills)
                : renderSkills(addedSkillsFiltered)}
              {/* {renderSkills(addedSkills)} */}
            </div>
          </div>
        </CardGlass>
      </div>
    </Fragment>
  );
};

export default SkillSelector;
