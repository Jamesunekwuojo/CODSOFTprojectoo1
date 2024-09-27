import { useState, useEffect } from "react";
import { Container, Row,  Col, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useGetEmployerJobsQuery } from "../../slices/jobsApiSlice";


const JobCard = () => {

    const [getEmployerJobs, {isLoading}] = useGetEmployerJobsQuery()

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const handleResponse = async() => {

            try {
                const response = await getEmployerJobs();
    
                setJobs(response)
    
            } catch (error) {
                console.log("error fetching blog", error.message)
                toast.error(error.response.error)
    
            }
    
        }

    }, [getEmployerJobs])

 



    return(
        <Container>
            <Row>

                {jobs.map(job => (
                    <Col key={job._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{job.JobTitle}</Card.Title>

                                <Card.Text>Location:{job.JobLocation}</Card.Text>

                                <Card.Text>Deadline:{job.ApplicationDeadline}</Card.Text>

                                <Card.Text>
                                    <Button>Delete Job</Button>
                                </Card.Text>

                                <Card.Footer>
                                    <small >By{job.EmployerEmail}</small>
                                </Card.Footer>

                            </Card.Body>
                        </Card>
                    </Col>
                ) 

                )}


            </Row>

        </Container>
    )

}
export default JobCard