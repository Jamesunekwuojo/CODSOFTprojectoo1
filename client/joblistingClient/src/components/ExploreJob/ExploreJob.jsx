import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useExploreJobQuery } from "../../slices/jobsApiSlice";

const ExploreJob = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const category = params.get("category");

  const { data: jobs, error, isLoading } = useExploreJobQuery(category);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching jobs</div>;

  return (
    <Container>
      <Row>
        <h1>Jobs in {category}</h1>
        {jobs.map((job)=> (
            <Col key={job.id} md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Text>{job.description}</Card.Text>



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
