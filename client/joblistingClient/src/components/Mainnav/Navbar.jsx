import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import {BiUserCircle} from 'react-icons/bi';
 // Import Link from react-router-dom
 
function Mainnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-2">
      <Container>
        <Navbar.Brand as={Link} to="/" >JOBHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="ms-3">Home</Nav.Link> {/* Link to the Homepage */}


            <Nav.Link as={Link} to="/about" className="ms-3">About us</Nav.Link>

            <Nav.Link as={Link} to="/post-job" className="ms-3">Post Job</Nav.Link>

            <Nav.Link as={Link} to="/browse-job" className="ms-3">Browse Job</Nav.Link> {/* Link to Browse Job Page */}


          
            
            <Nav.Link as={Link} to="/signin" className="ms-3">Sign in  </Nav.Link>
             
            <Nav.Link as={Link} to="/signup" className="ms-3">Sign up  </Nav.Link>

          

           
             {/* Link to Post Job Page */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;
