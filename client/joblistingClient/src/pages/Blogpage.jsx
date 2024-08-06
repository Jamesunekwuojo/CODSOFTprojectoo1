import Blogcard from "../components/Blogcard.jsx";
import {Container, Row} from "react-bootstrap";


function Blogpage(){

    return(
       <Container>
        <Row>
            <Blogcard></Blogcard>
        </Row>

       </Container>
    )
}

export default Blogpage;
