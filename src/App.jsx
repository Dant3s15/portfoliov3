import { useState, Fragment } from 'react';
import './App.css';
import SelectedContext from './context/selected-context';
import Header from './components/Sections/Header/Header';
import Hero from './components/Sections/Hero/Hero';
import AboutMe from './components/Sections/AboutMe/AboutMe';
import CharacterCreator from './components/Sections/CharacterCreator/CharacterCreator';
import Footer from './components/Sections/Footer/Footer';
import FutureChar from './components/Sections/FutureChar';

function App() {
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState(null);
  const [renderSection, setRenderSection] = useState(false);

  return (
    <Fragment>
      <SelectedContext.Provider
        value={{
          isSelected: selected,
          setSelected,
          whichIsSelected: whichSelected,
          setWhichSelected,
          renderSection,
          setRenderSection,
        }}
      >
        <Header></Header>
        <main>
          <Hero></Hero>
          {whichSelected === 0 && renderSection ? <CharacterCreator /> : ''}
          {whichSelected === 1 && renderSection ? <AboutMe /> : ''}
          {whichSelected === 2 && renderSection ? <FutureChar /> : ''}
        </main>
      </SelectedContext.Provider>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
