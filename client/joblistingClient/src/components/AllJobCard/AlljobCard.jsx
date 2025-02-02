// JobCard.js
import { useGetJobsQuery } from "../../slices/jobsApiSlice.js";
import { Card, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import "./AllJobCard.css";
import { useState } from "react";

const AllJobCard = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6)
  const { data: jobs, error, isLoading } = useGetJobsQuery({page, limit});

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) {
    toast.error("Failed to fetch jobs");
    console.log(error);
    return <Alert variant="info">{error?.data?.message || "Error fetching blog"}</Alert>;
  }

  if (jobs.Jobs.length === 0) {
    return <p>No jobs found for this employer.</p>;
  }


  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < jobs.totalPages) setPage(page + 1);
  };

  return (
    <Container className="job-card-container">
      <h2 className="text-center">Financial Jobs Available</h2>
      <Row>
        {jobs.Jobs.map((job) => (
          <Col md={4} key={job._id} className="mb-2">
            <Card className="job-card">
              <Card.Body className="job-card-body">
                <Card.Title>{job.JobTitle}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {job.JobCategory} <br />
                  <strong>Location:</strong> {job.JobLocation} <br />
                  <strong>Type:</strong> {job.JobType} <br />
                  <strong>Salary Range:</strong> {job.MinimumSalary} -{" "}
                  {job.MaximumSalary} <br />
                  <strong>Deadline:</strong>{" "}
                  {new Date(job.ApplicationDeadline).toLocaleDateString()}{" "}
                  <br />
                  <strong>Description:</strong> {job.JobDescription}
                  <strong>By:{job.EmployerEmail}</strong>
                </Card.Text>
                {/* <Button variant="primary" onClick={() => console.log(`Edit job ${job.JobTitle}`)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => console.log(`Delete job ${job.JobTitle}`)}>
                  Delete
                </Button> */}

                <Button
                  className="d-flex justify-content-center accentItem"
                  
                  
                >
                  <a href={job.JobLink} target="blank" className="jobLink reset-link">  Application Link</a>
                
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      {/* jobs && jobs.totalPages > 1 && (  // Added check for pagination visibility */}
        <div className="pagination-controls text-center">
          <Button
            className="accentItem"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="mx-2">
            Page {page} of {jobs.totalPages}
          </span>
          <Button
            className="accentItem"
            onClick={handleNextPage}
            disabled={page === jobs.totalPages}
          >
            Next
          </Button>
        </div>
    </Container>
  );
};

export default AllJobCard;
