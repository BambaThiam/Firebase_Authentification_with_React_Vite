import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'
import Home from './Routes/Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import Protected from './Routes/Protected'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
  ])
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
