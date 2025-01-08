import { Container, Row, Col, Card, Alert, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const JobSearchList = () => {
  const { state: { jobs } = {} } = useLocation();

  if (!jobs || jobs.length === 0) {
    return <Alert variant="info">No jobs found.</Alert>;
  }

  return (
    <Container>
      <Row>
      {jobs.Jobs.map((job) => (
          <Col md={4} key={job._id} className="mb-3">
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
                  className="d-flex justify-content-center"
                  variant="secondary"
                >
                  <a href={job.JobLink} target="blank">  Application Link</a>
                
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobSearchList;
