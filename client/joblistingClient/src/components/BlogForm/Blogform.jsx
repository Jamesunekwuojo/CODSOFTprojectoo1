// BlogForm.js
import  { useState } from 'react';
// import  PropTypes  from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import Axios from 'axios';
import './Blogform.css';
import Swal from 'sweetalert2'




const BlogForm = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: '',
    authorPhone: '',
    // websiteLink: '',
    profilePhoto: null,
    articleTitle: '',
    articleDescript: '',
    // date: '5',
    // readTime: '5',
    articleLink: '',  
  });




  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('authorName', formData.authorName);
    data.append('authorEmail', formData.authorEmail);
    data.append('authorPhone', formData.authorPhone);
    data.append('websiteLink', formData.websiteLink);
    data.append('profilePhoto', formData.profilePhoto);
    data.append('articleLink', formData.articleLink);
    data.append('articleTitle', formData.articleTitle);
    data.append('articleDescript', formData.articleDescript);
    // data.append('readTime', formData.readTime );
    // data.append('date', formData.date);

    const token = localStorage.getItem('token');

  

    Axios.post('http://localhost:5000/api/createblog', data, {
      headers:{
        'Content-Type': 'multipart/form-data',

        'Authorization': `Bearer ${token}`
        
      }
    })
    .then((response) => {
    
      console.log(response.data);

      // const token = localStorage.setItem('token', response.data.token);

      // if(response.data.token){
      //   token;
        
      // }


      Swal.fire({
        title: 'Blog successfully created',
        text: response.data.message,
        icon: 'success',
        confirmButtonText:'ok'
      })
    })

   
    .catch(error =>{

      
      console.log(error.response ? error.response.data : error.message)
      if(error.response){

        
        Swal.fire({
          title: 'Error!',
          text: error.response.data.error,  // The error message from your backend
          icon: 'error',
          confirmButtonText: 'OK'
        });

      } else {

        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
      });

      }
      
    });
    
    
  };

  return (
    <Container className="blogstyles p-3 ">
   
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAuthorName">
        <Form.Label>Author Name*</Form.Label>
        <Form.Control
          type="text"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formAuthorEmail">
            <Form.Label>Author Email*</Form.Label>
            <Form.Control
              type="email"
              name="authorEmail"
              value={formData.authorEmail}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formAuthorPhone">
            <Form.Label>Author Phone*</Form.Label>
            <Form.Control
              type="text"
              name="authorPhone"
              value={formData.authorPhone}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formWebsiteLink">
        <Form.Label>Article Link*</Form.Label>
        <Form.Control
          type="text"
          name="articleLink"
          value={formData.articleLink}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProfilePhoto">
        <Form.Label>Upload Profile Photo* (1200 x 1200px, jpg or png file)</Form.Label>
        <Form.Control
          type="file"
          name="profilePhoto"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formArticleTitle">
        <Form.Label>Article Title*</Form.Label>
        <Form.Control
          type="text"
          name="articleTitle"
          value={formData.articleTitle}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formArticleFile">
        <Form.Label>Article Description* (Write a brief description about your article)</Form.Label>
        <Form.Control
          type="text"
          name="articleDescript"
          value={formData.articleDescript}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  </Container>
  );
};


//  BlogForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//  }; 

export default BlogForm;
