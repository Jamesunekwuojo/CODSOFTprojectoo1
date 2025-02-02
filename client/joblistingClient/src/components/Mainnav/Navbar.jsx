import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2"; // Import
// SweetAlert

import { PersonCircle } from "react-bootstrap-icons";

import "./Navbar.css";

function Mainnav() {
  const [signout] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const role = userInfo?.user?.role;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signout().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // Handle post job navigation
  const handlePostJob = () => {
    if (role === "employer") {
      navigate("/post-job");
    } else {
      // Show notification if not an employer
      Swal.fire({
        icon: "warning",
        title: "Access Denied",
        text: "This feature is only available for employers.",
        confirmButtonText: "Okay",
      }).then(() => {
        navigate("/"); // Redirect to homepage
      });
    }
  };

  return (
    <Navbar expand="lg" className=" mb-2 mainNav">
      <Container>
        <Navbar.Brand className="navItem" as={Link} to="/">
          JOBHUB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="ms-3 navItem">
              Home
            </Nav.Link>{" "}
            {/* Link to the Homepage */}
            <Nav.Link as={Link} to="/about" className="ms-3 navItem">
              About us
            </Nav.Link>
            {userInfo ? (
              <>
                <Nav.Link onClick={handlePostJob} className="ms-3 navItem">
                  Post Job
                </Nav.Link>
              </>
            ) : (
              <></>
            )}
            {/* <Nav.Link onClick={handlePostJob} className="ms-3">
              Post Job
            </Nav.Link>{" "} */}
            {/* Conditional Post Job */}
            <Nav.Link as={Link} to="/browse-job" className="ms-3 navItem">
              Browse Job
            </Nav.Link>{" "}
            {/* Link to Browse Job Page */}
            {userInfo ? (
              <>
                <NavDropdown
                  title={
                    <>
                      <PersonCircle className="user-icon fs-4 navItem" />
                    </>
                  }
                >
                  <NavDropdown.Item
                    as={Link}
                    to={
                      role === "candidate"
                        ? "/candidate-dashboard"
                        : "/employer-dashboard"
                    }
                  
                  >
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} onClick={handleLogout} className="">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin" className="ms-3 navItem">
                  Sign in
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="ms-3 navItem">
                  Sign up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;
