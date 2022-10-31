import { Fragment } from "react";
import Header from "./components/Sections/Header/Header";
import Hero from "./components/Sections/Hero/Hero";
import ContactMe from "./components/Sections/ContactMe/ContactMe";
import Footer from "./components/Sections/Footer/Footer";
import SkillsSection from "./components/Sections/SkillsSection/SkillsSection";
import Main from "./components/Sections/Main/Main";
import Projects from "./components/Sections/Projects/Projects";
import BackgroundWrapper from "./components/Utils/BackgroundWrapper/BackgroundWrapper";
import AboutMe from "./components/Sections/AboutMe/AboutMe";

function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <BackgroundWrapper>
          <Hero></Hero>
          <Projects></Projects>
          <SkillsSection></SkillsSection>
          <AboutMe></AboutMe>
          <ContactMe></ContactMe>
        </BackgroundWrapper>
      </Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
