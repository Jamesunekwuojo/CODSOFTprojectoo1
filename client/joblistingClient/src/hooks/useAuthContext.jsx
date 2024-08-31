import { AuthProvider } from "../context/AuthContext/AuthProvider";

import {useContext} from 'react';

export const useAuth = () =>{
    return useContext(AuthProvider);
};