import { useEffect, useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Signinform.css";
// import { useSignin } from '../../hooks/useSignin';
import Swal from "sweetalert2";
import { toast } from "react-toastify";

//Testing stuffs
import { useLoginMutation } from "../../slices/usersApiSlice.js";
import { setCredentials } from "../../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";

function SigninForm() {
  const [formData, setFormData] = useState({

    email: "",
    password: "",
    role: "",
  });



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/')
   
      Swal.fire({
        title: "Welcome",
        text: "Successfully logged in",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  }, [navigate, userInfo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  signinUser(formData)

    try {
      const response = await login(formData).unwrap();
      // Thw unwrap is already bundling the whole response to be accessed via response not response.d
      dispatch(setCredentials({ ...response }));

      console.log(response);

    

  
    } catch (error) {
      // Extract the error message from backend response
      // alert(error);
      const errorMessage = error?.data?.error;
      console.log(errorMessage);
      toast.error(errorMessage); // Display the error using toast
    }

    
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4} xs={12} className="signupForm-container mt-3 p-2">
          <div className="d-flex justify-content-center mt-2">
            <h2>Sign in</h2>
          </div>
          {/* {error && <div className="alert alert-danger">{error}</div>} */}

          <Form onSubmit={handleSubmit}>
            {/* <Form.Group controlId="formName" className="m-2">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-2"
              />
            </Form.Group> */}

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
                <option value="">Sign in as ...</option>
                <option value="employer">Employer</option>
                <option value="candidate">Candidate</option>
              </Form.Control>

              {isLoading && <Loader />}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                style={{ color: "black", backgroundColor: "#a8071a" }}
                type="submit"
              >
                signin
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
                  Don't have account? <Link to="/signup">Signup</Link>
                </Form.Text>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SigninForm;
