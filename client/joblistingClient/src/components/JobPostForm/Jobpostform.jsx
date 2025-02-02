import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./Jobpostform.css";
import { useState } from "react";

import { toast } from "react-toastify";
import { useCreateJobMutation } from "../../slices/jobsApiSlice.js";
import { useSelector } from "react-redux";

const JobPostForm = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // const role = userInfo?.user?.role;

  const [createJob, { isLoading }] = useCreateJobMutation();

  const [formData, setFormData] = useState({
    JobTitle: "",
    JobLocation: "",
    JobType: "",
    MinimumSalary: "",
    MaximumSalary: "",
    ApplicationDeadline: "",
    EmployerEmail: userInfo.user.email,
    JobDescription: "",
    JobCategory: "",
    JobLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling salary inputs specifically to add the dollar sign
    if (name === "MinimumSalary" || name === "MaximumSalary") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue ? `$${numericValue}` : "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createJob(formData).unwrap();
      console.log("Job posted sucessfully", response);

      toast.success("Succesfully posted job");

      setFormData({
        JobTitle: "",
        JobLocation: "",
        JobType: "",
        JobCategory: "",
        MinimumSalary: "",
        MaximumSalary: "",
        ApplicationDeadline: "",
        EmployerEmail: userInfo.user.email,
        JobDescription: "",
        JobLink: "",
      });
    } catch (error) {
      const errorMessage =
        error.data?.message ||
        error.error ||
        "Please try again. Something happened";
      console.error("Error posting job:", errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <Container className="jobformcontainer mt-4">
      <h2>Create a Job Post</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="JobTitle"
            value={formData.JobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
          />
        </Form.Group>

        <Form.Group controlId="formJobLocation" className="mt-2">
          <Form.Label>Job Location</Form.Label>
          <Form.Control
            type="text"
            name="JobLocation"
            value={formData.JobLocation}
            onChange={handleChange}
            placeholder="Enter job location"
          />
        </Form.Group>

        <Form.Group controlId="formJobType" className="mt-2">
          <Form.Label>Job Type</Form.Label>
          <Form.Control
            as="select"
            name="JobType"
            value={formData.JobType}
            onChange={handleChange}
            required
            placeholder="Select..."
          >
            <option value="">Select...</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formSalaryRange" className="mt-2">
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

        <Form.Group controlId="formApplicationDeadline" className="mt-2">
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
            readOnly
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formJobCategory" className="mt-2">
          <Form.Label>Job Category</Form.Label>
          <Form.Control
            as="select"
            name="JobCategory"
            value={formData.JobCategory}
            onChange={handleChange}
            required
            defaultValue=""
          >
            <option>Select...</option>
            <option>Technology and IT</option>
            <option>Human Resources</option>
            <option>Education and Training</option>
            <option>Engineering</option>
            <option>Others...</option>
          </Form.Control>
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

        <Form.Group controlId="formJobDescription" className="mt-2">
          <Form.Label>Job Application Link</Form.Label>
          <Form.Control
            name="JobLink"
            rows={3}
            value={formData.JobLink}
            onChange={handleChange}
            placeholder="Enter job application link"
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button
            
            type="submit"
            className="mt-2 accentItem"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default JobPostForm;
