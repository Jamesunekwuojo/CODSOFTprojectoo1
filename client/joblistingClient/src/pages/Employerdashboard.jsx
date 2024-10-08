
import{Container, Row, Col} from "react-bootstrap";
import {Routes, Route} from "react-router-dom"

import EmployerSidebar from "../components/EmployerSidebar/EmployerSidebar.jsx";
import Addblogpage from "./Addblogpage.jsx";
import Blogpage from "./Blogpage";
import JobPostpage from "./JobPostpage.jsx";
import Jobpage from "./Jobpage.jsx";

import Signout from "../components/Signout/Signout.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx"



function Employerdashboard (){
    return(
        <Container fluid>
        <Row>
          <Col md={2}> 
            <EmployerSidebar />
          </Col>
          <Col md={10}>
            <Routes>
              
           
            </Routes>
          </Col>
        </Row>
      </Container>
    )

}

export default Employerdashboard;
