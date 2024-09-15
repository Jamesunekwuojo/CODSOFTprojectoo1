import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import Swal from "sweetalert2";
import { useState } from "react";
import Axios from "axios";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signupUser = async (FormData) => {
    setIsLoading(true);

    try {
      const response = await Axios.post(
        "http://localhost:5000/api/signup",
        FormData, {
            timeout:5000
        }
      );

      localStorage.setItem("token", response.data.token);

      // Update auth context
      dispatch({ type: "SIGNUP", payload: response.data });

      //navigate based on user's role
      const role = response.data.user.role.toLowerCase(); // convert role to lowercase

      if (role === "employer") {
        navigate("/employer-dashboard");
      } else if (role === "candidate") {
        navigate("/candidate-dashboard");
      } else {
        console.error("Invalid role received");
      }

      // Success message after signup
      Swal.fire({
        title: "",
        text: "Signup successful",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx (e.g., validation errors)
        Swal.fire({
          title: "Error signing up",
          text: error.response.data.error || "An error occurred",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else if (error.request) {
        // The request was made but no response was received
        // This could happen due to network issues, timeout, etc.
        Swal.fire({
          title: "Network Error",
          text: "Server is unreachable or there is a network error. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        Swal.fire({
          title: "Error",
          text: `Error: ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } finally {
        setIsLoading(false)
    }
  };

  return { signupUser, isLoading };
};
