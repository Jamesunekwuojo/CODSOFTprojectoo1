import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { useSearchJobMutation } from "../../slices/jobsApiSlice.js";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import "./Searchdiv.css";

function Searchdiv() {
  const [searchJob] = useSearchJobMutation();
  // const { data: jobs, isError, error,  isLoading } = useSearchJobQuery();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    KeyWords: "",
    JobCategory: "",
    JobType: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const result = await searchJob(formData).unwrap();
      navigate("/jobsearch-results", { state: { jobs: result } });

    } catch (error) {
      console.log("Failed to search job", error);

      if (error?.status == 404) {
        console.log("No Job found")
        Swal.fire({
          icon: "warning",
          title: "Sorry!",
          text: "No jobs found matching your search criteria check keywords and criteria.",
          confirmButtonText:'OK'
        });
      } else {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.data?.message,
        });

      }

    
    }
  };

  return (
    <Container  className="mt-5 ">
      <Row className="justify-content-left">
        <Col className="form-container  ">
          <h2 className="mx-2">Find Your Expected Job</h2>
          <p className="mx-2">
            Find Jobs, Employment & Career Opportunities. Some of the companies
            we've helped recruit excellent applicants over the years.
          </p>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="searchKeywords" className="m-2">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                name="KeyWords"
                placeholder="Search your Keywords"
                value={formData.KeyWords}
                onChange={handleChange}
                className="p-3 mb-4"
              />
            </Form.Group>

            <Form.Group controlId="searchLocation" className="m-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="JobCategory"
                value={formData.JobCategory}
                onChange={handleChange}
                className="p-3 mb-4"
              >
                <option>Select...</option>
                <option>Technology and IT</option>
                <option>Human Resources</option>
                <option>Education and Training</option>
                <option>Engineering</option>
                <option>Others...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="searchJobType" className="m-2">
              <Form.Label>Job Type</Form.Label>

              <Form.Control
                as="select"
                name="JobType"
                value={formData.JobType}
                className="p-3 mb-4"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
              </Form.Control>
            </Form.Group>

            <Button  type="submit"  className="mb-4  mx-2 accentItem">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Searchdiv;
