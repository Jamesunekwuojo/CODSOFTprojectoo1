import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const JobSearchList = () => {
  const { state: { jobs } = {} } = useLocation();

  if (!jobs || jobs.length === 0) {
    return <Alert variant="info">No jobs found.</Alert>;
  }

  return (
    <Container>
      <Row>
        {jobs?.jobs?.map((job) => (
          <Col key={job.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{job.JobTitle}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {job.JobLocation} <br />
                  <strong>Category:</strong> {job.JobCategory} <br />
                  <strong>Type:</strong> {job.JobType} <br />
                  <strong>Salary Range:</strong> {job.MinimumSalary} -{" "}
                  {job.MaximumSalary} <br />
                  <strong>Deadline:</strong>{" "}
                  {new Date(job.ApplicationDeadline).toLocaleDateString()} <br />
                  <strong>Description:</strong> {job.JobDescription} <br />
                  <strong>By:</strong> {job.EmployerEmail}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobSearchList;
