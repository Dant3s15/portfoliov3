import { useState, Fragment } from 'react';
import './App.css';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero/Hero';
// import SkillsList from './components/Skills/Skills';
// import Characters from './components/Characters/Characters';
import Section1 from './components/Sections/Section1';

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

  return (
    <Fragment>
      <Header></Header>
      <main>
        <Hero></Hero>
        {/* <Characters onCharStateChange={charStateDataHandler}></Characters> */}
        {/* <SkillsList charStateData={charState}></SkillsList> */}
      </main>

      {/* <Section1></Section1> */}
    </Fragment>
  );
}

export default App;
