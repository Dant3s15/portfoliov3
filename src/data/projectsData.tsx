import lightappDesktop from "../resources/img/projects/lightapp/lightapp_desktop.webp";
import lightappMobile from "../resources/img/projects/lightapp/lightapp_mobile.webp";
import splitterDesktop from "../resources/img/projects/splitter/splitter_desktop.webp";
import splitterMobile from "../resources/img/projects/splitter/splitter_mobile.webp";
import devjobsDesktop from "../resources/img/projects/devjobs/devjobs_desktop.webp";
import devjobsMobile from "../resources/img/projects/devjobs/devjobs_mobile.webp";
import portfolioMobile from "../resources/img/projects/portfolio/portfolio_desktop.webp";
import asgbalancerDesktop from "../resources/img/projects/asgbalancer/asgbalancer_desktop.webp";
import cwiczymyRazemDesktop from "../resources/img/projects/cwiczymyRazem/cwiczymyRazem_desktop.webp";
import cwiczymyRazemMobile from "../resources/img/projects/cwiczymyRazem/cwiczymyRazem_mobile.webp";
import shoestoreDesktop from "../resources/img/projects/shoestore/shoestore_desktop.webp";
import shoestoreMobile from "../resources/img/projects/shoestore/shoestore_mobile.webp";

//ICONS
import tanstack from "../resources/icons/skills/tanstack_query.svg";

const projectsData = [
  {
    id: 0,
    featured: true,
    title: "Light App",
    img: {
      desktop: lightappDesktop,
      mobile: lightappMobile,
    },
    github: "https://github.com/DevmianS/LightApp",
    live: "https://lightapp.netlify.app/",
    description:
      "Responsive web app for getting the best suited light bulb luminosity depending on the lamp and room types.",
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
        name: "Tailwind",
      },
    ],
  },
  {
    id: 1,
    featured: true,
    title: "Splitter",
    img: {
      desktop: splitterDesktop,
      mobile: splitterMobile,
    },
    github: "https://github.com/DevmianS/tip-calculator-react",
    live: "https://devmian-tip-calculator.web.app/",
    description:
      "Mobile first,responsive tip calculator app.\nYou can calculate the tip by specifying bill amount, number of people and percent you want to tip.",
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
    featured: false,
    img: {
      desktop: asgbalancerDesktop,
      mobile: asgbalancerDesktop,
    },
    title: "ASG balancer",
    github: "https://github.com/DevmianS/airsoft_team_balancer",
    live: "https://asgteambalancer.netlify.app/",
    description:
      "Mobile first Airsoft team balancer app in style of Counter Strike Global Offensive. \nAdd your list of players and get randomized but balanced teams!",

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
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        name: "Tailwind",
      },
    ],
  },
  {
    id: 3,
    featured: false,
    img: {
      desktop: portfolioMobile,
      mobile: portfolioMobile,
    },
    title: "Portfolio",
    github: "https://github.com/DevmianS/portfoliov3",
    live: "https://damiansobieraj.com/",
    description:
      "My Portfolio website, with information about my projects, my skills and myself. \nDesigned and coded with passion.",

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
    id: 4,
    featured: true,
    title: "DevJobs",
    img: {
      desktop: devjobsDesktop,
      mobile: devjobsMobile,
    },
    github: "https://github.com/CodeReactOrNext/Devjobs_web_app",
    live: "https://devjobs-web-app-livid.vercel.app/",
    description:
      "Mobile first, responsive developer jobs board app with dark mode toggle. \nCreated as a team effort using Jira and Agile methodology to test our teamwork skills. ",
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
    id: 5,
    featured: true,
    title: "Cwiczymy Razem",
    img: {
      desktop: cwiczymyRazemDesktop,
      mobile: cwiczymyRazemMobile,
    },
    github: "https://github.com/CodeReactOrNext/CwiczymyRazem",
    live: "https://cwiczymy-razem.vercel.app/",
    description:
      "A guitar exercise tracker featuring a leaderboard, leveling system, and Figma-designed interface. Record and track progress, compete with others, and earn rewards as you improve your skills.",
    stack: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "NextJS",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        name: "Tailwind",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        name: "TypeScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        name: "Redux",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        name: "Firebase",
      },
    ],
  },
  {
    id: 6,
    featured: true,
    title: "ShoeStore",
    img: {
      desktop: shoestoreDesktop,
      mobile: shoestoreMobile,
    },
    github: "https://github.com/DevmianS/shoe-store-app",
    live: "https://shoe-store-app-devmian.vercel.app",
    description:
      "Responsive shoe store app, created as a final team project in Solvd company course. You can browse products created by different users or you can manage your products.",
    stack: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "NextJS",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React",
      },
      {
        img: tanstack,
        name: "TanStack Query",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        name: "Material UI",
      },
    ],
  },
];

export default projectsData.reverse();
