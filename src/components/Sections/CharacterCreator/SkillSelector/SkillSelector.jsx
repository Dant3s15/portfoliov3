import { Fragment, useRef, useState, useEffect } from 'react';
import CardGlass from '../../../UI/CardGlass';
import AllSkills from '../../../Utils/AllSkills';
import Skill from './Skill/Skill';
import classes from './SkillSelector.module.scss';

const SkillSelector = props => {
  const [searchAllValue, setSearchAllValue] = useState(AllSkills);

  const searchAllRef = useRef('');

  useEffect(() => {
    filterAllSkills();
  }, []);

  const filterAllSkills = () => {
    setSearchAllValue(
      AllSkills.filter(skill => {
        if (skill.name) {
          if (skill.name.toLowerCase().includes(searchAllRef.current.value)) {
            return <Skill key={skill.id} data={skill}></Skill>;
          }
        }
      })
    );
  };
  // const filterAllSkills = () => {
  //   console.log(searchAllValue);
  //   return searchAllValue.map(skill => {
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
              {searchAllValue.map(skill => {
                if (skill.name) {
                  if (
                    skill.name
                      .toLowerCase()
                      .includes(searchAllRef.current.value)
                  ) {
                    return <Skill key={skill.id} data={skill}></Skill>;
                  }
                }
              })}
            </div>
            <div className={classes['skills-menu']}>Added skills list</div>
          </div>
        </CardGlass>
      </div>
    </Fragment>
  );
};

export default SkillSelector;
