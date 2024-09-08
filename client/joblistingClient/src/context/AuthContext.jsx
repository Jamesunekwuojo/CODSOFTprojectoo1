import {useReducer, createContext, useEffect} from 'react';
import { authReducer } from './authReducer.jsx';
import PropTypes from 'prop-types'

export const AuthContext = createContext();


export const AuthContextProvider =  ({children}) => {
    const [state, dispatch] = useReducer(authReducer,{
        user:null
    })

    useEffect(()=>{

        const user = localStorage.getItem('token')

        if (user) {
            dispatch({type:'SIGNIN', payload:user})
        }

    }, [])

    console.log("AuthContext state:", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>{children}</AuthContext.Provider>
    )
}


AuthContextProvider.propTypes = {
    children:PropTypes.node.isRequired, // validating children prop

}

