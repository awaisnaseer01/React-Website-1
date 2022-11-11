import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';


function Cards() {
  return (
    
    < div className=' flex container' style={{display: "block"}} >
    
    <Row>
      <Col>
      <Card  style={{width:"14rem",height:"14rem", borderRadius:"30px",backgroundColor:"#F6F6F6"}} className='cgroup'>
        <Card.Img variant="top" style={{display: "block", margin:"auto",height:"7rem", width:"7rem", paddingTop:"1rem"}} src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon1.webp" />
        <Card.Body>
          <br />
          <Card.Title>Notebooks</Card.Title>
          
        </Card.Body>  
      </Card>
      </Col>
      
      <Col>
      <Card  style={{width:"14rem",height:"14rem", borderRadius:"30px",backgroundColor:"#F6F6F6"}} className='cgroup'>
        <Card.Img variant="top" style={{display: "block", margin:"auto",height:"7rem", width:"7rem", paddingTop:"1rem"}} src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon2.webp" />
        <Card.Body>
          <br />
          <Card.Title>Smartphones</Card.Title>
          
        </Card.Body>  
      </Card>
      </Col>

      <Col>
      <Card  style={{width:"14rem",height:"14rem", borderRadius:"30px",backgroundColor:"#F6F6F6"}} className='cgroup'>
        <Card.Img variant="top" style={{display: "block", margin:"auto",height:"7rem", width:"7rem", paddingTop:"1rem"}} src="	https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon3.webp" />
        <Card.Body>
          <br />
          <Card.Title>Smartwatches</Card.Title>
          
        </Card.Body>  
      </Card>
      </Col>

      <Col>
      <Card  style={{width:"14rem",height:"14rem", borderRadius:"30px",backgroundColor:"#F6F6F6"}} className='cgroup'>
        <Card.Img variant="top" style={{display: "block", margin:"auto",height:"7rem", width:"7rem", paddingTop:"1rem"}} src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon4.webp" />
        <Card.Body>
          <br />
          <Card.Title>TV / Audio</Card.Title>
          
        </Card.Body>  
      </Card>
      </Col>

      <Col>
      <Card  style={{width:"14rem",height:"14rem", borderRadius:"30px",backgroundColor:"#F6F6F6"}} className='cgroup'>
        <Card.Img variant="top" style={{display: "block", margin:"auto",height:"7rem", width:"7rem", paddingTop:"1rem"}} src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon5.webp" />
        <Card.Body>
          <br />
          <Card.Title>Gamming</Card.Title>
          
        </Card.Body>  
      </Card>
      </Col>
    
      </Row>
      </div>
    
  );
}

export default Cards;
