import { Container, Row, Col } from 'react-bootstrap';
import Searchdiv from "../components/Searchdiv";

function Homepage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Row className="justify-content-center text-center mb-4">
        <Col>
          <h1>+2000 Jobs Available</h1>
          <h2>EXPLORE JOBHUB</h2>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col>
          <Searchdiv />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center">
          <div className="box p-4 border rounded shadow-sm">Box 1</div>
        </Col>
        <Col className="d-flex justify-content-center">
          <div className="box p-4 border rounded shadow-sm">Box 2</div>
        </Col>
        <Col className="d-flex justify-content-center">
          <div className="box p-4 border rounded shadow-sm">Box 3</div>
        </Col>

        <Col className="d-flex justify-content-center">
          <div className="box p-4 border rounded shadow-sm">Box 3</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
