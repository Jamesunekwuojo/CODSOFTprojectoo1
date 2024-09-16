import { useState } from "react";
import { Container, Row, Col Card, Button } from "react-bootstrap";

const JobCard = () => {

    const [jobs, setJobs] = useState([])

    return(
        <Container>
            <Row>

                {jobs.map(job => (
                    <Col key={job._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
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