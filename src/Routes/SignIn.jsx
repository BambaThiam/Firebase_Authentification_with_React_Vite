import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth()
  const navigate = useNavigate()

  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // Success...
      console.log(user)
      navigate('/')
      //...
    })
    .catch((error) => {
      // Error
      console.log(error)
    })
  const handleSignIn = async (e) => {
    e.preventDefault()
    alert('Email: ' + email + 'Password: ' + password)
  }
  return (
    <div>
      <h1>This is the sign in page</h1>
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
          <button type="submit" onClick={(e) => handleSignIn(e)}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
export default SignIn
