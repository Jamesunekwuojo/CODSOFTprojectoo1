import { Container, Row } from 'react-bootstrap';
import Searchdiv from "../components/Searchdiv"

function Homepage() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="justify-content-center">
      <h1 className="text-center">+2000 Jobs Available</h1>
        <h2 className="text-center">EXPLORE JOBHUB</h2>

        <Searchdiv></Searchdiv>
      </Row>

    


    </Container>
  );
}

export default Homepage;