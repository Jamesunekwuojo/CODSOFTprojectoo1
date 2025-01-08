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

import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Jobpage from "./pages/Jobpage.jsx";
import Blogpage from "./pages/Blogpage.jsx";
import Addblogpage from "./pages/Addblogpage.jsx";

import AllJobPage from "./pages/AllJobPage.jsx";
import EmployerSidebar from "./components/EmployerSidebar/EmployerSidebar.jsx";
import CandidateSidebar from "./components/CandidateSidebar/CandidateSidebar.jsx";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

import AllBlog from "./components/AllBlog/AllBlog.jsx";

import WelcomeMsg from "./components/WelcomeMsg/WelcomeMsg.jsx";

import ScrollToTop from "./ScrollTop.jsx";

import BlogMain from "./components/BlogMain/BlogMain.jsx";


import JobSearchList from "./components/JobSearchList/JobSearchList.jsx";

import ExploreJob from "./components/ExploreJob/ExploreJob.jsx";

// custom App css import
import "./App.css";

function App() {
  return (
    <Router>
      <Mainnav />
      <ToastContainer />
      <ScrollToTop/>
      <Routes>
        {/* Main routes at the navbar*/}
        <Route path="/" element={<Homepage />} />

        <Route path="/signup" element={<Signupage />} />

        <Route path="/signin" element={<Signinpage />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/blog/:id" element={<BlogMain/>}/>
        
        <Route path="/jobsearch-results" element={<JobSearchList />} />
        {/* <Route path="/jobs/search" element={<JobSearchList/>}/> */}

        <Route path="/explore-category" element={<ExploreJob/>}/>

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
          {/* 
          <Route path="dashboard" element={<WelcomeMsg/>} />  */}

          <Route index element={<WelcomeMsg />} />

          <Route path="alljob" element={<AllJobPage />} />

          <Route path="allblogs" element={<AllBlog />} />
        </Route>

        <Route
          path="/employer-dashboard"
          element={
            <PrivateRoute>
              <EmployerSidebar />
            </PrivateRoute>
          }
        >
          <Route index element={<WelcomeMsg />} />
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
