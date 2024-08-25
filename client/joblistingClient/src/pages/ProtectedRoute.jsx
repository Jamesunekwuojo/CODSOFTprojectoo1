// src/pages/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace with your actual authentication check

  if(isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
