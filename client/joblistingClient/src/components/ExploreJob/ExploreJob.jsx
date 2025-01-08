import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useExploreJobQuery } from "../../slices/jobsApiSlice";

const ExploreJob = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  console.log(params)

  const category = params.get("JobCategory");

  console.log(category)

  const { data: jobs, error, isLoading } = useExploreJobQuery(category);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching jobs</div>;

  return (
    <Container>
      <Row>
        <h1>Jobs in {category}</h1>
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

export default ExploreJob;
// 09042925004

// 09124901779
