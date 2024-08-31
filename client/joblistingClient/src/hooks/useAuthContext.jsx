import { AuthContext } from "../context/AuthContext/AuthProvider";

import {useContext} from 'react';

export const useAuth = () =>{
    return useContext(AuthContext);
};