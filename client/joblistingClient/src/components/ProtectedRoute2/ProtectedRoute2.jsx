import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthContext";
import PropTypes from "prop-types";

const ProtectedRoute2 = ({ children }) => {
    const { isAuthenticated } = useAuth();
    console.log("isAuthenticated:", isAuthenticated);

    useEffect(() => {
        console.log("Checking auth state...");
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }
    return children;
};

ProtectedRoute2.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute2;
