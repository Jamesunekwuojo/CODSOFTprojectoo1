import { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/signup", formData)
      .then(response => {
        console.log(response);
        const role = response.data.role.toLowerCase(); // Convert role to lowercase
        if (role === "employer") {
          navigate('/employer-dashboard');
        } else if (role === "candidate") {
          navigate('/candidate-dashboard');
        } else {
          console.error('Invalid role received:', response.data.role);
        }
      })
      .catch(err => {
        console.log(err);
        setError('Error signing up. Please try again.');
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4} xs={12}>
          <div className="d-flex justify-content-center">
            <h2>Sign Up</h2>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
  

            <Form.Group controlId="formRole" className="mb-3">
              <Form.Label>Job Category </Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select job category...</option>
                <option value="employer">Employer</option>
                <option value="candidate">Candidate</option>
              </Form.Control>
            </Form.Group>

            


            <div className="d-flex justify-content-center">
              <Button style={{ color: "black", backgroundColor: "#a8071a" }} type="submit">
                Post job
              </Button>
            </div>
            <div className="d-flex flex-row mt-3">
              <div className="pmargin">
                <a href="#forgot-password">Forgot Password?</a>
              </div>
              <div className="ml-auto">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupForm;
