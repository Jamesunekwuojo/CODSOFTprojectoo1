import { Container, Row, Col } from 'react-bootstrap';
import Searchdiv from "../components/Searchdiv";

import "../App.css"


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

      <Row>
        <Col className="d-flex m-4 justify-content-center">
        <h4>Popular Category</h4>
        </Col>
      </Row>

      <Row className="justify-content-center">

        
        <Col className="d-flex justify-content-center">
          <div className="box custom-box p-4 border rounded shadow-sm">
            <img/>
          </div>
        </Col>
        <Col className="d-flex justify-content-center">
          <div className="box custom-box p-4 border rounded shadow-sm">Box 2</div>
        </Col>
        <Col className="d-flex justify-content-center">
          <div className="box p-4  custom-box border rounded shadow-sm">Box 3</div>
        </Col>

        <Col className="d-flex justify-content-center">
          <div className="box p-4 custom-box  border rounded shadow-sm">Box 3</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
