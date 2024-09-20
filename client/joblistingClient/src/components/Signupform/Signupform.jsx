import { useEffect, useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import "./Signupform.css";
// import { useSignup } from '../../hooks/useSignup';
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from "../Loader/Loader.jsx";
import { useSignupMutation } from '../../slices/usersApiSlice.js';
import {setCredentials} from
'../../slices/authSlice.js';

//import { useSignup } from '../../hooks/useSignup';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  // const {isLoading, signupUser} = useSignup();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {userInfo} = useSelector((state) => state.auth)

  const [signup, {isLoading}] = useSignupMutation()


 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  useEffect(() => {

    if(userInfo) {
      navigate('/')
      Swal.fire({
        title:'Warning',
        text:'You are already logged  in',
        icon:'warning',
        confirmbuttonText:'Ok'
      })
    }

  } , [navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await signup(formData).unwrap();
      dispatch(setCredentials({...response}));

      const role = response.data.user.role.toLowercase();

      if (role ==="employer") {
        navigate("/employer-dashboard")

      } else if (role === 'candidate') {
        // Show success message and redirect candidate to homepage
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully signed up as a candidate.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/');
        });
      }

    } catch(error) {
      console.log(error)
      if(error.data?.message) {
        toast.error(error.data.message)
      } else {

        toast.error('sopmething happen')

      }
    

    }

    // signupUser(formData)// call signupuser function from the hook

  {/*  Axios.post("http://localhost:5000/api/signup", formData)
      .then(response => {
        console.log(response);

        


          // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        signin(response.data.token)
        
        const role = response.data.user.role.toLowerCase(); // Convert role to lowercase
        if (role === "employer") {
          navigate('/employer-dashboard');

        } else if (role === "candidate") {
          navigate('/candidate-dashboard');
        } else {
          console.error('Invalid role received:', response.data.role);
        }


        // If the blog is created successfully
        Swal.fire({
            title: 'Successfully signed up!',
            text: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK'
        });

       

      
      })
      .catch(error => {
        if(error.response){

          Swal.fire({
            title: 'Error!',
            text: error.response.data.error,  // The error message from your backend
            icon: 'error',
            confirmButtonText: 'OK'
          });

        } else {

          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        }

        // setError('Error signing up. Please try again.');
      });*/}
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4} xs={12} className="signupForm-container mt-3 p-2">
          <div className="d-flex justify-content-center mt-2">
            <h2>Sign Up</h2>
          </div>
          {/* {error && <div className="alert alert-danger">{error}</div>} */}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="m-2">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-2"

              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="m-2">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-2"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="m-2">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="p-2 mb-3"
              />
            </Form.Group>

            <Form.Group controlId="formRole" className="m-2">
              <Form.Label>Role:</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="p-2 mb-2"
              >
                <option value="">Select role...</option>
                <option value="employer">Employer</option>
                <option value="candidate">Candidate</option>
              </Form.Control>

            </Form.Group>

            {isLoading && <Loader/>}

            <div className="d-flex justify-content-center">
              <Button style={{ color: "black", backgroundColor: "#a8071a" }}
               type="submit">Sign up
                
              </Button>
            </div>

            <Row className="mt-3">
              <Col>
                <Form.Text>
                  <Link to="#forgot-password">Forgot Password?</Link>
                </Form.Text>
              </Col>
              <Col className="text-right">
                <Form.Text>
                  Have an account? <Link to="/login">Login</Link>
                </Form.Text>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupForm;
