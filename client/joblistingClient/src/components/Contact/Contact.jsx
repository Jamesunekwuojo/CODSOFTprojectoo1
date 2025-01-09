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
    <Container>
      <Row>
        <h2 className="text-center">Contact us on our social media handles:</h2>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          {" "}
          <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2"/>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2"  />
          <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2"/>
          <FontAwesomeIcon icon={faXTwitter} size="2x" className="mx-2" />
          <FontAwesomeIcon icon={faYoutube} size="2x" className="mx-2"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
