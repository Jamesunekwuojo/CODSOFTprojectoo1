import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaHome, FaUsers, FaBriefcase, FaBlog,  } from "react-icons/fa";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineAddBusiness } from 'react-icons/md';


import { Link, Outlet } from "react-router-dom";
import Signout from "../Signout/Signout.jsx";
import "./Employersidebar.css";

function EmployerSidebar() {
  return (
    <Container fluid>
      <Row className="" >
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="bg-light p-4 side_bar">
          <Nav className="flex-column mt-4">
            {/* <Nav.Item className="mb-3">
              <Nav.Link as={Link} to="/employer-dashboard/dashboard">
                <FaHome className="mr-2" /> Dashboard
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="mb-3">
              <Nav.Link as={Link} to="/employer-dashboard/employees">
                <FaUsers className="mr-2" /> Employees
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="mb-3">
              <Nav.Link as={Link} to="/employer-dashboard/addJobs">
                <MdOutlineAddBusiness  className="mr-2" /> Add Job
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="mb-3">
              <Nav.Link as={Link} to="/employer-dashboard/jobs">
                <FaBriefcase className="mr-2" /> Jobs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="mb-3">
              <Nav.Link as={Link} to="/employer-dashboard/blogs">
                <FaBlog className="mr-2" /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="mb-3">
              <Nav.Link as={Link} to="/employer-dashboard/addBlogs">
                <AiOutlinePlusCircle className="mr-2" /> Add Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Signout />
            </Nav.Item>
          </Nav>
        </Col>

        {/* Main content area where nested routes will be rendered */}
        <Col xs={12} md={9} lg={8} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default EmployerSidebar;
