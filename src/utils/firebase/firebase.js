import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDO_ljiilu1_Q3TttezEFbihDk7xZX_ds0",
  authDomain: "crwn-clothing-a26d7.firebaseapp.com",
  projectId: "crwn-clothing-a26d7",
  storageBucket: "crwn-clothing-a26d7.appspot.com",
  messagingSenderId: "275858028479",
  appId: "1:275858028479:web:cc14bc74936d13d4ba930a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) =>{
  if(!userAuth) return 

  const userDocRef = await doc(db, 'users', userAuth.uid)
  
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const { email, displayName } = userAuth
    const createdAt = new Date()
    try{
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformation
      })
    }catch(err){
      console.log('user did not create', err.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)