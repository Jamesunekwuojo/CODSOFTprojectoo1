import { Container, Row, Col } from 'react-bootstrap';
import Searchdiv from "../components/Searchdiv";

import "../App.css"


function Homepage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Row>
        <Col xs={12} md={8} lg={6}>
        <Searchdiv></Searchdiv>

        </Col>
      </Row>
      {/* <Row className="justify-content-center text-center m-4">
      <Row className="justify-content-center text-center mt-4">
        <Col>
          <h1>+2000 Jobs Available</h1>
          <h2>EXPLORE JOBHUB</h2>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col>
          <Searchdiv />
        </Col>
      </Row>

      </Row> */}
      

      <Row className="mt-5">
        <Col className="d-flex m-4 justify-content-center">
        <h3>Get Started</h3>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        
        <Col className="m-3 d-flex justify-content-center">
          <div className=" d-flex justify content centre box custom-box p-4 border rounded shadow-sm mb-2">
            <h5> Create Account</h5>
            <img/>
          </div>
        </Col>

        <Col className="m-3 d-flex justify-content-center">
          <div className="box custom-box p-4 border rounded shadow-sm ">Box 2
            <h5>Complete Profile</h5>
          
          </div>
          
        </Col>
        
        <Col className="m-3 d-flex justify-content-center">
          <div className="box p-4  custom-box border rounded shadow-sm">Box 3
            <h5>Employ or Apply for Jobs</h5>
          
          </div>
          
        </Col>

       
      </Row>


      <Row>
        <Col className="d-flex justify-content-center">
        <div className="mt-4">
          <h4>Why Choose Us?</h4>
        </div>
        </Col>
      </Row>


      <Row classsName="m-4">
        <Col className="d-flex justify-content-center">

        <div className="m-4">
          <h4>Explore  Categories</h4>
        </div>
        </Col>
      </Row>



      {/* Categories div*/}
      

      <Row className="d-flex justify-content-center">

        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box1</div>
        
        </Col>


        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box2</div>
        
        </Col>


        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box3</div>
        
        </Col>

        <Col className="d-flex justify-content-center mb-3" >
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 4 </div>
        
        </Col>

        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 5</div>
        
        </Col>


        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 6</div>
        
        </Col>
        
        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 7</div>
        
        </Col>

        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 8</div>
        
        </Col>

        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 9</div>
        
        </Col>

        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">box 10</div>
        
        </Col>

      

      </Row>


      <Row>
        <Col className="d-flex justify-content-center">

        <div className="mt-4">
          <h4>Top Searched Jobs</h4>
        </div>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">

        <div className="mt-4">
          <h4>Latest Blogs</h4>
        </div>
        </Col>
      </Row>

      
    </Container>
  );
}

export default Homepage;
