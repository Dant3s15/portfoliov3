import { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
// import CharDataContext from './components/context/character-data-context';
import SkillsList from './components/Skills/Skills';
import Characters from './components/Characters/Characters';

function App() {
  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });
  const charStateDataHandler = data => {
    setCharState(data);
    return charState;
  };

  return (
    <Fragment>
      <Characters onCharStateChange={charStateDataHandler}></Characters>
      <SkillsList charStateData={charState}></SkillsList>;
    </Fragment>
  );
}

export default App;
