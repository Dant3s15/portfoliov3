import lightappDesktop from "../resources/img/projects/lightapp/lightapp_desktop.jpg";
import lightappMobile from "../resources/img/projects/lightapp/lightapp_mobile.jpg";
import splitterDesktop from "../resources/img/projects/splitter/splitter_desktop.jpg";
import splitterMobile from "../resources/img/projects/splitter/splitter_mobile.jpg";

const projectsData = [
  {
    id: 0,
    title: "Light App",
    img: {
      desktop: lightappDesktop,
      mobile: lightappMobile,
    },
    github: "https://github.com/DevmianS/LightApp",
    live: "https://lightapp.netlify.app/",
    description:
      "Responsive web app for getting the best suited light bulb luminocity depending on the lamp and room types.",
    stack: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        name: "Sass",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        name: "Tailwind CSS",
      },
    ],
  },
  {
    id: 1,
    title: "Splitter",
    img: {
      desktop: splitterDesktop,
      mobile: splitterMobile,
    },
    github: "https://github.com/DevmianS/tip-calculator-react",
    live: "https://devmian-tip-calculator.web.app/",
    description:
      "Mobile first,responsive tip calculator app. You can calculate the tip by specifying bill amount, number of people and percent you want to tip.",
    stack: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        name: "Sass",
      },
    ],
  },
  {
    id: 2,
    title: "Splitter2",
    img: {
      desktop: splitterDesktop,
      mobile: splitterMobile,
    },
    github: "https://github.com/DevmianS/LightApp",
    live: "https://lightapp.netlify.app/",
    description:
      "Mobile first,responsive tip calculator app. You can calculate the tip by specifying bill amount, number of people and percent you want to tip.",
    stack: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        name: "Sass",
      },
    ],
  },
];

export default projectsData;
