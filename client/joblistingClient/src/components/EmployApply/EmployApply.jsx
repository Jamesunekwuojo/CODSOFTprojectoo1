import { Container, Form, Row, Col, Button } from "react-bootstrap";
const EmployApply = () => {

    const handleSubmit = (e) => {
        e.preventDefault()


    }
  return (
    <Container className="d-flex justify-content-center  vh-90"> 
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={10} >
          <Form className=" border p-4 rounded-5 mt-4 border-secondary-subtle " onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
              <h2>Hi Dear, what do you like to do?</h2>
            </div>

            <Form.Group controlId="formBasicEmail">
              <Form.Control as="select" name="role">
                <option>Select from options below ...</option>
                <option value="employ">Employ</option>
                <option value="apply for jobs">Apply for job</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="p-4 d-flex justify-content-center">
                <Button type="submit">Enter </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployApply;
