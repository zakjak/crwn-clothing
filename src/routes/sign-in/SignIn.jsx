import React, { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { 
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase'

import SignUpForm from '../../components/sign-up/Sign-up'

const SignIn = () => {
  useEffect(() => {
    getRedirectResult(auth)
    .then(response => {
      if(response){
        createUserDocumentFromAuth(response.user)
      }
    })
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn