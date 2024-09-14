import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="d-flex justify-content-center flex-column">
      <Row>
        <Col>
          <header className="d-flex justify-content-center">
            <h1>About us</h1>
          </header>
        </Col>
      </Row>
      <Row className="img-row">
        <Col className="d-flex justify-content-center">
          <img className="rounded-5 w-50" src="/aboutus.png" />
        </Col>
      </Row>
      <Row className="text-row">
        <Col className="d-flex mw-25 justify-content-center">
          <p>
            Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda asperiores quibusdam dolorem voluptatem? Facere ab nulla,
            reiciendis rem voluptatem fugit. Accusantium nihil fuga magni,
            facere sed repudiandae doloremque, nesciunt odit est dolore et
            dolorem? Reprehenderit dicta quos consequatur. Voluptatibus
            voluptatem minus veniam officia voluptate vero sapiente assumenda
            obcaecati officiis dignissimos.
          </p>
        </Col>
      </Row>

      <Row className="explore-button">
        <Col className="d-flex justify-content-center">
          <button className=" button btn btn-primary p-4  rounded-5 ">
            <Link className="button-link" to="/browse-job">Explore now!</Link>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
