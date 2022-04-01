import { useState, Fragment, useEffect } from 'react';
import './App.css';
import SelectedContext from './context/selected-context';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero/Hero';
// import SkillsList from './components/Skills/Skills';
// import Characters from './components/Characters/Characters';
import AboutMe from './components/Sections/AboutMe';
import CharacterCreator from './components/Sections/CharacterCreator/CharacterCreator';

function App() {
  // const [charState, setCharState] = useState({
  //   leftChar: 0,
  //   frontChar: 1,
  //   rightChar: 2,
  // });
  // const charStateDataHandler = data => {
  //   setCharState(data);
  //   return charState;
  // };
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState(null);

  useEffect(() => {
    console.log(whichSelected, 'tss');
  }, [whichSelected]);

  return (
    <SelectedContext.Provider
      value={{
        isSelected: selected,
        setSelected,
        whichIsSelected: whichSelected,
        setWhichSelected,
      }}
    >
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
      {whichSelected === 1 ? <AboutMe /> : ''}
      {whichSelected === 0 ? <CharacterCreator /> : ''}
    </SelectedContext.Provider>
  );
}

export default App;
