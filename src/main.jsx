import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
 import "./index.css"; 
 import Home from "./Components/Home.jsx"
import Root from './Root.jsx';
import Login from './Components/Login.jsx';
import Registration from './Components/Registration.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import ErrorPage from "./Components/error-page.jsx";
import Profile from './Components/Profile.jsx';

 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  errorElement: <ErrorPage />,
  children: [
    { path: "/",
      element: <Home></Home>
    },
    { path: "/Login",
      element: <Login></Login>
    },
    {
      path: "/Registration",
      element: <Registration></Registration>
    },
    {
      path: "/Profile",
      element: <Profile></Profile>
    }
  ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> 
    </AuthProvider>
  </React.StrictMode>,
)
