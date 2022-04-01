import { useState, Fragment } from 'react';
import './App.css';
import SelectedContext from './context/selected-context';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero/Hero';
// import SkillsList from './components/Skills/Skills';
// import Characters from './components/Characters/Characters';
import AboutMe from './components/Sections/AboutMe';

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

  return (
    <SelectedContext.Provider
      value={{
        isSelected: selected,
        setSelected: setSelected,
      }}
    >
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
      <AboutMe></AboutMe>
      {/* <Section1></Section1> */}
    </SelectedContext.Provider>
  );
}

export default App;
