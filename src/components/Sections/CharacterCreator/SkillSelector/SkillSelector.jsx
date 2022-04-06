import { Fragment, useRef, useState, useEffect } from 'react';
import CardGlass from '../../../UI/CardGlass';
import AllSkills from '../../../Utils/AllSkills';
import Skill from './Skill/Skill';
import classes from './SkillSelector.module.scss';

const SkillSelector = props => {
  const [allSkillsArr, setAllSkillsArr] = useState(AllSkills);
  const [addedSkills, setAddedSkills] = useState([]);
  const searchAllRef = useRef('');
  //TODO filtered skills to reflect minus added skills
  useEffect(() => {
    setAllSkillsArr(prevAllSkills => {
      return [...prevAllSkills.filter(skill => !addedSkills.includes(skill))];
    });
  }, [addedSkills]);

  const addedSkillsHandler = id => {
    setAddedSkills(prevAddedSkills => {
      return [
        ...prevAddedSkills,
        ...allSkillsArr.filter(skill => skill.id === id),
      ];
    });
  };

  const filterAllSkills = () => {
    // console.log(searchAllRef.current.value.toLowerCase());

    setAllSkillsArr(
      AllSkills.filter(skill => {
        if (skill.name) {
          if (
            skill.name
              .toLowerCase()
              .includes(searchAllRef.current.value.toLowerCase())
          ) {
            return <Skill key={skill.id} data={skill}></Skill>;
          }
        }
      })
    );
  };

  // const filterAllSkills = () => {
  //   console.log(allSkillsArr);
  //   return allSkillsArr.map(skill => {
  //     if (skill.name.toLowerCase().includes(searchAllRef.current.value)) {
  //       console.log(skill.name);
  //       return <Skill key={skill.id} data={skill}></Skill>;
  //     }
  //   });
  // };

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
                <input id='search-added' type='text' />
              </div>
            </div>
            <div className={classes['skills-menu']}>
              {allSkillsArr.map(skill => {
                return (
                  <Skill
                    onSkillChange={addedSkillsHandler}
                    key={skill.id}
                    data={skill}
                  ></Skill>
                );
              })}
            </div>
            <div className={classes['skills-menu']}>
              {addedSkills.map(skill => {
                return (
                  <Skill
                    onSkillChange={addedSkillsHandler}
                    key={skill.id}
                    data={skill}
                  ></Skill>
                );
              })}
            </div>
          </div>
        </CardGlass>
      </div>
    </Fragment>
  );
};

export default SkillSelector;
