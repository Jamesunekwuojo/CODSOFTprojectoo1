import { Container, Row, Col } from "react-bootstrap"


const AboutUs = () => {
    return (
        <Container className="d-flex justify-content-center flex-column">
            <Row>
                <Col>
                <header className="d-flex justify-content-center">
                    <h1>About us</h1>
                </header>
                
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                <img src="/aboutus.png"/>
                

                </Col>
            </Row>
            <Row className="">
                <Col className="d-flex justify-content-center">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut aliquid itaque consequatur quo perspiciatis fuga impedit. Quod optio illum id incidunt facere libero sit quis inventore, deleniti nisi repellendus nemo.</p>
                </Col>

            </Row>

        
        </Container>
    )

}

export default AboutUs