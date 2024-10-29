// import { useState, useEffect } from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { useGetAllBlogsQuery} from "../../slices/blogsApiSlice";
import { toast } from "react-toastify";




const AllBlog =() =>{

  const {data: blogs, error, isLoading} = useGetAllBlogsQuery();

  if(isLoading) return <p> Loading blogs...</p>

  if(error) {
    toast.error('Failed to fetch blogs');
    return  <p> Error fetching blogs</p>

  }

  if (blogs.Blogs.length ==0) {
    return <p> No Blog found found for this employer</p>
  }


  


  return(
    <Container>
      <h2> Your Blog</h2>
      <Row>
       {blogs.Blogs.map(blog => (
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
export default AllBlog;


