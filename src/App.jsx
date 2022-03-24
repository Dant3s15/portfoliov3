import { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
// import CharDataContext from './components/context/character-data-context';
import SkillsList from './components/Skills/Skills';
import Characters from './components/Characters/Characters';

function App() {
  // const [count, setCount] = useState(0);
  const [charState, setCharState] = useState({
    leftChar: 0,
    frontChar: 1,
    rightChar: 2,
  });
  const charStateDataHandler = data => {
    setCharState(data);
    // console.log(charState);
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

// <div className='App'>
//   <header className='App-header'>
//     <img src={logo} className='App-logo' alt='logo' />
//     <p>Hello Vite + React!</p>
//     <p>
//       <button type='button' onClick={() => setCount(count => count + 1)}>
//         count is: {count}
//       </button>
//     </p>
//     <p>
//       Edit <code>App.jsx</code> and save to test HMR updates.
//     </p>
//     <p>
//       <a
//         className='App-link'
//         href='https://reactjs.org'
//         target='_blank'
//         rel='noopener noreferrer'
//       >
//         Learn React
//       </a>
//       {' | '}
//       <a
//         className='App-link'
//         href='https://vitejs.dev/guide/features.html'
//         target='_blank'
//         rel='noopener noreferrer'
//       >
//         Vite Docs
//       </a>
//     </p>
//   </header>
// </div>
