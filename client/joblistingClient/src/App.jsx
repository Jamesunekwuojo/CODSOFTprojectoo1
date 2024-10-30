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
import Jobpage from "./pages/Jobpage.jsx";
import Blogpage from "./pages/Blogpage.jsx";
import Addblogpage from "./pages/Addblogpage.jsx";
import AllJobPage from "./components/AllJobCard/AlljobCard.jsx";
import EmployerSidebar from "./components/EmployerSidebar/EmployerSidebar.jsx";
import CandidateSidebar from "./components/CandidateSidebar/CandidateSidebar.jsx";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

// import AllBlog from "./components/AllBlog/AllBlog.jsx";


// custom App css import
import "./App.css";

function App() {
  return (
    <Router>
      <Mainnav />
      <ToastContainer />
      <Routes>
        {/* Main routes at the navbar*/}
        <Route path="/" element={<Homepage />} />

        <Route path="/signup" element={<Signupage />} />

        <Route path="/signin" element={<Signinpage />} />

        <Route path="/about" element={<AboutUs />} />

        <Route
          path="/post-job"
          element={
            <PrivateRoute>
              <JobPostpage />
            </PrivateRoute>
          }
        />

        <Route path="/browse-job" element={<AllJobPage />} />

        {/*Elementary routes, embedded pages  routes*/}
        <Route path="/completeprofile" element={<CompleteProfile />} />


        {/* Candidate Routes */}
        <Route path="/candidate-dashboard" element={<CandidateSidebar />}>
         

          <Route path="alljob" element={<AllJobPage />} /> 
        </Route>

        <Route
          path="/employer-dashboard"
          element={
            <PrivateRoute>
              <EmployerSidebar />
            </PrivateRoute>
          }
        >
          <Route path="jobs" element={<Jobpage />} />
          <Route path="addJobs" element={<JobPostpage />} />
          <Route path="blogs" element={<Blogpage />} />
          <Route path="addBlogs" element={<Addblogpage />} />
        </Route>

      
      </Routes>
      {/* </ToastContainer> */}

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

