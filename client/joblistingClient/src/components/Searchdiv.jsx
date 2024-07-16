import { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import "../App.css"

function Searchdiv() {
  // const [selectedLocation, setSelectedLocation] = useState('Location');
  // const [selectedCategory, setSelectedCategory] = useState('Category');

  // const handleLocationSelect = (e) => {
  //   setSelectedLocation(e);
    
  // };

  // const handleCategorySelect = (e) => {
  //   setSelectedCategory(e);
  // };

  return (
    <Container className="mt-5 w-20">
      <Row className="justify-content-left">

        <Col className="form-container " >
        <h2>Find Your Expected Job</h2>
        <p>Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
      <Form>
        <Form.Group controlId="searchKeywords" className="m-2">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Search your Keywords" className="p-3 mb-4"/>
        </Form.Group>

        <Form.Group controlId="searchLocation" className="m-2">
          <Form.Label>Location</Form.Label>
          <Form.Control as="select" className="p-3 mb-4">
            <option>Select...</option>
            <option>Location 1</option>
            <option>Location 2</option>
            <option>Location 3</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="searchJobType" className="m-2">
          <Form.Label>Job Type</Form.Label>
          <Form.Control as="select" className="p-3 mb-4">
            <option>Select...</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
          </Form.Control>
        </Form.Group>

        <Button variant="success" type="submit" className="mb-4">
          Search
        </Button>
      </Form>

        </Col>
      </Row>
      
    </Container>
  );
}

export default Searchdiv;
