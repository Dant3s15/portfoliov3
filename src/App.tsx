import React, { Suspense, useState, Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { ShepherdTour } from "react-shepherd";
import { skillInterface } from "./Types/types";

import Header from "./components/Sections/Header/Header";
import Hero from "./components/Sections/Hero/Hero";
const ContactMe = React.lazy(
  () => import("./components/Sections/ContactMe/ContactMe")
);
const CharacterCreator = React.lazy(
  () => import("./components/Sections/CharacterCreator/CharacterCreator")
);
import Footer from "./components/Sections/Footer/Footer";

import SelectedContext from "./context/selected-context";
import { HeroVisibleProvider } from "./context/hero-visible-context";

import LoadingSpinner from "./components/UI/LoadingSpinner";
// import tourSteps from "./components/Utils/ShepherdTour/tourSteps";
import SkillsSection from "./components/Sections/SkillsSection/SkillsSection";
import Main from "./components/Sections/Main/Main";
import Hexgrid from "./components/UI/Hexgrid/Hexgrid";
import Projects from "./components/Sections/Projects/Projects";
import ParallaxBackground from "./components/Utils/ParallaxBackground/ParallaxBackground";
// import background from "./resources/img/hero8.webp";
import AboutMe from "./components/Sections/AboutMe/AboutMe";

// const tourOptions = {
//   defaultStepOptions: {
//     cancelIcon: {
//       enabled: true,
//     },
//     classes: "max-index shepherd-window",
//   },
//   useModalOverlay: true,
// };

function App() {
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState(1);
  const [ctaButtonClicked, setCtaButtonClicked] = useState({ clicked: false });
  const [allSkillsData, setAllSkillsData] = useState<skillInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllSkillsData = async () => {
      const response = await fetch(
        "https://web-dev-skills-api.herokuapp.com/v1/skills"
      );

      if (!response.ok) {
        throw new Error("Could not get Skills data");
      }
      const responseData = await response.json();
      setIsLoading(false);
      console.log("Loaded skills");
      setAllSkillsData(responseData.skills);
    };
    getAllSkillsData();
  }, []);

  return (
    <Fragment>
      {/* <ShepherdTour steps={tourSteps} tourOptions={tourOptions}> */}
      {/* <SelectedContext.Provider
        value={{
          isSelected: selected,
          setSelected,
          whichIsSelected: whichSelected,
          setWhichSelected,
          ctaButtonClicked,
          setCtaButtonClicked,
        }}
      > */}
      {/* <HeroVisibleProvider> */}
      <Header />

      {/* <Parallax pages={4}> */}
      <Main>
        <ParallaxBackground>
          {/* <ParallaxLayer
            speed={0.4}
            factor={2}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "contain",
              backgroundPosition: "center bottom",
            }}
          > */}
          <Hero></Hero>
          {/* </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.1}> */}
          <Projects allSkillsData={allSkillsData} isLoading={false}></Projects>
          {/* </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}> */}
          <SkillsSection></SkillsSection>
          <AboutMe isLoading={false}></AboutMe>
          <ContactMe></ContactMe>
        </ParallaxBackground>
        {/* </ParallaxLayer> */}
      </Main>

      {/* <main> */}
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      {/* <Routes location={location} key={location.pathname}> */}
      {/* <Route
                  path="/creator"
                  element={
                    <CharacterCreator
                    allSkillsData={allSkillsData}
                    isLoading={isLoading}
                    />
                  }
                ></Route> */}
      {/* <Route
                  path="about-me"
                  element={
                    <AboutMe
                      allSkillsData={allSkillsData}
                      isLoading={isLoading}
                      />
                    }
                  ></Route> */}
      {/* </Routes> */}
      {/* </Suspense> */}
      {/* </main> */}
      {/* </HeroVisibleProvider> */}
      {/* <ParallaxLayer offset={3}> */}
      <Footer data={{ ctaButtonClicked, whichSelected, selected }}></Footer>
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
      {/* </SelectedContext.Provider> */}
      {/* </ShepherdTour> */}
    </Fragment>
  );
}

export default App;
