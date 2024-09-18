import { useState, useEffect } from "react";
import { Container, Row,  Col, Card, Button } from "react-bootstrap";
import axios from  'axios';
import Swal from 'sweetalert2'

const JobCard = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{

        const token = localStorage.getItem('token');

        axios.get('http://localhost:5000/api/jobsbyId', {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((response) => {
            setJobs(jobs);
            console.log('Jobs successfully fetched', response.data)


           

        })
        .catch((error)=> {

            console.error(error.response.data.error);
            Swal.fire({
                title:'error',
                text: error.response.data.error,
                icon:'error',
                confirmButtonText:'Ok'

            })

        })

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