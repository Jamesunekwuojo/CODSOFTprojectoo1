// JobCard.js

import { useState } from 'react';
import { useGetEmployerJobsQuery } from '../../slices/jobsApiSlice.js';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';  // Added SweetAlert2 for deletion confirmation

const JobCard = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  const { data: jobs, error, isLoading } = useGetEmployerJobsQuery({ page, limit });

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) {
    toast.error('Failed to fetch jobs');
    return <p>Error fetching jobs</p>;
  }

  if (!jobs || jobs.Jobs.length === 0) {  // Added check for undefined jobs
    return <p>No jobs found for this employer.</p>;
  }

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < jobs.totalPages) setPage(page + 1);
  };

  const handleDeleteJob = (jobTitle) => {
    Swal.fire({
      title: `Are you sure you want to delete ${jobTitle}?`,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`Delete job ${jobTitle}`);
      }
    });
  };

  return (
    <Container className="job-card-container">
      <h2 className="text-center">Your Posted Jobs</h2>
      <Row>
        {jobs.Jobs.map((job) => (
          <Col md={4} key={job._id} className="mb-3">
            <Card className="job-card">
              <Card.Body className="job-card-body">
                <Card.Title>{job.JobTitle}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {job.JobLocation} <br />
                  <strong>Category:</strong> {job.JobCategory} <br />
                  <strong>Type:</strong> {job.JobType} <br />
                  <strong>Salary Range:</strong> {job.MinimumSalary} - {job.MaximumSalary} <br />
                  <strong>Deadline:</strong> {new Date(job.ApplicationDeadline).toLocaleDateString()} <br />
                  <strong>Description:</strong> {job.JobDescription} <br />  {/* Added <br /> */}
                  <strong>By:</strong> {job.EmployerEmail}
                </Card.Text>
                <Button className="mx-2" variant="primary" onClick={() => console.log(`Edit job ${job.JobTitle}`)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteJob(job.JobTitle)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {jobs && jobs.totalPages > 1 && (  // Added check for pagination visibility
        <div className="pagination-controls text-center">
          <Button
            variant="secondary"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="mx-2">
            Page {page} of {jobs.totalPages}
          </span>
          <Button
            variant="secondary"
            onClick={handleNextPage}
            disabled={page === jobs.totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </Container>
  );
};

export default JobCard;
