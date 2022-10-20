import lightappDesktop from "../resources/img/projects/lightapp/lightapp_desktop.webp";
import lightappMobile from "../resources/img/projects/lightapp/lightapp_mobile.webp";
import splitterDesktop from "../resources/img/projects/splitter/splitter_desktop.webp";
import splitterMobile from "../resources/img/projects/splitter/splitter_mobile.webp";
import devjobsDesktop from "../resources/img/projects/devjobs/devjobs_desktop.webp";
import devjobsMobile from "../resources/img/projects/devjobs/devjobs_mobile.webp";

const projectsData = [
  {
    id: 0,
    featured: true,
    title: "DevJobs",
    img: {
      desktop: devjobsDesktop,
      mobile: devjobsMobile,
    },
    github: "https://github.com/CodeReactOrNext/Devjobs_web_app",
    live: "https://devjobs-web-app-livid.vercel.app/",
    description:
      "Mobile first, responsive developer jobs board app with dark mode toggle. Created as a team effort using Jira and Agile methodology to test our teamwork skills. ",
    stack: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        img: "https://cdn.worldvectorlogo.com/logos/styled-components-1.svg",
        name: "Styled Components",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
      },
    ],
  },
  {
    id: 1,
    featured: true,
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
    id: 2,
    featured: true,
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
    id: 3,
    featured: false,
    img: {
      desktop: splitterDesktop,
      mobile: splitterMobile,
    },
    title: "Portfolio",
    github: "https://github.com/DevmianS/portfoliov3",
    live: "https://damiansobieraj.com/",
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
