import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import ProductCart from './components/ProductCart'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products",
    element: <ProductCart/>
  },
  {
    path: "/product/:id",
    element: <ProductDetails/>
  },
  {
    path: "/cart",
    element: <Cart/>
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
