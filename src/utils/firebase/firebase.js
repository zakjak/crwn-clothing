import { initializeApp } from 'firebase/app'
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider ,
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
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = await doc(db, 'users', userAuth.uid)
  
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const { email, displayName } = userAuth
    const createdAt = new Date()
    try{
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt
      })
    }catch(err){
      console.log('user did not create', err.message)
    }
  }

  return userDocRef
}