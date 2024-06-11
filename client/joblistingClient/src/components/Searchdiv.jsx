
import { Form, FormControl, Button, Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

function Searchdiv() {
  return (
    <Container className="mt-2  " style={{ maxWidth: '800px', border: '1px solid #ccc',  borderRadius:'5px' }}>
      <Form>
        <Row className="align-items-center mt-4">

          <Col xs={12} md={4} className="mb-2">

            <Form.Group controlId="formKeywords" className="d-flex align-items-center" >
              <FaBriefcase className="me-2" />
              <FormControl type="text" placeholder="Search for Jobs " style={{height:'50px'}}/>
            </Form.Group>

          </Col>

          <Col xs={12} md={3} className="mb-2">
            <Form.Group controlId="formLocation" className="d-flex align-items-center" >
              <FaMapMarkerAlt className="me-2" />
              <DropdownButton 
                id="dropdown-location"
                title="Location"
                variant="light"
                className="flex-grow-1"
                style={{borderLeft:'1px solid #ccc ', }}
              >
                <Dropdown.Item href="#/action-1">Location 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Location 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Location 3</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>

          <Col xs={12} md={3} className="mb-2">
            <Form.Group controlId="formCategory" className="d-flex align-items-center">

              <FaBriefcase className="me-2" />
              <DropdownButton
                id="dropdown-category"
                title="Category"
                variant="light"
                className="flex-grow-1"
                style={{borderLeft:'1px solid #ccc ',  }}
              >
                <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>

          <Col xs={12} md={2} className="mb-2">
            <Button variant="success" className="w-100" style={{height:'50px'}}>
              Search
            </Button>
          </Col>

        </Row>
      </Form>
    </Container>
  );
}

export default Searchdiv;
