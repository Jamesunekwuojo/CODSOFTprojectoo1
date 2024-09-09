import {useEffect, useState} from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./CompleteProfile.css";
import axios from "axios";
function CompleteProfile() {
  const [formData, setFormData] = useState({

    profilePics :'',
    cityName : '',

  })

 

  const handleChange = (e) => {
    // handle change event

    const {name, value, files} = e.target;
    setFormData({
      ...formData,
      [name] : files ? files[0] : value 

    })
    
  }

  

  useEffect(() => {

    axios.get('http://localhost:5000/api/signin')
    .then(response =>{
      console.log(response.data);


    })
    .catch(error =>{
      
      console.log(error)

    })
    

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = axios.post('http://localhost:5000/api/completeProfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`
      }
    })
    
    try {

      const data = response.data



    } catch (error) {

    }


  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <h1>Complete Profile</h1>
          </div>
          <Form className="border rounded-5 p-4 border-secondary-subtle formContainer" onSubmit={handleSubmit}>
            <Form.Group className="mt-4">
              <Form.Label>Upload ur profile picture</Form.Label>
              <Form.Control type="file" name="profilePics" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter city name</Form.Label>
              <Form.Control type="text" name="cityName" onChange = {handleChange}></Form.Control>
            </Form.Group>

            <Form.Group className="d-flex justify-content-center mt-4">
              <Button type='submit'>Submit</Button>

            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default CompleteProfile;
