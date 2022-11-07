import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

function Cards() {
  return (
    
    < div className='Container' >
    <h1 className='Category'>Chose a Catagory</h1>
    <Row>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic4-768x768.png" />
        <Card.Body>
          <Card.Title>Accessories</Card.Title>
          
        </Card.Body>  
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic2-768x768.png" />
        <Card.Body>
          <Card.Title>Core Parts</Card.Title>
          
        </Card.Body>
        
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic3-768x768.png" />
        <Card.Body>
          <Card.Title>Peripherals</Card.Title>
          
        </Card.Body>
        
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic5-768x768.png" />
        <Card.Body>
          <Card.Title>Printers</Card.Title>
          
        </Card.Body>
        
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-category-pic1-768x768.png" />
        <Card.Body>
          <Card.Title>Workstations</Card.Title>
          
        </Card.Body>
        
      </Card>
      </Col>
    
      </Row>
      </div>
    
  );
}

export default Cards;
