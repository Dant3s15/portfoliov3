import { useState, Fragment, useEffect } from 'react';
//TODO remove?
import './App.css';
import SelectedContext from './context/selected-context';
import Header from './components/Sections/Header/Header';
import Hero from './components/Sections/Hero/Hero';
import AboutMe from './components/Sections/AboutMe/AboutMe';
import CharacterCreator from './components/Sections/CharacterCreator/CharacterCreator';
import Footer from './components/Sections/Footer/Footer';
import FutureChar from './components/Sections/FutureChar';
// import axios from 'axios';
//FIREBASE
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { skillInterface } from './Types/types';

const firebaseConfig = {
  apiKey: 'AIzaSyA4Biu3C9D3pJF7f3cOgNfMYG4OtewhwNY',
  authDomain: 'portfolio-27cdd.firebaseapp.com',
  databaseURL:
    'https://portfolio-27cdd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'portfolio-27cdd',
  storageBucket: 'portfolio-27cdd.appspot.com',
  messagingSenderId: '156569045681',
  appId: '1:156569045681:web:7e9b36b440d0a31ac3f090',
  measurementId: 'G-B13VR57PZH',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();

function App() {
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState(1);
  // const [renderSection, setRenderSection] = useState(false);
  const [ctaButtonClicked, setCtaButtonClicked] = useState({ clicked: false });
  const [user] = useAuthState(auth);
  const [allSkillsData, setAllSkillsData] = useState<skillInterface[]>([]);

  useEffect(() => {
    const getAllSkillsData = async () => {
      await fetch('https://web-dev-skills-api.herokuapp.com/v1/skills')
        .then(data => data.json())
        .then(data => setAllSkillsData(data))
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('ERR', error.message);
          }
        });
      // setAllSkillsData(response.data);
      // return response.data;
    };
    setTimeout(() => {
      getAllSkillsData();
    }, 3000);
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <Fragment>
      <SelectedContext.Provider
        value={{
          isSelected: selected,
          setSelected,
          whichIsSelected: whichSelected,
          setWhichSelected,
          // renderSection,
          // setRenderSection,
          ctaButtonClicked,
          setCtaButtonClicked,
        }}
      >
        <Header
          data={{
            google: {
              user,
              auth,
              signInWithGoogle,
            },
          }}
        ></Header>

        <main>
          <Hero allSkillsData={allSkillsData}></Hero>
          {/* {user ? <SignOut user={user}></SignOut> : <SignIn></SignIn>} */}
          {whichSelected === 0 && selected ? (
            <CharacterCreator allSkillsData={allSkillsData} />
          ) : (
            ''
          )}
          {whichSelected === 1 && selected ? (
            <AboutMe allSkillsData={allSkillsData} />
          ) : (
            ''
          )}
          {whichSelected === 2 && selected ? <FutureChar /> : ''}
        </main>
      </SelectedContext.Provider>
      <Footer></Footer>
    </Fragment>
  );
}

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   return <button onClick={signInWithGoogle}>Sign in with Google</button>;
// }

// function SignOut(props) {
//   return (
//     auth.currentUser && (
//       <button onClick={() => auth.signOut()}>
//         {` Sign Out, hello ${props.user.displayName}`}
//       </button>
//     )
//   );
// }

export default App;
