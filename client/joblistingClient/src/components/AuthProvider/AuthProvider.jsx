import {useState, useContext, createContext} from 'react';

// To create a context
const AuthContext = createContext();

//Auth provider component
export const AuthProvider = ({children}) =>{
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

    const signin = (token) => {
        localStorage.setItem('token', token);
        setIsAuth(true);
    }

    const 
}