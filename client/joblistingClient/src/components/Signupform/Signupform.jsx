import { useEffect, useState } from "react";
import { Form, Button, Col, Container, Row, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Signupform.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader.jsx";
import { useSignupMutation } from "../../slices/usersApiSlice.js";
import { setCredentials } from "../../slices/authSlice.js";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [signup, { isLoading }] = useSignupMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
      Swal.fire({
        title: "Welcome",
        text: "Successfully signed up",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await signup(formData).unwrap();
      dispatch(setCredentials({ ...response }));

      console.log(response);

      if (response?.user?.role == "employer") {
        navigate("/employer-dashboard");
        console.log("Role from API:", response.user.role);
      } else if (response?.user?.role == "candidate") {
        console.log("Role not found in API response");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error("Something happened");
      }
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-4">
        <Col lg={4} md={12} xs={12} className="signupForm-container mx-4 mt-4 p-2 formCol">
          <div className="d-flex justify-content-center mt-2">
            <h2>Sign Up</h2>
          </div>

          <Form onSubmit={handleSubmit}>
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

              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="p-2 mb-3"
                />
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    cursor: "pointer",
                    height: "calc(1.6em + 0.75rem + 5px)",
                    padding: "0.375rem 0.75rem",
                  }}
                >
                  {showPassword ? (
                    <EyeSlash style={{ width: "1.25rem", height: "1.25rem" }} />
                  ) : (
                    <Eye style={{ width: "1.25rem", height: "1.25rem" }} />
                  )}
                </InputGroup.Text>
              </InputGroup>
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

            {isLoading && <Loader />}

            <div className="d-flex justify-content-center">
              <Button
                style={{ color: "black",  }}
                type="submit"
                className="accentItem"
              >
                Sign up
              </Button>
            </div>

            <Row className="mt-3">
              <Col>
                <Form.Text>
                  {/* <Link to="#forgot-password">Forgot Password?</Link> */}
                </Form.Text>
              </Col>
              <Col className="text-right">
                <Form.Text>
                  Have an account? <Link to="/signin">Login</Link>
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
