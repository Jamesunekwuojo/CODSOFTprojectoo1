import { useState } from "react";

// built in react components imports  and bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// custom  components imports
import Mainnav from "./components/Mainnav/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Employerdashboard from "./pages/Employerdashboard.jsx";
import Signupage from "./pages/Signupage.jsx";
import Signinpage from "./pages/Signinpage.jsx";
import Candidatedashboard from "./pages/Candidatedashboard.jsx";
import JobPostpage from "./pages/JobPostpage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CompleteProfile from "./components/CompleteProfile/CompleteProfile.jsx";
import EmployApply from "./components/EmployApply/EmployApply.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";


// custom App css import
import "./App.css";

function App() {
  

  return (
    <Router>
      <Mainnav />
      <ToastContainer/>
        <Routes>
          {/* Main routes at the navbar*/}
          <Route path="/" element={<Homepage />} />

          <Route
            path="/signup"
            element={ <Signupage /> }
          />

          <Route
            path="/signin"
            element={ <Signinpage /> }
          />

          <Route path="/about" element={<AboutUs />} />

          <Route
            path="/post-job"
            element={
                <JobPostpage />
            }
          />

          {/*Elementary routes, embedded pages  routes*/}
          <Route path="/completeprofile" element={<CompleteProfile />} />

          <Route path="/candidate-dashboard" element={<Candidatedashboard />} />

          <Route path="/employer-dashboard/*" element={<Employerdashboard />} />

          <Route path="/employ-apply" element={<EmployApply />} />


          {/* privateRoute */}

        </Routes>
      {/* </ToastContainer> */}

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

// export default function Root() {
//   return (
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   );
// }
