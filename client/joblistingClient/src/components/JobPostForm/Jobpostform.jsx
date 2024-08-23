
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const JobPostForm = () => {
  return (
    <Container>
      <h2>Create a Job Post</h2>
      <Form>
        <Form.Group controlId="formJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" />
        </Form.Group>

        <Form.Group controlId="formJobDescription">
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter job description" />
        </Form.Group>

        <Form.Group controlId="formJobLocation">
          <Form.Label>Job Location</Form.Label>
          <Form.Control type="text" placeholder="Enter job location" />
        </Form.Group>

        <Form.Group controlId="formJobType">
          <Form.Label>Job Type</Form.Label>
          <Form.Control as="select">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formSalaryRange">
          <Form.Label>Salary Range</Form.Label>
          <Row>
            <Col>
              <Form.Control type="number" placeholder="Minimum salary" />
            </Col>
            <Col>
              <Form.Control type="number" placeholder="Maximum salary" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="formApplicationDeadline">
          <Form.Label>Application Deadline</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default JobPostForm;
