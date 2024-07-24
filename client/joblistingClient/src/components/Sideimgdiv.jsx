import {Container, Row, Col} from 'react-bootstrap';

function Sideimgdiv() {

    return (
        <Container classsName="mt-5 ">
            <Row className="justify-content-right">
                <Col>
                <img src="/sideimg.png" className=" mt-5 w-20  img-fluid img_side "></img>
                </Col>
            </Row>
        </Container>

    );
}

export default Sideimgdiv;
