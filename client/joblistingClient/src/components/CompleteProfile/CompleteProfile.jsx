import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./CompleteProfile.css";
function CompleteProfile() {

  const handleSubmit = () => {

  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <h1>Complete Profile</h1>
          </div>
          <Form className="border rounded-5 p-4 border-secondary-subtle formContainer" onSubmit={handleSubmit}>
            <Form.Group className="mt-4">
              <Form.Label>Upload ur profile picture</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter city name</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>

            <Form.Group className="d-flex justify-content-center mt-4">
              <Button type='submit'>Submit</Button>

            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default CompleteProfile;
