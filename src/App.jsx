import { useState, Fragment } from 'react';
import './App.css';
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
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
  const [whichSelected, setWhichSelected] = useState(null);
  const [renderSection, setRenderSection] = useState(false);
  const [user] = useAuthState(auth);

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
          {user ? <SignOut></SignOut> : <SignIn></SignIn>}

          {whichSelected === 0 && renderSection ? <CharacterCreator /> : ''}
          {whichSelected === 1 && renderSection ? <AboutMe /> : ''}
          {whichSelected === 2 && renderSection ? <FutureChar /> : ''}
        </main>
      </SelectedContext.Provider>
      <Footer></Footer>
    </Fragment>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default App;
