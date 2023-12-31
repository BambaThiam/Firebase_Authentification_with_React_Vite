// import { app } from '@/firebase/init_Firebase'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // Signed in
      // Success...
      console.log(user)
      //...
      // ...
    })
    .catch((error) => {
      //   const errorCode = error.code
      //   const errorMessage = error.message
      // Error
      console.log(error)
    })
  const handleSignUp = async (e) => {
    e.preventDefault()
    alert('Email: ' + email + 'Password: ' + password)
  }
  return (
    <div>
      <h1>This is the sign up page</h1>
      <form action="#">
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="pass"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="container-buttons">
          <button type="submit" onClick={(e) => handleSignUp(e)}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
