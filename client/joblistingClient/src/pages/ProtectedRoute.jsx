// src/pages/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace with your actual authentication check
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Warning",
        text: "You must be logged in to post job, sign in to continue ",
        icon: "warning",
        confirmButtonText: "OK"
      }).then(() => {
        navigate('/signin', { replace: true });
      });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null; 
};

export default ProtectedRoute;
