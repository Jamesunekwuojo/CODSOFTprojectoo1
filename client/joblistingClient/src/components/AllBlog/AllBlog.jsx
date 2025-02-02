import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useGetAllBlogsQuery } from "../../slices/blogsApiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // Set the limit for blogs per page

  const { data: blogs, error, isLoading } = useGetAllBlogsQuery({ page, limit });

  if (!blogs || blogs.Blogs.length === 0) {
    return <p>No Blog found</p>;
  }

  if (isLoading) return <p>Loading blogs...</p>;

  if (error) {
    toast.error("Failed to fetch blogs");
    return <p>Error fetching blogs</p>;
  }

 

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < blogs.totalPages) setPage(page + 1);
  };

  const truncateBlog = (bodyText, wordLimit) => {
    const words = bodyText.split(" ");

    if (words.length > wordLimit) {
      return { truncated: words.slice(0, wordLimit).join(" "), full: true };
    }
    return { truncated: bodyText, full: false };
  };

  return ( 
    <Container>
      <h2 className="text-center">Popular Blogs Available</h2>
       <Row>
              {blogs.Blogs.map((blog) => {
                const { truncated, full } = truncateBlog(blog.articleDescript, 10);
      
                return (
                  <Col md={4} key={blog._id} className="mb-4 ">
                    <Card style={{ width: "17rem", height: "24rem" }}>
                      <div style={{ height: "150px", overflow: "hidden" }}>
                        <Card.Img
                          variant="top"
                          src={blog.profilePhoto.url}
                          alt={blog.profilePhoto.filename}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
      
                      <Card.Body
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          
                        }}
                      >
                        <Card.Title className="fw-bold">{blog.articleTitle}</Card.Title>
      
                        <Card.Text>
                          {truncated}
                          {full && (
                            <Link className="mx-4" to={`/blog/${blog._id}`}>
                              Read more
                            </Link>
                          )}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          By {blog.authorName} | {blog.authorEmail}
                        </small>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
            </Row>
      {/* Pagination Controls */}
      <div className="pagination-controls text-center">
        <Button variant="secondary" onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </Button>
        <span className="mx-2">
          Page {page} of {blogs.totalPages}
        </span>
        <Button variant="secondary" onClick={handleNextPage} disabled={page === blogs.totalPages}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default AllBlog;