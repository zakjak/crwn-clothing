import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase'


const SignIn = () => {
  const logGoogleUser = async() => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn