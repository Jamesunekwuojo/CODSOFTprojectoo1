import { useState, createContext } from "react";
import PropTypes  from 'prop-types'

// create context
const AuthContext = createContext();


export { AuthContext };

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
        <AuthContext.Provider value={{isAuthenticated, signin, signout}}>{children}</AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}