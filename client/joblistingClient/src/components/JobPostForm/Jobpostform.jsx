import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import "./Jobpostform.css";
import { useState } from 'react';

import {toast} from 'react-toastify';

import {useCreatejobMutation} from "../../slices/jobsApiSlice.js"





const JobPostForm = () => {

  const [createjob, {isLoading}] = useCreatejobMutation();
   

  const [formData, setFormData] = useState({
    JobTitle: '',
    JobLocation: '',
    JobType: '',
    MinimumSalary: '',
    MaximumSalary: '',
    ApplicationDeadline: '',
    EmployerEmail: '',
    JobDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handling salary inputs specifically to add the dollar sign
    if (name === 'MinimumSalary' || name === 'MaximumSalary') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prevData => ({
        ...prevData,
        [name]: numericValue ? `$${numericValue}` : ''
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await createjob(formData).unwrap()
      console.log("Job posted sucessfully", response)
  
      toast.success('Succesfully posted job')
  
      setFormData({
        JobTitle: '',
        JobLocation: '',
        JobType: '',
        MinimumSalary: '',
        MaximumSalary: '',
        ApplicationDeadline: '',
        EmployerEmail: '',
        JobDescription: ''
      })

    } catch (error) {
      alert(error)
      const errorMessage = error?.data?.error || "Please try again Something happenend";
      console.log(errorMessage);
      toast.error(errorMessage)


    }



    // const token = localStorage.getItem('token');

    // Axios.post("http://localhost:5000/api/createjob", formData, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    //   .then((response) => {
    //     console.log(response.data); // Handle success
    //     Swal.fire({
    //       title: 'Success',
    //       text: response.data.message,
    //       icon:'success',
    //       confirmButtonText:'Ok'

    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error); // Handle error
    //     Swal.fire({
    //       title: 'Error',
    //       text: error.response.data.error,
    //       icon:'error',
    //       confirmButtonText: 'Ok'
    //     })
    //   });
  };

  return (
    <Container className='jobformcontainer'>
      <h2>Create a Job Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name='JobTitle'
            value={formData.JobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
          />
        </Form.Group>

        <Form.Group controlId="formJobLocation" className='mt-2'>
          <Form.Label>Job Location</Form.Label>
          <Form.Control
            type="text"
            name="JobLocation"
            value={formData.JobLocation}
            onChange={handleChange}
            placeholder="Enter job location"
          />
        </Form.Group>

        <Form.Group controlId="formJobType" className='mt-2'>
          <Form.Label>Job Type</Form.Label>
          <Form.Control
            as="select"
            name="JobType"
            value={formData.JobType}
            onChange={handleChange}
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formSalaryRange" className='mt-2'>
          <Form.Label>Salary Range</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="MinimumSalary"
                value={formData.MinimumSalary}
                onChange={handleChange}
                placeholder="Minimum salary in $"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="MaximumSalary"
                value={formData.MaximumSalary}
                onChange={handleChange}
                placeholder="Maximum salary in $"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="formApplicationDeadline" className='mt-2'>
          <Form.Label>Application Deadline</Form.Label>
          <Form.Control
            name="ApplicationDeadline"
            type="date"
            value={formData.ApplicationDeadline}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            name="EmployerEmail"
            type="email"
            value={formData.EmployerEmail}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formJobDescription" className="mt-2">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            name="JobDescription"
            rows={3}
            value={formData.JobDescription}
            onChange={handleChange}
            placeholder="Enter job description"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default JobPostForm;
