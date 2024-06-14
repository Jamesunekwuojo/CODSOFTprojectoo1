import {useState} from 'react';
import {Form, Button, Col, Container, Row,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';


function Signupform() {
    // const [formData, setFormData] = useState({
    //   name:'',
    //   email: '',
    //   password: '',
    //   rememberMe: false,
    // });
  
    const [name, setName] = useState('');
  
    const [email, setEmail] = useState('');
  
    const [password, setPassword]= useState('');

    const [role, setRole] = useState('');
  

  
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:5000/api/signup",{
        name:name,
        email:email,
        password:password,
        role:role
  
      }).then(response =>{
        console.log(response)
  
      }).catch(err =>{
        console.log(err)
      })
      // Perform validation and submit data
    };
  
    return (
      <Container className="">
        <Row className="justify-content-md-center">
          <Col md={4} xs={12}>
              <div className="d-flex justify-content-center">
                  <h2>Sign up</h2>
  
              </div>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formText">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
          
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
  
              <Form.Group controlId="formEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
              
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
  
              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
               
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>


              <Form.Group controlId="formRole" className="mb-3">
               <Form.Label>Role:</Form.Label>
               <Form.Control
                as="select"
                name="role"
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select role...</option>
                <option value="employer">Employer</option>
                <option value="candidate">Candidate</option>
               </Form.Control>
              </Form.Group>


  
              <div className="d-flex justify-content-center">
              <Button style={{color:"black", backgroundColor:"#a8071a"}}  type="submit"  >
                Signup
              </Button>
  
              </div>
  
          
              <div className=" d-flex flex-row ">
  
                  <div className="pmargin">
                  <a href="#forgot-password">Forgot Password?</a>
                  </div>
  
                  <div>
                     
                      {/* <p>Don&apos;t have an account?<a href="#register"> SignUp</a></p> */}
                      <p>Already have an account? <Link>Login</Link></p>
                  </div>
             
               
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
  export default Signupform
  
  