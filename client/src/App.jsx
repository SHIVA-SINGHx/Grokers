import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom';


const App = () => {
  const {isSeller} = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");

  
  return (
    <div>
      {isSellerPath ? null : <Navbar/>}
    </div>
  )
}

export default App
