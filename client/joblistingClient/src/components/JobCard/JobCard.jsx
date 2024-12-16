// JobCard.js

import { useState } from "react";
import { useGetEmployerJobsQuery } from "../../slices/jobsApiSlice.js";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Swal from "sweetalert2"; // Added SweetAlert2 for deletion confirmation
import { useUpdateJobMutation } from "../../slices/jobsApiSlice.js";
import { Modal, Form } from "react-bootstrap";
import { useDeleteJobMutation } from "../../slices/jobsApiSlice.js";

const JobCard = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({});
  const [updateJob] = useUpdateJobMutation();

  const [deleteJob] = useDeleteJobMutation();

  const {
    data: jobs,
    error,
    isLoading,
    refetch,
  } = useGetEmployerJobsQuery({ page, limit });

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) {
    toast.error("Failed to fetch jobs");
    return <p>Error fetching jobs</p>;
  }

  if (!jobs || jobs.Jobs.length === 0) {
    // Added check for undefined jobs
    return <p>No jobs found for this employer.</p>;
  }

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < jobs.totalPages) setPage(page + 1);
  };

  // const handleDeleteJob = (jobTitle) => {
  //   Swal.fire({
  //     title: `Are you sure you want to delete ${jobTitle}?`,
  //     showCancelButton: true,
  //     confirmButtonText: "Delete",
  //     cancelButtonText: "Cancel",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log(`Delete job ${jobTitle}`);
  //     }
  //   });
  // };

  const handleEditJob = (job) => {
    setSelectedJob(job);
    setFormData({
      JobTitle: job.JobTitle,
      JobLocation: job.JobLocation,
      JobType: job.JobType,
      MinimumSalary: job.MinimumSalary,
      MaximumSalary: job.MaximumSalary,
      ApplicationDeadline: job.ApplicationDeadline,
      JobDescription: job.JobDescription,
      JobCategory: job.JobCategory,
      JobLink: job.JobLink,
    });
    setShowEditModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateJob = async () => {
    try {
      await updateJob({ jobId: selectedJob._id, formData }).unwrap();
      toast.success("Job updated successfully");

      // Trigger a refetch to update the UI
      refetch();

      setShowEditModal(false);
    } catch (error) {
      toast.error("Failed to update job");
    }
  };

  // handle delete function
  const handleDeleteJob = async (jobId, jobTitle) => {
    const result = await Swal.fire({
      title: `Are you sure you want to delete "${jobTitle}"?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      icon: "warning",
    });

    if (result.isConfirmed) {
      try {
        await deleteJob(jobId).unwrap();

        toast.success("Job deleted successfully!");

        refetch(); // Refetch the updated jobs list
      } catch (error) {
        toast.error("Failed to delete job");
      }
    }
  };

  return (
    <Container className="job-card-container">
      <h2 className="text-center">Your Posted Jobs</h2>
      <Row>
        {jobs.Jobs.map((job) => (
          <Col md={4} key={job._id} className="mb-3">
            <Card className="job-card">
              <Card.Body className="job-card-body">
                <Card.Title>{job.JobTitle}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {job.JobLocation} <br />
                  <strong>Category:</strong> {job.JobCategory} <br />
                  <strong>Type:</strong> {job.JobType} <br />
                  <strong>Salary Range:</strong> {job.MinimumSalary} -{" "}
                  {job.MaximumSalary} <br />
                  <strong>Deadline:</strong>{" "}
                  {new Date(job.ApplicationDeadline).toLocaleDateString()}{" "}
                  <br />
                  <strong>Description:</strong> {job.JobDescription} <br />{" "}
                  {/* Added <br /> */}
                  <strong>By:</strong> {job.EmployerEmail}
                </Card.Text>

                <Button
                  className="mx-2"
                  variant="primary"
                  onClick={() => handleEditJob(job)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => handleDeleteJob(job._id, job.JobTitle)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {jobs &&
        jobs.totalPages > 1 && ( // Added check for pagination visibility
          <div className="pagination-controls text-center">
            <Button
              variant="secondary"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="mx-2">
              Page {page} of {jobs.totalPages}
            </span>
            <Button
              variant="secondary"
              onClick={handleNextPage}
              disabled={page === jobs.totalPages}
            >
              Next
            </Button>
          </div>
        )}

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                name="JobTitle"
                value={formData.JobTitle}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Location</Form.Label>
              <Form.Control
                type="text"
                name="JobLocation"
                value={formData.JobLocation}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Type</Form.Label>
              <Form.Control
                type="text"
                name="JobType"
                value={formData.JobType}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Minimum Salary</Form.Label>
              <Form.Control
                type="number"
                name="MinimumSalary"
                value={formData.MinimumSalary}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Maximum Salary</Form.Label>
              <Form.Control
                type="number"
                name="MaximumSalary"
                value={formData.MaximumSalary}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control
                type="date"
                name="ApplicationDeadline"
                value={formData.ApplicationDeadline}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="JobDescription"
                value={formData.JobDescription}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Job Category</Form.Label>
              <Form.Control
                type="text"
                name="JobCategory"
                value={formData.JobCategory}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Application Link</Form.Label>
              <Form.Control
                type="text"
                name="JobLink"
                value={formData.JobLink}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateJob}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default JobCard;
