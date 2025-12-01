import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Navbar from './components/Navbar'
import { useLocation, Outlet } from 'react-router-dom';


const App = () => {
  const {isSeller} = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar/>}
      <Outlet />
    </div>
  )
}

export default App
