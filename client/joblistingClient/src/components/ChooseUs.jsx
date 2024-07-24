
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css"

function ChooseUs ()   {
  return (
   <Container>
  
    <Row className='chooseUs'>

      

      <Col xs={12} md={8} className="chooseUstext">
      <div className='textDiv'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quod iure eos eius id quisquam accusamus. Vel sint, provident quasi sequi blanditiis ut culpa ad beatae distinctio? Repellat aspernatur pariatur, cum dolore fugiat amet dicta delectus aliquid, odio aut hic.
      </div>
      

      </Col>

      <Col className='chooseUsimg'>
      <div>
        <img></img>
      </div>

      </Col>
    </Row>

   </Container>
  );
}

export default ChooseUs;
