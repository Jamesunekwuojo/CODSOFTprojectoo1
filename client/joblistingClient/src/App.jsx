import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'; // Import BrowserRouter and Route
import Mainnav from "./components/Navbar.jsx";
import Homepage from './pages/Homepage.jsx';
import Employerdashboard from './pages/Employerdashboard.jsx';
import Signupage from './pages/Signupage.jsx'
import Candidatedashboard from './pages/Candidatedashboard.jsx';
import Footer from "./components/Footer.jsx"

// TESTING IMPORTS SOON TO BE REMOVED
import Addblogpage from "./pages/Addblogpage.jsx";
import Layout from "./components/Layout.jsx"



import './App.css';



function App() {
  return (
    <Router> {/* Wrap my components with the Router component */}
      <div>
        <Mainnav />
        <Routes>
          <Route path="/"  element={<Homepage/>}/>
          <Route path="/employer-dashboard"  element={<Layout/>}/>

          <Route path="/signup"  element={<Signupage/>}/>
          
          <Route path="/candidate-dashboard"  element={<Candidatedashboard/>}/>

         
          {/* TESTING ROUTES */}
          

        
        
          

        </Routes>
      
        <Footer></Footer>
        
       
      </div>
    </Router>
  );
}

export default App;
