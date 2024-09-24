import { useState, useEffect } from "react";
import { Container, Row,  Col, Card, Button } from "react-bootstrap";
import axios from  'axios';
import Swal from 'sweetalert2'

const JobCard = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{

  

    }, [jobs])


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