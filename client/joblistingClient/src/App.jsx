import { useState } from 'react';
import Mainnav from "./components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'; // Import BrowserRouter and Route
import Homepage from './pages/Homepage.jsx';
import Employerdashboard from './pages/Employerdashboard.jsx';
import Signupage from './pages/Signupage.jsx'

import Candidatedashboard from './pages/Candidatedashboard.jsx';



import './App.css';

function App() {
  return (
    <Router> {/* Wrap my components with the Router component */}
      <div>
        <Mainnav />
        <Routes>
          <Route path="/"  element={<Homepage/>}/>
          <Route path="/employer-dashboard"  element={<Employerdashboard/>}/>

          <Route path="/signup"  element={<Signupage/>}/>
          
          <Route path="/candidate-dashboard"  element={<Candidatedashboard/>}/>
          {/* <Route path="/job-details"  element={</>}/>
          <Route path="/job-details"  element={</>}/> */}
          

        </Routes>
         {/* Route for the Homepage */}
          {/* Define routes for other pages here */}
        
       
      </div>
    </Router>
  );
}

export default App;
