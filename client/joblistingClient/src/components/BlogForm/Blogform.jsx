import { useState, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Blogform.css';
import { useCreateBlogMutation } from "../../slices/blogsApiSlice";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const BlogForm = () => {
  const fileInputRef = useRef(null); // For handling file input
  const { userInfo } = useSelector((state) => state.auth); // User info from Redux state
  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: userInfo.user.email, // Assuming user email is present in userInfo
    authorPhone: '',
    articleTitle: '',
    articleDescript: '',
    articleLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const data = new FormData();

    // Append form data fields to FormData
    data.append('authorName', formData.authorName);
    data.append('authorEmail', formData.authorEmail);
    data.append('authorPhone', formData.authorPhone);
    data.append('articleLink', formData.articleLink);
    data.append('articleTitle', formData.articleTitle);
    data.append('articleDescript', formData.articleDescript);

    // Append file directly from file input
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      data.append('profilePhoto', fileInputRef.current.files[0]);
    } else {
      toast.error("Please upload a profile photo", );
      return;
    }

    for (let pair of data.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const response = await createBlog(data).unwrap();
      console.log("Blog posted successfully", response);
      toast.success('Successfully posted blog');
    } catch (error) {
      toast.error('Error creating blog');
      console.error(error);
    }
  };

  return (
    <Container className="blogform_container p-3">
      <Form onSubmit={handleSubmit} >
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
                readOnly
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
{/* 
        <Form.Group controlId="formWebsiteLink" className='mt-2'>
          <Form.Label>Article Link*</Form.Label>
          <Form.Control
            type="text"
            name="articleLink"
            value={formData.articleLink}
            onChange={handleChange}
            required
          />
        </Form.Group> */}

        <Form.Group controlId="formProfilePhoto" className='mt-2'>
          <Form.Label>Upload blog background picture (1200 x 1200px, jpg or png file)</Form.Label>
          <Form.Control
            type="file"
            name="profilePhoto"
            ref={fileInputRef}
            required
          />
        </Form.Group>

        <Form.Group controlId="formArticleTitle" className='mt-2'>
          <Form.Label>Article Title*</Form.Label>
          <Form.Control
            type="text"
            name="articleTitle"
            value={formData.articleTitle}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formArticleFile" className='mt-2'>
          <Form.Label>Write article (external links to other pages can also be included)</Form.Label>
          <Form.Control
            as="textarea"
            name="articleDescript"
            value={formData.articleDescript}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" disabled={isLoading}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BlogForm;
