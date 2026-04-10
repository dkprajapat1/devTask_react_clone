import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Page1 from './components/Page1'
import Login from './components/Login'
import Create from './components/Create'
import Setting from './components/Setting'
import './App.css'
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Page1/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/create',
      element:<Create/>
    },
    {
      path:'/setting',
      element:<Setting/>
    }
  ])
  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
