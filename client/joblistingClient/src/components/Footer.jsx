
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube } from 'react-bootstrap-icons';
// import './Footer.css'; // Assuming you have some custom styles

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
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
              <a href="#" className="text-white m-2"><Facebook size={24} /></a>
              <a href="#" className="text-white m-2"><Twitter size={24} /></a>
              <a href="#" className="text-white m-2"><Instagram size={24} /></a>
              <a href="#" className="text-white m-2"><Youtube size={24} /></a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <h5>SUBSCRIBE</h5>
            <Form inline="true">
              <Form.Control type="email" placeholder="Email" className="mr-2" />
              <Button variant="primary" className="mt-2">SUBSCRIBE</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Unekwuojos Tech. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
