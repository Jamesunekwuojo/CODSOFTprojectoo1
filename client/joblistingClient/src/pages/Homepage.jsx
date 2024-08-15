import { Container, Row, Col } from 'react-bootstrap';
import Searchdiv from "../components/Searchdiv/Searchdiv.jsx";
import ChooseUs from '../components/ChooseUs/ChooseUs.jsx';
import Sideimgdiv from '../components/Sideimgdiv/Sideimgdiv.jsx';
import { PersonAdd } from 'react-bootstrap-icons';
import { Camera } from 'react-bootstrap-icons';
import { PersonCheck} from 'react-bootstrap-icons';

// TESTING IMPORTS SOON TO BE REMOVED

// import Blogform from "../components/Blogform";
// import BlogCard from "../components/BlogCard";

import Blogform from '../components/BlogForm/Blogform.jsx';




import "../App.css"



function Homepage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Row>
        <Col xs={12} md={8} lg={6}>
        <Searchdiv className="h-20"></Searchdiv>

        </Col>

        <Col className="sideFormimg"  xs={12} md={8} lg={6}>
        <Sideimgdiv></Sideimgdiv>

   
        
        </Col>
      </Row>
  
      

      <Row className="mt-5">
        <Col className="d-flex m-4 justify-content-center">
        <h3>Get Started</h3>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        
        <Col className="m-3 d-flex justify-content-center">
          <div className=" d-flex justify-content-center  align-items-center flex-column box custom-box p-4 border rounded shadow-sm mb-2">
            <PersonAdd size={32}/>
            <p className='fw-bold'> Create Account</p>

            
          
           
          </div>
        </Col>

        <Col className="m-3 d-flex justify-content-center">
          <div className="box custom-box p-4 border rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
            <PersonCheck size={"32"}/>
            <p className='fw-bold'>Complete Profile</p>
          
          </div>
          
        </Col>
        
        <Col className="m-3 d-flex justify-content-center align-items-center">
          <div className=" d-flex justify-content-center  align-items-center flex-column box p-4  custom-box border rounded shadow-sm">
            <Camera size={32}/>
            <p className='fw-bold' >Employ or Apply for Jobs</p>

         
          
          </div>
          
        </Col>

       
      </Row>


      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
        <div className="mt-4">
          <h4>Why Choose Us?</h4>
        </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <div className='d-flex justify-content-center align-items-center'>
          <ChooseUs></ChooseUs>
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
        <div className="box p-4 custom-box1 border rounded shadow-sm">

        AUL Hub
        </div>
        
        </Col>


        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">
        Technology and IT

        </div>
        
        </Col>


        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">
          Education and Training
        </div>
        
        </Col>

        <Col className="d-flex justify-content-center mb-3" >
        <div className="box p-4 custom-box1 border rounded shadow-sm">
          Healthcare

        </div>
        
        </Col>

        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">Marketing and Sales

        </div>
        
        </Col>


        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">Engineering

        </div>
        
        </Col>
        
        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">
        Human Resources

        </div>
        
        </Col>

        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">
        Creative Arts and Design:

        </div>
        
        </Col>

        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">
        Customer Service and Support

        </div>
        
        </Col>

        
        <Col className="d-flex justify-content-center mb-3">
        <div className="box p-4 custom-box1 border rounded shadow-sm">
          Finance and Accounting

        </div>
        
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

      <Row>
        <Col className="d-flex justify-content-center">

        <div className="mt-4">
          
          
        
        </div>
        </Col>
      </Row>

   

      
    </Container>
  );
}

export default Homepage;
