import { Navbar, Nav, Container, Row, Button } from "react-bootstrap";
import { FaHome, FaUsers, FaBriefcase, FaBlog } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";

import "./CandidateSidebar.css";

import { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";
import Signout from "../Signout/Signout.jsx";

function EmployerSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      {/* Sidebar */}
      <Navbar
        className={`flex-column p-3 ${collapsed ? "collapsed" : ""}`}
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
            to="/candidate-dashboard/dashboard"
            onClick={handleLinkClick}
          >
            <FaHome className="me-2" /> { !collapsed && "Dashboard"}
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/candidate-dashboard/alljob"
            onClick={handleLinkClick}
          >
            <FaBriefcase className="me-2" /> {!collapsed && "Jobs" }
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/candidate-dashboard/allblogs"
            onClick={handleLinkClick}
          >
            <FaBlog className="me-2" /> {!collapsed && "Blogs" }
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
            transition: "transform 0.6s ease",
          }}
        >
          <FiChevronLeft />
        </Button>
      </Navbar>

      {((isMobile && collapsed) || !isMobile) && (
        <div className="flex-grow-1">
          <Container className="p-4 ">
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
