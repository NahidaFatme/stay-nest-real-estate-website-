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
import Update from './Components/Update.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import EstateDetails from './Components/EstateDetails.jsx';

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
      element: <PrivateRoute><Profile></Profile></PrivateRoute>
    },
    {
      path: "/Update",
      element: <PrivateRoute><Update></Update></PrivateRoute>
    },
    {
      path: '/Estate/:id',
      element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
      loader : () => fetch('/estates.json'),
    },
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
