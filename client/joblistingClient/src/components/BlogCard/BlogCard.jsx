import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { useGetEmployerBlogsQuery, useUpdateBlogMutation, useDeleteBlogMutation } from "../../slices/blogsApiSlice";
import { toast } from "react-toastify";

import Swal from "sweetalert2";

const BlogCard = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // Set the limit for blogs per page
  const { data: blogs, error, isLoading,   refetch, } = useGetEmployerBlogsQuery({ page, limit });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editBlog, setEditBlog] = useState(null); // Store the blog being edited
  const [updatedFile, setUpdatedFile] = useState(null); // Store the new file for the profile photo

  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation(); // Hook for updating a blog

  const [deleteBlog] = useDeleteBlogMutation();

  if (isLoading) return <p>Loading blogs...</p>;

  if (error) {
    toast.error("Failed to fetch blogs");
    return <p>Error fetching blogs</p>;
  }

  if (blogs.Blogs.length === 0) {
    return <p>No Blog found for this employer</p>;
  }

  // Handle opening the edit modal
  const handleEdit = (blog) => {
    setEditBlog(blog); // Set the selected blog for editing
    setUpdatedFile(null); // Reset file input when opening the modal
    setShowEditModal(true); // Show the modal
  };

  // Handle saving the edited blog
  const handleSave = async () => {
    // Update editBlog state synchronously to ensure no stale values
    setEditBlog((prev) => ({ ...prev }));
  
    // Construct FormData after ensuring state is updated
    const formData = new FormData();
    formData.append("authorName", editBlog.authorName);
    formData.append("authorEmail", editBlog.authorEmail);
    formData.append("authorPhone", editBlog.authorPhone);
    formData.append("articleTitle", editBlog.articleTitle);
    formData.append("articleDescript", editBlog.articleDescript);
    formData.append("articleLink", editBlog.articleLink);
  
    if (updatedFile) {
      formData.append("profilePhoto", updatedFile);
    }
  
    try {
      // Debugging before sending the request
      console.log("Form Data Entries:");
      formData.forEach((value, key) => console.log(key, value));
  
      // Send update request
      const update = await updateBlog({
        id: editBlog._id,
        formData,
      }).unwrap();

      refetch()
  
      console.log("Updated blog:", update);
      toast.success("Blog updated successfully!");
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };
  

  // Handle input changes inside the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditBlog((prev) => ({
      ...prev,
      [name]: value, // Update only the specific field
    }));
  };

  // Handle file input for profile photo
  const handleFileChange = (e) => {
    setUpdatedFile(e.target.files[0]);
  };


  const handleDelete = async (id, articleTitle ) => {

    const result = await Swal.fire({
      title: `Are you sure you want to delete "${articleTitle}"?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      icon: "warning",
    });

    if (result.isConfirmed) {
      try {

        await deleteBlog(id).unwrap();

        toast.success('Blog deleted successfully')

        refetch()
        
      } catch (error) {
        console.log(error);
        toast.error('Failed to delete blog')

        
      }
    }

  }

  return (
    <Container>
      <h2 className="text-center">Your Blog</h2>
      <Row>
        {blogs.Blogs.map((blog) => (
          <Col md={4} key={blog._id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={blog.profilePhoto.url}
                alt={blog.profilePhoto.filename}
              />
              <Card.Body>
                <Card.Title>{blog.articleTitle}</Card.Title>
                <Card.Text>{blog.articleDescript}</Card.Text>
                <Button className="m-2" variant="primary" onClick={() => handleEdit(blog)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(blog._id, blog.articleTitle)}>
                  Delete
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">By {blog.authorName} | {blog.authorEmail}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="pagination-controls text-center">
        <Button variant="secondary" onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <span className="mx-2">Page {page} of {blogs.totalPages}</span>
        <Button variant="secondary" onClick={() => setPage(page + 1)} disabled={page === blogs.totalPages}>
          Next
        </Button>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editBlog && (
            <Form>
              <Form.Group controlId="formAuthorName">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                  type="text"
                  name="authorName"
                  value={editBlog.authorName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formAuthorEmail">
                <Form.Label>Author Email</Form.Label>
                <Form.Control
                  type="email"
                  name="authorEmail"
                  value={editBlog.authorEmail}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formAuthorPhone">
                <Form.Label>Author Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="authorPhone"
                  value={editBlog.authorPhone}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formArticleTitle">
                <Form.Label>Article Title</Form.Label>
                <Form.Control
                  type="text"
                  name="articleTitle"
                  value={editBlog.articleTitle}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formArticleDescript">
                <Form.Label>Article Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="articleDescript"
                  value={editBlog.articleDescript}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formArticleLink">
                <Form.Label>Article Link</Form.Label>
                <Form.Control
                  type="text"
                  name="articleLink"
                  value={editBlog.articleLink}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formProfilePhoto">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control
                  type="file"
                  name="profilePhoto"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isUpdating}>
            {isUpdating ? "Saving..." : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BlogCard;
