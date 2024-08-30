import { useState, useEffect } from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2'


const BlogCard =() =>{

  const[blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem('token');

    axios.get('http://localhost:5000/api/blogs:byId' , {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(response =>{
     
      if(response.data.message == "No blogs found for this email"){
        Swal.fire({
          title: 'Warning',
          text: response.data.message,
          icon: 'warning',
          confirmButtonText:'OK'
        })
      }

      setBlogs(response.data);
    }

    )

    .catch(error =>{

      console.log("Error fetching blogs", error)
      // alert("Error fetching blogs");

      Swal.fire({
        title: 'Error!',
        text: error.response.data.error,  // The error message from your backend
        icon: 'error',
        confirmButtonText: 'OK'
      })

    })

  }, []);


  return(
    <Container>
      <Row>
       {blogs.map(blog => (
          <Col md={4} key={blog._id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={blog.profilePhoto.url} alt={blog.profilePhoto.filename} />
              <Card.Body>
                <Card.Title>{blog.articleTitle}</Card.Title>
                <Card.Text>{blog.articleDescript}</Card.Text>
                <Button variant="primary" href={blog.articleLink} target="_blank">Read More</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">By {blog.authorName} | {blog.authorEmail}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}

        
      </Row>
    </Container>
  );
}
export default BlogCard;


