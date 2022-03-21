import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Skill from './Skill';
import classes from './Skills.module.scss';

const allSkills = [
  {
    id: 1,
    name: 'HTML',
    icon: <ion-icon class='skill-icon' name='logo-html5' />,
  },
  {
    id: 2,
    name: 'CSS',
    icon: <ion-icon class='skill-icon' name='logo-css3' />,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <ion-icon class='skill-icon' name='logo-javascript' />,
  },
  { id: 4, name: 'Git' },
  { id: 5, name: 'GitHub' },
  { id: 6, name: 'GitLab' },
  { id: 7, name: 'Bitbucket' },
  { id: 8, name: 'npm' },
  { id: 9, name: 'yarn' },
  { id: 10, name: 'BEM' },
  { id: 11, name: 'OOCSS' },
  { id: 12, name: 'SMACSS' },
  {
    id: 13,
    name: 'Sass',
    icon: <ion-icon class='skill-icon' name='logo-sass' />,
  },
  { id: 14, name: 'PostCSS' },
  { id: 15, name: 'Less' },
  { id: 16, name: 'npm scripts' },
  { id: 17, name: 'Webpack' },
  { id: 18, name: 'esbuild' },
  { id: 19, name: 'Rollup' },
  { id: 20, name: 'Parcel' },
  { id: 21, name: 'Vite' },
  { id: 22, name: 'Styled Components' },
  { id: 23, name: 'CSS Modules' },
  { id: 24, name: 'Styled JSX' },
  { id: 25, name: 'Emotion' },
  {
    id: 26,
    name: 'React',
    icon: <ion-icon class='skill-icon' name='logo-react' />,
  },
  { id: 27, name: 'Redux' },
  { id: 28, name: 'MobX' },
  { id: 29, name: 'Recoil' },
  { id: 30, name: 'Angular' },
  { id: 31, name: 'RxJS' },
  { id: 32, name: 'NgRx' },
  { id: 33, name: 'Vue.js' },
  { id: 34, name: 'VueX' },
  { id: 35, name: 'Bootstrap' },
  { id: 36, name: 'Bulma' },
  { id: 37, name: 'Tailwind CSS' },
  { id: 38, name: 'Chakra UI' },
  { id: 39, name: 'Material UI' },
  { id: 40, name: 'Radix UI' },
  { id: 41, name: 'Jest' },
  { id: 42, name: 'react-testing-library' },
  { id: 43, name: 'Cypress' },
  { id: 44, name: 'Enzyme' },
  { id: 45, name: 'Mocha' },
  { id: 46, name: 'Chai' },
  { id: 47, name: 'Ava' },
  { id: 48, name: 'Jasmine' },
  { id: 49, name: 'TypeScript' },
  { id: 50, name: 'Flow' },
  { id: 51, name: 'Next.js' },
  { id: 52, name: 'After.js' },
  { id: 53, name: 'Universal' },
  { id: 54, name: 'Nuxt.js' },
  { id: 55, name: 'GraphQL' },
  { id: 56, name: 'Apollo' },
  { id: 57, name: 'Relay Modern' },
  { id: 58, name: 'GatsbyJS' },
  { id: 59, name: 'Vuepress' },
  { id: 60, name: 'Jekyll' },
  { id: 61, name: 'Hugo' },
  { id: 62, name: 'Gridsome' },
  { id: 63, name: 'Eleventy' },
  { id: 64, name: 'React Native' },
  { id: 65, name: 'NativeScript' },
  { id: 66, name: 'Flutter' },
  { id: 67, name: 'Ionic' },
  { id: 68, name: 'Electron' },
  { id: 69, name: 'Carlo' },
  { id: 70, name: 'Proton Native' },
];

const skillsByCharacters = [
  [1, 3, 2],
  [1, 2, 3, 4, 5, 8, 10, 13, 21, 22, 23, 26],
  [4, 6, 8],
];

const charIDs = [0, 1, 2];

const skillsStruct = id => (
  <ul className={classes['skills-list']} data-character={id}>
    {skillsByCharacters[id].map(item => {
      const curSkill = allSkills.find(skill => skill.id === item);
      return <Skill key={curSkill.id} skill={curSkill} />;
    })}
  </ul>
);

const SkillsList = props => {
  const skillsRoot = document.getElementById('skills-root');
  return (
    <Fragment>
      {ReactDOM.createPortal(skillsStruct(0), skillsRoot)}
      {ReactDOM.createPortal(skillsStruct(1), skillsRoot)}
      {ReactDOM.createPortal(skillsStruct(2), skillsRoot)}
    </Fragment>
  );
};

export default SkillsList;
