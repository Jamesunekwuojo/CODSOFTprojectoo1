import BlogCard from "../components/BlogCard/BlogCard.jsx";
import {Container, Row} from "react-bootstrap";


function Blogpage(){

    return(
       <Container>
        <Row>
            <BlogCard></BlogCard>
        </Row>

       </Container>
    )
}

export default Blogpage;
