import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { useGetAllBlogsQuery } from "../../slices/blogsApiSlice";
import { useLatestBlogsQuery } from "../../slices/blogsApiSlice";
import { toast } from "react-toastify";

const Latestblogs = () => {
    const { data: blogs, isLoading, error } = useLatestBlogsQuery();

    if(isLoading) return <p>Loading...</p>

    if(error) {
        toast.error("Error fetching latest blogs");
        console.log(error?.data?.error || "Error fetching latest blogs")

        return <p>Failed to fetch latest blogs...</p>
    }



//   const [page, setPage] = useState(1);
//   const [limit] = useState(6); // Set the limit for blogs per page

//   const { data: blogs, error, isLoading } = useGetAllBlogsQuery({ page, limit });

//   if (isLoading) return <p>Loading blogs...</p>;

//   if (error) {
//     toast.error("Failed to fetch blogs");
//     return <p>Error fetching blogs</p>;
//   }

//   if (blogs.Blogs.length === 0) {
//     return <p>No Blog found</p>;
//   }

//   const handlePreviousPage = () => {
//     if (page > 1) setPage(page - 1);
//   };

//   const handleNextPage = () => {
//     if (page < blogs.totalPages) setPage(page + 1);
//   };

  return ( 
    <Container>
      <h2 className="text-center">Latest Blogs</h2>
      <Row>
        {blogs.Blogs.map((blog) => (
          <Col md={4} key={blog._id} className="mb-4">
            <Card className="job-card" style={{ width: '18rem', height: '24rem' }}>
              <div className="image-container" style={{ height: '150px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={blog.profilePhoto.url}
                  alt={blog.profilePhoto.filename}
                  className="circular-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <Card.Body className="job-card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Card.Title>{blog.articleTitle}</Card.Title>
                <Card.Text>{blog.articleDescript}</Card.Text>
                <Button variant="primary" href={blog.articleLink} target="_blank">
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  By {blog.authorName} | {blog.authorEmail}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
     
    </Container>
  );
};

export default Latestblogs;