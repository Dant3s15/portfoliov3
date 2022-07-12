const tourSteps = [
  {
    attachTo: { element: "#tourStart", on: "auto" as const },
    id: "intro",
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve(true);
        }, 500);
      });
    },
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Hey!",
    text: ["I'm Damian.<br/> Frontend Web Developer from Poland. "],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
    buttons: [
      {
        classes: "max-index button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "max-index button-primary",
        text: "Next",
        type: "next",
      },
    ],
  },
  {
    id: "2nd",
    attachTo: { element: "#tourStart", on: "auto" as const },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve(true);
        }, 500);
      });
    },

    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Welcome!",
    text: [
      "This my Portfolio Website.<br/>First time here?<br/> Let me give You a tour! 😄",
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
    buttons: [
      {
        classes: "max-index button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "max-index button-primary",
        text: "Next",
        type: "next",
      },
    ],
  },
  {
    id: "tourSkills",
    attachTo: { element: "#tourSkills", on: "auto" as const },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve(true);
        }, 500);
      });
    },
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "The Skills",
    text: [
      "Those are the skills that I've learned so far. <br/>And the list is still growing!<br/>Feel free to click on them to get more info!",
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
    buttons: [
      {
        classes: "max-index button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "max-index button-primary",
        text: "Next",
        type: "next",
      },
    ],
  },
  {
    id: "tourLevelMeUp",
    attachTo: { element: "#tourStart", on: "auto" as const },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve(true);
        }, 500);
      });
    },
    useModalOverlay: false,
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Want to know more?",
    text: ["Click on Me and LEVEL ME UP! 😄"],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
    buttons: [
      {
        classes: "max-index button-primary",
        text: "Back",
        type: "back",
      },
    ],
  },
  {
    id: "tourButton",
    attachTo: { element: "#tourButton", on: "auto" as const },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve(true);
        }, 500);
      });
    },
    useModalOverlay: false,
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: " ",
    text: ["Push The Button!"],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
    buttons: [
      {
        classes: "max-index button-primary",
        text: "Back",
        type: "back",
      },
    ],
  },
];
export default tourSteps;
