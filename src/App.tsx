import { useState, Fragment, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import SelectedContext from './context/selected-context';
import Header from './components/Sections/Header/Header';
import Hero from './components/Sections/Hero/Hero';
import AboutMe from './components/Sections/AboutMe/AboutMe';

import CharacterCreator from './components/Sections/CharacterCreator/CharacterCreator';
import Footer from './components/Sections/Footer/Footer';
import FutureChar from './components/Sections/FutureChar';

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
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState(1);
  const [ctaButtonClicked, setCtaButtonClicked] = useState({ clicked: false });
  const [user] = useAuthState(auth);
  const [allSkillsData, setAllSkillsData] = useState<skillInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllSkillsData = async () => {
      const response = await fetch(
        'https://web-dev-skills-api.herokuapp.com/v1/skills'
      );

      if (!response.ok) {
        throw new Error('Could not get Skills data');
      }
      const responseData = await response.json();
      setIsLoading(false);
      console.log('Loaded skills');
      setAllSkillsData(responseData.skills);
    };
    getAllSkillsData();
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
          <Hero allSkillsData={allSkillsData} isLoading={isLoading}></Hero>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/creator'
              element={
                <CharacterCreator
                  allSkillsData={allSkillsData}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              path='about-me'
              element={
                <AboutMe allSkillsData={allSkillsData} isLoading={isLoading} />
              }
            ></Route>
          </Routes>
        </main>
        <Footer data={{ ctaButtonClicked, whichSelected, selected }}></Footer>
      </SelectedContext.Provider>
    </Fragment>
  );
}

export default App;
