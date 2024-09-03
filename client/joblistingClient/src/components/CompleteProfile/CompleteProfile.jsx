import { Container, Form, Row,  } from "react-bootstrap";

function CompleteProfile() {
  return (
    <Container>
      <Row>
        <Form>
          <h1>Complete Profile</h1>
          <Form.Group>
            <Form.Label>Upload ur profile picture</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}
export default CompleteProfile;
