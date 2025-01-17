import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useExploreJobQuery } from "../../slices/jobsApiSlice";

const ExploreJob = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  console.log(params);

  const category = params.get("JobCategory");

  console.log(category);

  const {
    data: jobs,
    isError,
    error,
    isLoading,
  } = useExploreJobQuery(category);

  const errorMessage = error?.data?.message;

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log(errorMessage);
    return (
      <div>
        {" "}
        <Alert className="mx-4" variant="danger">
          {error?.data?.message} 
        </Alert>
        {/* {error?.data?.message}{" "} */}
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <h1 className="text-center">Jobs in {category}</h1>
        {jobs.map((job) => (
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

                <Button
                  className="d-flex justify-content-center"
                  variant="secondary"
                >
                  <a href={job.JobLink} target="blank">
                    {" "}
                    Application Link
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreJob;
// 09042925004

// 09124901779
