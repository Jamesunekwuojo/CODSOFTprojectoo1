// BlogForm.js
import  { useState } from 'react';
import  PropTypes  from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import '../App.css'


const BlogForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: '',
    authorPhone: '',
    websiteLink: '',
    profilePhoto: null,
    articleTitle: '',
    articleFile: null,
    date: '',
    readTime: '',
    profilePhotoURL: '', // For storing the URL after upload
    articleLink: '', // URL to the full article
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
    // Here, you would typically upload the files (profile photo, article file)
    // and get the URLs to store in state.
    // For demonstration, assume profilePhotoURL and articleLink are set here
    const uploadedProfilePhotoURL = "url-to-uploaded-profile-photo";
    const uploadedArticleLink = "url-to-uploaded-article";

    onSubmit({
      ...formData,
      profilePhotoURL: uploadedProfilePhotoURL,
      articleLink: uploadedArticleLink,
      date: new Date().toLocaleDateString(), // or set this from a date input field
      readTime: '5', // Hardcoded for simplicity, could be calculated or set by user
    });
    // Reset form fields
    setFormData({
      authorName: '',
      authorEmail: '',
      authorPhone: '',
      websiteLink: '',
      profilePhoto: null,
      articleTitle: '',
      articleFile: null,
      date: '',
      readTime: '',
      profilePhotoURL: '',
      articleLink: '',
    });
  };

  return (
    <Container className="blogstyles p-4">
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
        <Form.Label>Website Link*</Form.Label>
        <Form.Control
          type="text"
          name="websiteLink"
          value={formData.websiteLink}
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
        <Form.Label>Article* (Upload your article in word or pages doc file)</Form.Label>
        <Form.Control
          type="file"
          name="articleFile"
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


 BlogForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
 }; 

export default BlogForm;
