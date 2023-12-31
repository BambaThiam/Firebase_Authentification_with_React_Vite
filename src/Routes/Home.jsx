import { getAuth, signOut } from 'firebase/auth'

const Home = () => {
  const auth = getAuth()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>This is the home page</h1>
      <button onClick={() => handleSignOut()}>Log out</button>
    </div>
  )
}

export default Home
