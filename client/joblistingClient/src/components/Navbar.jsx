import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Mainnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>JOBHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="ms-3">Home</Nav.Link> {/* Link to the Homepage */}
            <NavDropdown title="Pages" id="basic-nav-dropdown" className="ms-3">
              <NavDropdown.Item as={Link} to="/job-details">Job Details Page</NavDropdown.Item> {/* Link to Job Details Page */}
              <NavDropdown.Item as={Link} to="/job-listing">Job Listing Page</NavDropdown.Item> {/* Link to Job Listing Page */}
              <NavDropdown.Item as={Link} to="/candidate-dashboard">Candidate Dashboard</NavDropdown.Item> {/* Link to Candidate Dashboard */}
              {/* Add more NavDropdown.Items for other pages */}
            </NavDropdown>
            <Nav.Link as={Link} to="/browse-job" className="ms-3">Browse Job</Nav.Link> {/* Link to Browse Job Page */}
            <Nav.Link as={Link} to="/login" className="ms-3">Log in</Nav.Link> {/* Link to Login Page */}
            <Nav.Link as={Link} to="/post-job" className="ms-3">Post Job</Nav.Link> {/* Link to Post Job Page */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;
