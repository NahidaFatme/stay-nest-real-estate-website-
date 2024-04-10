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
  
 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
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
    }
  ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
