import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsTwitter, BsInstagram, BsFacebook, BsVimeo} from 'react-icons/bs';


function ColorSchemesExample() {
  return (
    <>
    <div className='row'>
      <Navbar bg="dark" variant="dark">
        <Container>
             
            <div className='col-2'> 
          <Navbar.Brand href="#home">Free Shipping over $100 & 60 days returns</Navbar.Brand>
          </div>
          <div className='col-8'>

          </div>
          <div className='col-2'>
          <Nav className="me-auto">
            <Nav.Link href="https://twitter.com/" target="_blank"><BsTwitter/></Nav.Link>
            <Nav.Link href="https://instagram.com/" target="_blank"><BsInstagram /></Nav.Link>
            <Nav.Link href="https://facebook.com/" target="_blank"><BsFacebook/></Nav.Link>
            <Nav.Link href="https://vimeo.com/" target="_blank"><BsVimeo/></Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;