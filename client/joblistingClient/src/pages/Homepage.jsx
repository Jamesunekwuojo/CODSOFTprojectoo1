import { Container, Row, Col } from 'react-bootstrap';
import Searchdiv from "../components/Searchdiv/Searchdiv.jsx";
import ChooseUs from '../components/ChooseUs/ChooseUs.jsx';
import Sideimgdiv from '../components/Sideimgdiv/Sideimgdiv.jsx';
import WelcomeMsg from '../components/WelcomeMsg/WelcomeMsg.jsx';
import CompleteProfile from '../components/CompleteProfile/CompleteProfile.jsx'
import { PersonAdd } from 'react-bootstrap-icons';
import { Camera } from 'react-bootstrap-icons';
import { PersonCheck} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import "../App.css"

import "./Homepage.css"



function Homepage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <WelcomeMsg/>
      <Row className='searchdivIMG_wrapper'>
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
            <Link to="/signup"><p className='fw-bold'> Create Account</p></Link>
           
          </div>
        </Col>

        <Col className="m-3 d-flex justify-content-center">
          <div className="box custom-box p-4 border rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
            <PersonCheck size={"32"}/>
            <Link to="/completeprofile"><p className='fw-bold'>Complete Profile</p></Link>
          
          </div>
          
        </Col>
        
        <Col className="m-3 d-flex justify-content-center align-items-center">
          <div className=" d-flex justify-content-center  align-items-center flex-column box p-4  custom-box border rounded shadow-sm">
            <Camera size={32}/>
            <Link to="/employ-apply"><p className='fw-bold' >Employ or Apply for Jobs</p></Link>

         
          
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

        <Col xs={12}>

          <div className='grid-container'>
          <div className="grid-item">AUL Hub</div>
            <div className="grid-item">Technology and IT</div>
            <div className="grid-item">Education and Training</div>
            <div className="grid-item">Healthcare</div>
            <div className="grid-item">Marketing and Sales</div>
            <div className="grid-item">Engineering</div>
            <div className="grid-item">Human Resources</div>
            <div className="grid-item">Creative Arts and Design</div>
            <div className="grid-item">Customer Service and Support</div>
            <div className="grid-item">Finance and Accounting</div>


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
