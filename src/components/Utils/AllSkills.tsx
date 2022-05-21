// import axios from 'axios';
import { skillInterface } from '../../Types/types';

// import skill0 from '../../resources/skillIcons/1.svg';
// import skill1 from '../../resources/skillIcons/1.svg';
// import skill2 from '../../resources/skillIcons/2.svg';
// import skill3 from '../../resources/skillIcons/3.svg';
// import skill4 from '../../resources/skillIcons/4.svg';
// import skill5 from '../../resources/skillIcons/5.svg';
// import skill6 from '../../resources/skillIcons/6.svg';
// import skill7 from '../../resources/skillIcons/7.svg';
// import skill8 from '../../resources/skillIcons/8.svg';
// import skill9 from '../../resources/skillIcons/9.svg';
// import skill10 from '../../resources/skillIcons/10.svg';
// import skill11 from '../../resources/skillIcons/2.svg';
// import skill12 from '../../resources/skillIcons/2.svg';
// import skill13 from '../../resources/skillIcons/13.svg';
// import skill14 from '../../resources/skillIcons/14.svg';
// import skill15 from '../../resources/skillIcons/15.svg';
// import skill16 from '../../resources/skillIcons/8.svg';
// import skill17 from '../../resources/skillIcons/17.svg';
// import skill18 from '../../resources/skillIcons/18.svg';
// import skill19 from '../../resources/skillIcons/19.svg';
// import skill20 from '../../resources/skillIcons/20.svg';
// import skill21 from '../../resources/skillIcons/22.svg';
// import skill22 from '../../resources/skillIcons/23.svg';
// import skill23 from '../../resources/skillIcons/2.svg';
// import skill24 from '../../resources/skillIcons/26.svg';
// import skill25 from '../../resources/skillIcons/25.webp';
// import skill26 from '../../resources/skillIcons/26.svg';
// import skill27 from '../../resources/skillIcons/27.svg';
// import skill28 from '../../resources/skillIcons/28.svg';
// import skill29 from '../../resources/skillIcons/29.svg';
// import skill30 from '../../resources/skillIcons/30.svg';
// import skill31 from '../../resources/skillIcons/31.svg';
// import skill32 from '../../resources/skillIcons/32.svg';
// import skill33 from '../../resources/skillIcons/33.svg';
// import skill34 from '../../resources/skillIcons/33.svg';
// import skill35 from '../../resources/skillIcons/35.svg';
// import skill36 from '../../resources/skillIcons/36.svg';
// import skill37 from '../../resources/skillIcons/37.svg';
// import skill38 from '../../resources/skillIcons/38.svg';
// import skill39 from '../../resources/skillIcons/39.svg';
// import skill40 from '../../resources/skillIcons/40.svg';
// import skill41 from '../../resources/skillIcons/41.svg';
// import skill42 from '../../resources/skillIcons/42.png';
// import skill43 from '../../resources/skillIcons/43.svg';
// import skill44 from '../../resources/skillIcons/26.svg';
// import skill45 from '../../resources/skillIcons/45.svg';
// import skill46 from '../../resources/skillIcons/46.svg';
// import skill47 from '../../resources/skillIcons/47.svg';
// import skill48 from '../../resources/skillIcons/48.svg';
// import skill49 from '../../resources/skillIcons/49.svg';
// import skill50 from '../../resources/skillIcons/50.svg';
// import skill51 from '../../resources/skillIcons/51.svg';
// import skill52 from '../../resources/skillIcons/52.webp';
// import skill53 from '../../resources/skillIcons/30.svg';
// import skill54 from '../../resources/skillIcons/54.svg';
// import skill55 from '../../resources/skillIcons/55.svg';
// import skill56 from '../../resources/skillIcons/56.svg';
// import skill57 from '../../resources/skillIcons/57.svg';
// import skill58 from '../../resources/skillIcons/58.svg';
// import skill59 from '../../resources/skillIcons/59.webp';
// import skill60 from '../../resources/skillIcons/60.svg';
// import skill61 from '../../resources/skillIcons/61.svg';
// import skill62 from '../../resources/skillIcons/62.svg';
// import skill63 from '../../resources/skillIcons/63.svg';
// import skill64 from '../../resources/skillIcons/26.svg';
// import skill65 from '../../resources/skillIcons/65.svg';
// import skill66 from '../../resources/skillIcons/66.svg';
// import skill67 from '../../resources/skillIcons/67.svg';
// import skill68 from '../../resources/skillIcons/68.svg';
// import skill69 from '../../resources/skillIcons/69.svg';

const sortSkills = (arr: any[]) => {
  return arr.sort((a, b) => a.names[0].localeCompare(b.name));
};

const AllSkills = sortSkills([
  { id: 0, icon: 'skill0', names: ['DUMMY'] },
  { id: 1, icon: 'skill1', names: ['HTML'] },
  { id: 2, icon: 'skill2', names: ['CSS'] },
  { id: 3, icon: 'skill3', names: ['JavaScript'] },
  { id: 4, icon: 'skill4', names: ['Git'] },
  { id: 5, icon: 'skill5', names: ['GitHub'] },
  { id: 6, icon: 'skill6', names: ['GitLab'] },
  { id: 7, icon: 'skill7', names: ['Bitbucket'] },
  { id: 8, icon: 'skill8', names: ['npm'] },
  { id: 9, icon: 'skill9', names: ['yarn'] },
  { id: 10, icon: 'skill10', names: ['BEM'] },
  { id: 11, icon: 'skill11', names: ['OOCSS'] },
  { id: 12, icon: 'skill12', names: ['SMACSS'] },
  { id: 13, icon: 'skill13', names: ['Sass'] },
  { id: 14, icon: 'skill14', names: ['PostCSS'] },
  { id: 15, icon: 'skill15', names: ['Less'] },
  { id: 16, icon: 'skill16', names: ['npm scripts'] },
  { id: 17, icon: 'skill17', names: ['Webpack'] },
  { id: 18, icon: 'skill18', names: ['esbuild'] },
  { id: 19, icon: 'skill19', names: ['Rollup'] },
  { id: 20, icon: 'skill20', names: ['Parcel'] },
  { id: 21, icon: 'skill21', names: ['Vite'] },
  { id: 22, icon: 'skill22', names: ['Styled Components'] },
  { id: 23, icon: 'skill23', names: ['CSS Modules'] },
  { id: 24, icon: 'skill24', names: ['Styled JSX'] },
  { id: 25, icon: 'skill25', names: ['Emotion'] },
  { id: 26, icon: 'skill26', names: ['React'] },
  { id: 27, icon: 'skill27', names: ['Redux'] },
  { id: 28, icon: 'skill28', names: ['MobX'] },
  { id: 29, icon: 'skill29', names: ['Recoil'] },
  { id: 30, icon: 'skill30', names: ['Angular'] },
  { id: 31, icon: 'skill31', names: ['RxJS'] },
  { id: 32, icon: 'skill32', names: ['NgRx'] },
  { id: 33, icon: 'skill33', names: ['Vue.js'] },
  { id: 34, icon: 'skill34', names: ['VueX'] },
  { id: 35, icon: 'skill35', names: ['Bootstrap'] },
  { id: 36, icon: 'skill36', names: ['Bulma'] },
  { id: 37, icon: 'skill37', names: ['Tailwind CSS'] },
  { id: 38, icon: 'skill38', names: ['Chakra UI'] },
  { id: 39, icon: 'skill39', names: ['Material UI'] },
  { id: 40, icon: 'skill40', names: ['Radix UI'] },
  { id: 41, icon: 'skill41', names: ['Jest'] },
  { id: 42, icon: 'skill42', names: ['react-testing-library'] },
  { id: 43, icon: 'skill43', names: ['Cypress'] },
  { id: 44, icon: 'skill44', names: ['Enzyme'] },
  { id: 45, icon: 'skill45', names: ['Mocha'] },
  { id: 46, icon: 'skill46', names: ['Chai'] },
  { id: 47, icon: 'skill47', names: ['Ava'] },
  { id: 48, icon: 'skill48', names: ['Jasmine'] },
  { id: 49, icon: 'skill49', names: ['TypeScript'] },
  { id: 50, icon: 'skill50', names: ['Flow'] },
  { id: 51, icon: 'skill51', names: ['Next.js'] },
  { id: 52, icon: 'skill52', names: ['After.js'] },
  { id: 53, icon: 'skill53', names: ['Universal'] },
  { id: 54, icon: 'skill54', names: ['Nuxt.js'] },
  { id: 55, icon: 'skill55', names: ['GraphQL'] },
  { id: 56, icon: 'skill56', names: ['Apollo'] },
  { id: 57, icon: 'skill57', names: ['Relay Modern'] },
  { id: 58, icon: 'skill58', names: ['GatsbyJS'] },
  { id: 59, icon: 'skill59', names: ['Vuepress'] },
  { id: 60, icon: 'skill60', names: ['Jekyll'] },
  { id: 61, icon: 'skill61', names: ['Hugo'] },
  { id: 62, icon: 'skill62', names: ['Gridsome'] },
  { id: 63, icon: 'skill63', names: ['Eleventy'] },
  { id: 64, icon: 'skill64', names: ['React Native'] },
  { id: 65, icon: 'skill65', names: ['NativeScript'] },
  { id: 66, icon: 'skill66', names: ['Flutter'] },
  { id: 67, icon: 'skill67', names: ['Ionic'] },
  { id: 68, icon: 'skill68', names: ['Electron'] },
  { id: 69, icon: 'skill69', names: ['Proton Native'] },
]);

//TODO error handling

// const getAllSkillsData = async () => {
//   const response = await axios.get(
//     'https://web-dev-skills-api.herokuapp.com/v1/skills'
//   );
//   return response.data;
// };

// const AllSkillsData: skillInterface[] = await getAllSkillsData();

// AllSkillsData.forEach((el: { names: any[] }) => {
//   console.log(el.names[0], el.description);
// });

// const getAllSkillsData = async () => {
//   const response = await axios.get(
//     'https://web-dev-skills-api.herokuapp.com/v1/skills'
//   );
//   return response.data;
// };

// const AllSkillsData: skillInterface[] = await getAllSkillsData();

// export default AllSkills;
