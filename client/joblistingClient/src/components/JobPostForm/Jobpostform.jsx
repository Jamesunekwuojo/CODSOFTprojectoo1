
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import "./Jobpostform.css"
import { useState } from 'react';

const JobPostForm = () => {
  const [currency, setCurrency] = useState('');


  const handleChange = (e)=> {
    const value = e.target.value.replace(/[^0-9]/g, '');

    if (value) {
      setCurrency(`$${value}`);
    }

    setCurrency('');

  }

  return (
    <Container className='jobformcontainer'>
      <h2>Create a Job Post</h2>
      <Form>
        <Form.Group controlId="formJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" name='JobTitle' placeholder="Enter job title" />
        </Form.Group>

     

        <Form.Group controlId="formJobLocation" className='mt-2'>
          <Form.Label>Job Location</Form.Label>
          <Form.Control type="text" name="JobLocation" placeholder="Enter job location" />
        </Form.Group>

        <Form.Group controlId="formJobType" className='mt-2'>
          <Form.Label>Job Type</Form.Label>
          <Form.Control as="select" name="JobType">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formSalaryRange" className='mt-2'>
          <Form.Label>Salary Range</Form.Label>
          <Row>
            <Col>
              <Form.Control type="number" name="MinimumSalary" value={currency} onChange={handleChange} placeholder="Minimum salary" />
            </Col>
            <Col>
              <Form.Control type="number"  name="MaximumSalary" placeholder="Maximum salary" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="formApplicationDeadline" className='mt-2'>
          <Form.Label>Application Deadline</Form.Label>
          <Form.Control name="ApplicationDeadline" type="date" />
        </Form.Group>

        <Form.Group controlId="formJobDescription" className="mt-2">
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" name="JobDescription" rows={3} placeholder="Enter job description" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default JobPostForm;
