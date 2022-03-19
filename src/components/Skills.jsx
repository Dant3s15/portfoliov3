import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
// import { useState } from 'react/cjs/react.production.min';

const skillsList = [{ name: 'javascript' }, { name: 'css' }, { name: 'html' }];

const SkillsList = props => {
  // const [skills, setSkills] = useState('testx');
  const skillsStruct = (
    <ul>
      {skillsList.map(item => {
        return <li key={Math.random()}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Fragment>
      {ReactDOM.createPortal(
        skillsStruct,
        document.getElementById('skills-root')
      )}
    </Fragment>
  );
};

export default SkillsList;
