// JobCard.js
import { useGetJobsQuery } from '../../slices/jobsApiSlice.js';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AllJobCard = () => {
  const { data: jobs, error, isLoading } = useGetJobsQuery();

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) {
    toast.error('Failed to fetch jobs');
    console.log(error)
    return <p>Error fetching jobs</p>;
  }

  if (jobs.Jobs.length === 0) {
    return <p>No jobs found for this employer.</p>;
  }

  return (
    <Container className="job-card-container">
      <h2 className='text-center'>Financial Jobs Available</h2>
      <Row>
        {jobs.Jobs.map((job) => (
          <Col md={4} key={job._id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{job.JobTitle}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {job.JobLocation} <br />
                  <strong>Type:</strong> {job.JobType} <br />
                  <strong>Salary Range:</strong> {job.MinimumSalary} - {job.MaximumSalary} <br />
                  <strong>Deadline:</strong> {new Date(job.ApplicationDeadline).toLocaleDateString()} <br />
                  <strong>Description:</strong> {job.JobDescription}
                  <strong>By:{job.EmployerEmail}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => console.log(`Edit job ${job.JobTitle}`)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => console.log(`Delete job ${job.JobTitle}`)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllJobCard;
