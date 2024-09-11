import { Container, Form, Row, Col, Button } from "react-bootstrap";
const EmployApply = () => {

    const handleSubmit = () => {

    }
  return (
    <Container className="d-flex justify-content-center"> 
      <Row>
        <Col xs={12}>
          <Form className="border p-4 border-secondary-subtle" onSubmit={handleSubmit}>
            <div>
              <h2>Hi Dear, what do you like to do?</h2>
            </div>

            <Form.Group controlId="formBasicEmail">
              <Form.Control as="select" name="role">
                <option>Select ...</option>
                <option value="employ"></option>
                <option value="apply for jobs"></option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
                <Button type="submit"></Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployApply;
