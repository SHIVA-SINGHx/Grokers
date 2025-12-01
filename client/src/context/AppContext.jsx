import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext(null);

const AppContextProvider = ({children}) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showLogin,
        setShowLogin
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;

