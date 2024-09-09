import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Mainnav from "./components/Mainnav/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Employerdashboard from "./pages/Employerdashboard.jsx";
import Signupage from "./pages/Signupage.jsx";
import Signinpage from "./pages/Signinpage.jsx";
import Candidatedashboard from "./pages/Candidatedashboard.jsx";
import JobPostpage from "./pages/JobPostpage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import CompleteProfile from "./components/CompleteProfile/CompleteProfile.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";


import "./App.css";

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Mainnav />
      <Routes>
        <Route path="/" element={ <Homepage />  } />
        <Route path="/signup" element={!user ? <Signupage /> : <Navigate to="/" />} />
        <Route path="/signin" element={!user ? <Signinpage /> : <Navigate to="/" />} />
        <Route path="/completeprofile" element={user ?<CompleteProfile /> : <Navigate to ="/signin"/>} />
        <Route path="/candidate-dashboard" element={<Candidatedashboard />} />
        <Route
          path="/post-job"
          element={
            <ProtectedRoute>
              <JobPostpage />
            </ProtectedRoute>
          }
        />
        <Route path="/employer-dashboard/*" element={<Employerdashboard />} />
      </Routes>
      <Footer />
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
