// BlogForm.js
import  { useState } from 'react';
// import  PropTypes  from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Blogform.css';
import Swal from 'sweetalert2';
import  {useCreateBlogMutation} from "../../slices/blogsApiSlice";
import { toast } from 'react-toastify';




const BlogForm = () => {

  const [createBlog, {isLoading}] = useCreateBlogMutation()


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('authorName', formData.authorName);
    data.append('authorEmail', formData.authorEmail);
    data.append('authorPhone', formData.authorPhone);
   
    data.append('profilePhoto', formData.profilePhoto);
    data.append('articleLink', formData.articleLink);
    data.append('articleTitle', formData.articleTitle);
    data.append('articleDescript', formData.articleDescript);


    try {

      
    const response =  await createBlog(formData).unwrap()
    console.log("Blog posted successfully", response)

    toast.success('successfully posted blog')

    } catch (error) {

      console.log(error)

    }


 

   
 
  };

  return (
    <Container className="blogform_container p-3 ">
   
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

      <Form.Group controlId="formWebsiteLink" className='mt-2'>
        <Form.Label>Article Link*</Form.Label>
        <Form.Control
          type="text"
          name="articleLink"
          value={formData.articleLink}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProfilePhoto" className='mt-2'>
        <Form.Label>Upload Profile Photo* (1200 x 1200px, jpg or png file)</Form.Label>
        <Form.Control
          type="file"
          name="profilePhoto"
          onChange={handleChange}
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
        <Form.Label>Article Description* (Write a brief description about your article)</Form.Label>
        <Form.Control
          as="textarea"
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
