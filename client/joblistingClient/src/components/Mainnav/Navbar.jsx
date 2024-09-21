import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../../slices/usersApiSlice';

import {logout} from "../../slices/authSlice.js";
import { useSelector, useDispatch } from 'react-redux';
// import {BiUserCircle} from 'react-icons/bi';
 // Import Link from react-router-dom
 
function Mainnav() {

  const [signout] = useLogoutMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = async()=>{

    try {

        await signout().unwrap()
        dispatch(logout())
        navigate("/");

    } catch(error) {
        console.log(console.error);
        

    }
   
    
   
}

  
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


          
            
            {/* <Nav.Link as={Link} to="/signin" className="ms-3">Sign in  </Nav.Link>
             
            <Nav.Link as={Link} to="/signup" className="ms-3">Sign up  </Nav.Link> */}

            {userInfo? (
              <>
              <NavDropdown title={userInfo?.user?.name}>
                <NavDropdown.Item as={Link} to="/employer-dashboard">Profile</NavDropdown.Item>

                
                <NavDropdown.Item as={Link} onClick={handleLogout} > Logout

                </NavDropdown.Item>

              </NavDropdown>
              </>
            ):(
              <>

               <Nav.Link as={Link} to="/signin" className="ms-3">Sign in  </Nav.Link>
             
               <Nav.Link as={Link} to="/signup" className="ms-3">Sign up  </Nav.Link>


              </>
            )}

          

           
             {/* Link to Post Job Page */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;
