import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter  as Router, Route, Routes,   } from 'react-router-dom'; // Import BrowserRouter and Route
import Mainnav from "./components/Mainnav/Navbar.jsx";
import Homepage from './pages/Homepage.jsx';
import Employerdashboard from './pages/Employerdashboard.jsx';
import Signupage from './pages/Signupage.jsx'
import Signinpage from './pages/Signinpage.jsx';
import Candidatedashboard from './pages/Candidatedashboard.jsx';
import JobPostpage from './pages/JobPostpage.jsx';
import Footer from "./components/Footer/Footer.jsx";
import ProtectedRoute from './pages/ProtectedRoute.jsx';

import { AuthProvider } from './context/AuthContext/AuthProvider.jsx';

import ProtectedRoute2 from './components/ProtectedRoute2/ProtectedRoute2.jsx';

import 

import './App.css';






function App() {

 
  return (
    <Router> {/* Wrap my components with the Router component */}
      <div>
        <Mainnav />
        
        <Routes>
          <Route path="/"  element={<Homepage/>}/>

          <Route path="/signup"  element={<Signupage/>}/>

          <Route path="/signin"  element={<Signinpage/>}/>
          
          <Route path="/candidate-dashboard"  element={<Candidatedashboard/>}/>

          <Route path="/post-job" element={<ProtectedRoute>
            <JobPostpage/>
          </ProtectedRoute>}/>
        


          {/* TESTING ROUTES */}
          <Route path="/employer-dashboard/*" element={<Employerdashboard/>}/>

        



        </Routes>
      
        <Footer></Footer>
        
       
      </div>
    </Router>
  );
}

export default App;
