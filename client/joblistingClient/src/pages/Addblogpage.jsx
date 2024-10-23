import {Container, Row, Col} from "react-bootstrap"
import Blogform from "../components/BlogForm/Blogform";

function Addblogpage() {
    return (

        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col >
                <Blogform></Blogform>

                </Col>
            </Row>
        </Container>
    );
}

export default Addblogpage
