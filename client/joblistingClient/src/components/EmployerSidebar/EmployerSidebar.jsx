import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import { FaHome, FaUsers, FaBriefcase, FaBlog } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineAddBusiness } from "react-icons/md";

import { Link, Outlet } from "react-router-dom";
import Signout from "../Signout/Signout.jsx";
import "./Employersidebar.css";
import { useEffect, useState } from "react";

function EmployerSidebar() {
  // state managing if sidebar is collapsed or not in regards to whether  ismobile value.
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // functio to toggle the collapse state, this is going to work alongside the fiChiveronLeft component

  const toggleSidebar = () => setCollapsed(!collapsed);

  // function to handle link click
  const handleLinkClick = () => {
    if (isMobile) {
      setCollapsed(true);
    }
  };

  // To detect if it's mobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (window.innerWidth <= 768) {
      setCollapsed(false); // Ensure sidebar is not collapsed by default on mobile
    }

    // Initial check and listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="d-flex min-vh-100"
      style={{ width: isMobile ? "100vw" : "" }}
    >
      <Navbar
        className={`flex-column p-3 ${collapsed ? "collapsed" : ""} sidebar`}
        style={{
          width:
            isMobile && !collapsed ? "100vw" : collapsed ? "80px" : "250px",
          transition: "width 0.3s ease",
          backgroundColor: "blue",
        }}
      >
        <Nav className="flex-column">
          <Nav.Link
            as={Link}
            to="/employer-dashboard/addJobs"
            onClick={handleLinkClick}
            className="my-2 d-flex align-items-center sidebarItem"
          >
            <MdOutlineAddBusiness className="me-2  " />
            {!collapsed && "Add Job"}
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/employer-dashboard/jobs"
            onClick={handleLinkClick}
            className="my-2 sidebarItem"
          >
            <FaBriefcase className="me-2 " /> {!collapsed && "Jobs"}
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/employer-dashboard/blogs"
            onClick={handleLinkClick}
            className="my-2 sidebarItem"
          >
            <FaBlog className="me-2 " /> {!collapsed && "Blogs"}
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/employer-dashboard/addBlogs"
            onClick={handleLinkClick}
            className="my-2 sidebarItem"
          >
            <AiOutlinePlusCircle className="me-2 " />
            {!collapsed && "Add Blog"}
          </Nav.Link>

          <Nav.Item onClick={handleLinkClick}>
            <Signout collapsed={collapsed} />
          </Nav.Item>
        </Nav>
        <Button
        className="mt-4"
          variant="outline-light"
          onClick={toggleSidebar}
          style={{
            transform: collapsed ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
          }}
        >
          <FiChevronLeft className=""/>
        </Button>
  
      </Navbar>
 

      {((isMobile && collapsed) || !isMobile) && (
        <div className="flex-grow-1">
          <Container className="p-4">
            <Row>
              <Outlet />
            </Row>
          </Container>
        </div>
      )}

      
    </div>
  );
}

export default EmployerSidebar;
