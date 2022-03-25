import skill0 from '../../resources/skillIcons/1.svg';
import skill1 from '../../resources/skillIcons/1.svg';
import skill2 from '../../resources/skillIcons/2.svg';
import skill3 from '../../resources/skillIcons/3.svg';
import skill4 from '../../resources/skillIcons/4.svg';
import skill5 from '../../resources/skillIcons/5.svg';
import skill6 from '../../resources/skillIcons/6.svg';
import skill7 from '../../resources/skillIcons/7.svg';
import skill8 from '../../resources/skillIcons/8.svg';
import skill9 from '../../resources/skillIcons/9.svg';
import skill10 from '../../resources/skillIcons/10.svg';
import skill11 from '../../resources/skillIcons/2.svg';
import skill12 from '../../resources/skillIcons/2.svg';
import skill13 from '../../resources/skillIcons/13.svg';
import skill14 from '../../resources/skillIcons/14.svg';
import skill15 from '../../resources/skillIcons/15.svg';
import skill16 from '../../resources/skillIcons/8.svg';
import skill17 from '../../resources/skillIcons/17.svg';
import skill18 from '../../resources/skillIcons/18.svg';
import skill19 from '../../resources/skillIcons/19.svg';
import skill20 from '../../resources/skillIcons/20.svg';
import skill21 from '../../resources/skillIcons/22.svg';
import skill22 from '../../resources/skillIcons/23.svg';
import skill23 from '../../resources/skillIcons/2.svg';
import skill24 from '../../resources/skillIcons/26.svg';
import skill25 from '../../resources/skillIcons/25.png';
import skill26 from '../../resources/skillIcons/26.svg';
import skill27 from '../../resources/skillIcons/27.svg';
import skill28 from '../../resources/skillIcons/28.svg';
import skill29 from '../../resources/skillIcons/29.svg';
import skill30 from '../../resources/skillIcons/30.svg';

const skillsArr = [
  skill0,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
  skill13,
  skill14,
  skill15,
  skill16,
  skill17,
  skill18,
  skill19,
  skill20,
  skill21,
  skill22,
  skill23,
  skill24,
  skill25,
  skill26,
  skill27,
  skill28,
  skill29,
  skill30,
];

// for (let i = 0; i < 71; i++) {
//   skillsArr[i] = 'skill[i]';
// }

const AllSkills = [
  { id: 0, name: 'DUMMY' },
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'Git' },
  { id: 5, name: 'GitHub' },
  { id: 6, name: 'GitLab' },
  { id: 7, name: 'Bitbucket' },
  { id: 8, name: 'npm' },
  { id: 9, name: 'yarn' },
  { id: 10, name: 'BEM' },
  { id: 11, name: 'OOCSS' },
  { id: 12, name: 'SMACSS' },
  { id: 13, name: 'Sass' },
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
  { id: 26, name: 'React' },
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

for (let i = 1; i < AllSkills.length; i++) {
  if (!AllSkills[i].icon) {
    AllSkills[i].icon = skillsArr[i];
  }
}

export default AllSkills;
