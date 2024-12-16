import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const PrivateRoute = ({children}) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      Swal.fire({
        title: "Sign in to continue",
        text: "You need to be signed in to access this page.",
        icon: "warning",
        confirmButtonText: "Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          setShouldRedirect(true);  // Trigger the redirection
        }
      });
    }
  }, [userInfo]);

  if (shouldRedirect) {
    return <Navigate to="/signin" replace />;
  } else {
    return userInfo ? children : null;

  }

  // If user is authenticated, render the requested page

};

export default PrivateRoute;
