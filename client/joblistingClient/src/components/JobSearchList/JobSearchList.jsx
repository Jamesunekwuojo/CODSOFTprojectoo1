import { useState } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

import { useSearchJobQuery } from "../../slices/jobsApiSlice";

import Searchdiv from "../Searchdiv/Searchdiv";

const JobSearchList = () => {
  const [searchParams, setSearchParams] = useState({});

  const {
    data: jobs,
    isLoading,
    isError,
    error,
  } = useSearchJobQuery(searchParams, {
    skip:
      !searchParams.JobCategory &&
      !searchParams.JobType &&
      !searchParams.KeyWords, // to skip initial fetch
  });

  const handleSearch = (params) => {
    setSearchParams(params); //updating the search params
  };

  // if (isLoading){
  //     return <div>Loading...</div>
  // }

  // if (isError){
  //     return <Alert.danger>Error: {error.data?.message || "Something went wrong"}</Alert.danger>
  // }

  return (
    <div>
      <Searchdiv onSearchResults={handleSearch} />

      {isLoading && <div>Loading...</div>}

      {isError && (
        <Alert.danger>
          {" "}
          Error:{error.data?.message || "Something went wrong"}
        </Alert.danger>
      )}

      <Container>
        <Row>
          {jobs.Jobs.map((job) => (
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
                    <strong>Description:</strong> {job.JobDescription} <br />{" "}
                    {/* Added <br /> */}
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
