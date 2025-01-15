import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center flex-column">
      <Row></Row>

      <Row className="d-flex flex-column">
        <Col>
          <h2 className="text-center">
            Contact us on our social media handles:
          </h2>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          
          <a href="">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/unekwuojo-james-b2511225b/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
          </a>
          <a href="https://x.com/james_unekwuojo">
            
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2x"
              className="mx-2"
            />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faYoutube} size="2x" className="mx-2" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
