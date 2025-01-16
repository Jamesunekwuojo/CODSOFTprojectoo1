import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { useGetAllBlogsQuery } from "../../slices/blogsApiSlice";
import { useLatestBlogsQuery } from "../../slices/blogsApiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Latestblogs = () => {
  const { data: blogs, isLoading, error } = useLatestBlogsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    // toast.error("Error fetching latest blogs");
    console.log(error?.data?.error || "Error fetching latest blogs");

    return <p>Failed to fetch latest blogs...</p>;
  }

  const truncateBlog = (bodyText, wordLimit) => {
    const words = bodyText.split(" ");

    if (words.length > wordLimit) {
      return { truncated: words.slice(0, wordLimit).join(" "), full: true };
    }
    return { truncated: bodyText, full: false };
  };

  return (
    <Container>
      <h2 className="text-center">Latest Blogs</h2>
      <Row>
        {blogs.Blogs.map((blog) => {
          const { truncated, full } = truncateBlog(blog.articleDescript, 6);

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
                    justifyContent: "space-between",
                  }}
                >
                  <Card.Title>{blog.articleTitle}</Card.Title>

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
    </Container>
  );
};

export default Latestblogs;
