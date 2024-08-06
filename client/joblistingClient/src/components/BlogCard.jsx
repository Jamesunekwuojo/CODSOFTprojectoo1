import { useState, useEffect } from "react";
import {Conatiner, Row, Col, Card, Button} from "react-bootstrap";
import Axios from "axios";


const Blogcard =() =>{

  const[blogs, setBlogs] = useState([]);

  useEffect(()=>{

    Axios.get('http://localhost:5000/api/getblogs')
    .then(response =>{
      setBlogs(response.data);
    }

    )

    .catch(err =>{

      console.log("Error fetching blogs", err)
      alert("Error fetching blogs");

    })

  }, []);


  return(
    <Conatiner>
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
    </Conatiner>
  );
}
export default Blogcard;


