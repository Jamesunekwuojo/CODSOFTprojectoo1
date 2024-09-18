import { useState } from 'react';
import { useAuthContext } from './useAuthContext.jsx';
import Axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false); // Start with `false`
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signinUser = async (formData) => {
    setIsLoading(true); // Set loading to true at the start
    
    try {
      const response = await Axios.post("http://localhost:5000/api/signin", formData);

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Update auth context (Assuming this is the correct way to handle auth)
      dispatch({ type: "SIGNIN", payload: response.data });

      
      // Navigate based on the user's role
      const role = response.data.user.role.toLowerCase(); // Convert role to lowercase

      if (role === "employer") {
        navigate("/employer-dashboard");
      } else if (role === "candidate") {
        navigate("/candidate-dashboard");
      } else {
        console.error("Invalid role received:", role);
      }

      // Success message
      Swal.fire({
        title: "Successfully signed in",
        text: response.data.message,
        icon: 'success',
        timer: 2000,
        confirmButtonText: 'OK'
      });

    } catch (error) {
      // Handle the error response
      if (error.response) {
        Swal.fire({
          title: "Error signing in",
          text: error.response.data.error,  // Corrected the typo
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to connect to server...Please try again',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }

    } finally {
      setIsLoading(false); // Ensure loading state is reset at the end
    }
  };

  return { signinUser, isLoading };
};
