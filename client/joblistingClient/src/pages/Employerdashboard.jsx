
import{Container, Row, Col} from "react-bootstrap";
import {Routes, Route} from "react-router-dom"

import EmployerSidebar from "../components/EmployerSidebar.jsx";
import Addblogpage from "./Addblogpage.jsx";
import Blogpage from "./Blogpage"



function Employerdashboard (){
    return(
        <Container fluid>
        <Row>
          <Col md={2}>
            <EmployerSidebar />
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="employerAddblog" element={<Addblogpage/>} />

              <Route path="employerBlog" element={<Blogpage/>} />
           
            </Routes>
          </Col>
        </Row>
      </Container>
    )

}

export default Employerdashboard;
