import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons";
import { useSubscribeMutation } from "../../slices/subscribeApiSlice";
import { toast } from "react-toastify";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [email, setEmail] = useState("");

  const [subscribe, { isLoading }] = useSubscribeMutation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await subscribe({ email }).unwrap();
      console.log("Subscribed successfully", response);

      toast.success("Subscribed successfully");
      setEmail("");
    } catch (error) {
      console.log("Error subscribing", error);

      const errMessage = error?.data?.error;
      toast.error(errMessage || "Error subscribing");
    }
  };

  return (
    <footer className="footer mt-5 py-3  text-white footerContainer">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={3} className="text-center">
            <h5>FOLLOW US</h5>
            <div className="d-flex justify-content-center">

              <a href="https://www.facebook.com/profile.php?id=61561430930897" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size=""
                  className="mx-2 "
                />
              </a>

              <a href="https://x.com/james_unekwuojo" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} size="" className="mx-2" />
              </a>

              <a href="https://www.instagram.com/unekwuojo_james/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size=""
                  className="mx-2"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/unekwuojo-james-b2511225b/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="" className="mx-2" />
              </a>
              {/* <a href="#" className="text-white m-2">
                <Youtube size={24} />
              </a> */}
            </div>
          </Col>
          <Col md={6} className="text-center">
            <h5>SUBSCRIBE</h5>
            <Form onSubmit={handleSubmit} className="d-flex align-items-center">
              <Form.Control
                onChange={handleChange}
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                className="mx-2 flex-grow-1"
                required
              />
              <Button type="submit" className="accentItem" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Unekwuojos Tech. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
