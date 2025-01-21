import JobPostForm from "../components/JobPostForm/Jobpostform";
import { Container, Row } from "react-bootstrap";
function JobPostpage() {
  return (
    <Container>
      <Row>
        <JobPostForm />
      </Row>
    </Container>
  );
}

export default JobPostpage;
