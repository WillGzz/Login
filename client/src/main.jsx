import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { createBrowserRouter, RouterProvider} from  'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "/Signup",
    element: <Signup/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
