import { Container, Row, Col } from "react-bootstrap";
import Searchdiv from "../components/Searchdiv/Searchdiv.jsx";
import ChooseUs from "../components/ChooseUs/ChooseUs.jsx";
import Sideimgdiv from "../components/Sideimgdiv/Sideimgdiv.jsx";
import WelcomeMsg from "../components/WelcomeMsg/WelcomeMsg.jsx";
import { PersonAdd } from "react-bootstrap-icons";
import { Camera } from "react-bootstrap-icons";
import { PersonCheck } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../App.css";
import Latestblogs from "../components/Latestblogs/Latestblogs.jsx";

import { useState } from "react";

import "./Homepage.css";

function Homepage() {
 

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <WelcomeMsg />
      <Row className="searchdivIMG_wrapper">
        <Col xs={12} md={8} lg={6}>
          <Searchdiv className="h-20"></Searchdiv>
        </Col>

        <Col className="sideFormimg" xs={12} md={8} lg={6}>
          <Sideimgdiv></Sideimgdiv>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="d-flex m-4 justify-content-center">
          <button className="startedButton">
            {" "}
            <Link className="startedLink" to="/signup">
              {" "}
              Get Started
            </Link>
          </button>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center"></Row>

      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <div className="mt-4">
            <h4>Why Choose Us?</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <ChooseUs></ChooseUs>
          </div>
        </Col>
      </Row>

      <Row classsName="m-4">
        <Col className="d-flex justify-content-center">
          <div className="m-4">
            <h4>Explore Categories</h4>
          </div>
        </Col>
      </Row>

      {/* Categories div*/}

      <Row className="d-flex justify-content-center">
        <Col xs={12}>
          <div className="grid-container">
            <div className="grid-item">
              {" "}
              <Link
                to={{
                  pathname: "/explore-category",
                  search: `?JobCategory=AUL Hub`,
                }}
              >
                AUL Hub
              </Link>
            </div>

            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Technology and IT`}}>Technology and IT</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Education and Training`}}>Education and Training</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Healthcare`}}>Healthcare</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Marketing and Sales`}}>Marketing and Sales</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Engineering`}}>Engineering</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Human Resources`}}>Human Resources</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Creative Arts and Design`}}>Creative Arts and Design</Link>
            </div>
            <div className="grid-item">
              <Link to={{pathname: '/explore-category', search: `?JobCategory=Customer Service and Support`}}> Customer Service and Support</Link> </div>
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
            {/* <h4>Latest Blogs</h4> */}
            <Latestblogs/>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <div className="mt-4"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
