import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Mainnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JOBHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="#home" className="ms-3" >Home</Nav.Link>
          
            

            <NavDropdown title="Pages" id="basic-nav-dropdown" className="ms-3">
              <NavDropdown.Item href="#action/3.1">Job Details Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Job Listing page
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Candidate Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

           
            <Nav.Link href="#link" className="ms-3">Browse Job</Nav.Link>
            <Nav.Link href="#link" className="ms-3">Log in</Nav.Link>
            <Nav.Link href="#link" className="ms-3">Post Job</Nav.Link>

         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;