import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <> <Home/> <Footer/> </> 
  },
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
