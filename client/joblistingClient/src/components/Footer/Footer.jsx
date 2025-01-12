import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons";
// import './Footer.css'; // Assuming you have some custom styles
import { useSubscribeMutation } from "../../slices/subscribeApiSlice";
import { toast } from "react-toastify";




function Footer() {
  const [email, setEmail] = useState("");

  const [subscribe, { isLoading, }] = useSubscribeMutation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await subscribe({email}).unwrap();
      console.log("Subscribed successful", response);

      toast.success("Subscribed successful");

      setEmail("");
    } catch (error) {
      console.log("Error subscribing", error);

      const errMessage = error?.data?.error;

      toast.error(errMessage)

      // toast.error(error?.data?.message);
    }
  };

  return (
    <footer className="footer mt-5 py-3 bg-dark text-white">
      <Container>
        <Row className="mb-3">
          <Col md={3}>
            <h5>LIST TITLE</h5>
            <ul className="list-unstyled">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>LIST TITLE</h5>
            <ul className="list-unstyled">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>LIST TITLE</h5>
            <ul className="list-unstyled">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>LIST TITLE</h5>
            <ul className="list-unstyled">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={3}>
            <h5>LIST TITLE</h5>
            <ul className="list-unstyled">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </Col>
          <Col md={3} className="text-center">
            <h5>FOLLOW US</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white m-2">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white m-2">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white m-2">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white m-2">
                <Youtube size={24} />
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <h5>SUBSCRIBE</h5>
            <Form inline="true" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  onChange={handleChange}
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Email"
                  className="mr-2"
                  required
                />
                <Button variant="primary" type="submit" className="mt-2" disabled={isLoading}>
                  {isLoading ? 'submitting...': 'submit'}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Unekwuojos Tech. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
