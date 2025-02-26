
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./ChooseUs.css"; // Make sure to add your styles in this file
import { Link } from 'react-router-dom';

function ChooseUs() {
  return (
    <Container className="d-flex justify-content-center my-5">
      <Row className="align-items-center chooseusdivRow">
        {/* Left Column with Images */}
        <Col xs={12} md={6} lg={6} className="d-flex flex-column">
          <div className='chooseUsDiv mb-4'>
            {/* Image or content for the first div */}
            <img  src="/chooseus2.png" alt="First" className="img-fluid" />
          </div>
          
          <div className='chooseUsDiv mb-4 ml-auto'>
            {/* Image or content for the second div */}
            <img src="/chooseus1.png" alt="Second" className="img-fluid" />
          </div>
          <div className='chooseUsDiv'>
            {/* Image or content for the third div */}
            <img src="/chooseus3.png" alt="Third" className="img-fluid" />
          </div>
        </Col>
        {/* Right Column with Text */}
        <Col xs={12} md={6} lg={6} className=" chooseUstext d-flex flex-column justify-content-center">
          <div className='textDiv'>
            <h2>Get the job of your dreams quick & easy.</h2>
            <p>
              Search all the open positions on the web. Get your own personalized salary estimate.
              Read reviews on over 30000+ companies worldwide.
            </p>
            <ul>
              <li>Direct Applications: Apply to jobs through links provided in each listing.</li>
              <li>Employer Insights: Stay informed with blog posts from industry professionals.</li>
              <li>Diverse Opportunities: Find jobs across multiple industries and career levels.</li>
            </ul>
            <Link to="/contact"><Button className='accentItem'>Contact us</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChooseUs;
