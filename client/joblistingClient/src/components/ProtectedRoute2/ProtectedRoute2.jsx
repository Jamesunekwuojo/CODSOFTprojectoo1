
import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuthContext";

const ProtectedRoute2 = ({children}) => {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/signin"/>
    }
    return children;
}

export