
import SignUpForm from '../../components/sign-up/Sign-up'
import SignInForm from '../../components/sign-in-form/SignInForm'

import './authentication.scss'

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication