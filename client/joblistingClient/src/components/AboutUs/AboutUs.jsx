import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="d-flex justify-content-center flex-column">
      <Row>
        <Col>
          <header className="d-flex justify-content-center mt-4">
            <h1>About us</h1>
          </header>
        </Col>
      </Row>
      <Row className="img-row">
        <Col className="d-flex justify-content-center">
          <img className="image rounded-5 " src="/aboutus.png" />
        </Col>
      </Row>
      <Row className="text-row">
        <Col className="d-flex mw-25 justify-content-center flex-column">
          <p>
          Welcome to JOB HUB, a dynamic job portal designed to connect employers with talented job seekers efficiently. Whether you're an employer looking to post job opportunities or a candidate searching for your next career move, JOB HUB provides a seamless experience tailored to your needs.
          </p>

          <span className="mb-2 fs-2">For Employers</span>

          <p>At JOB HUB, employers can easily create and post job listings, ensuring that opportunities reach the right candidates. Beyond job postings, employers can engage with the community by sharing insightful blog posts, offering industry tips, and guiding potential applicants on career growth.</p>

          <span className="mb-2 fs-2">For Job Seekers</span>

          <p>Our platform enables job seekers to explore a wide range of job listings and apply directly through the provided links. We aim to streamline the job search process, making it easier for candidates to find and secure their dream roles.</p>

       

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
