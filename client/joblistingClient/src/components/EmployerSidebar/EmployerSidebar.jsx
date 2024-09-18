import { Nav } from "react-bootstrap";
import { FaHome, FaUsers, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import Signout from "../Signout/Signout.jsx";
import "./Employersidebar.css";

function EmployerSidebar() {
  return (
    <div className="d-flex  flex-column  bg-light side_bar">
      <Nav className="flex-column mt-4">
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="dashboard">
            <FaHome className="mr-2" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="employees">
            <FaUsers className="mr-2" /> Employees
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="employerAddjob">
            <FaChartBar className="mr-2" /> Add job
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="employerJob">
            <FaChartBar className="mr-2" /> Jobs
            
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="employerBlog">
            <FaCog className="mr-2" /> Blogs
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to="employerAddblog">
            <FaCog className="mr-2" /> Add Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Signout></Signout>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default EmployerSidebar;
