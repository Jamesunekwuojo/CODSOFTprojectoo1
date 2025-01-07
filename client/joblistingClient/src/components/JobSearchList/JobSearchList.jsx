import { useState } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useSearchJobQuery } from "../../slices/jobsApiSlice";
import Searchdiv from "../Searchdiv/Searchdiv";
import { useLocation } from "react-router-dom";

const JobSearchList = ({jobs}) => {
  


  return (
    <div>
     
      {isLoading && <div>Loading...</div>}

      {isError && (
        <Alert variant="danger">
          {" "}
          Error: {error.data?.message || "Something went wrong"}
        </Alert>
      )}

      <Container>
        <Row>
          {jobs?.Jobs?.map((job) => (
            <Col key={job.id} md={4}>
              <Card>
                <Card.Body>
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
                    <strong>Description:</strong> {job.JobDescription} <br />
                    <strong>By:</strong> {job.EmployerEmail}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JobSearchList;
