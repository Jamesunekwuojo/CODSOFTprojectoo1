import { useContext, useState, createContext } from "react";

// create context
const AuthContext = createContext();

// Auth context provider
export const AuthProvider = ({ children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const  signin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true)
    } 

    const signout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, signin, signout}}></AuthContext.Provider>
    )
};