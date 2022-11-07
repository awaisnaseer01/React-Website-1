import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillPersonFill, BsHeart, BsBagCheck} from 'react-icons/bs';


function Navbar2() {
  return (
<>
    <div className=''>

    <Navbar  bg="light" expand="lg">
      <Container fluid>

        {/* <-------Bestore image-----> */}

    <div className='col-1'>
        <Navbar.Brand href="#"><img className='bestore_image' src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/retina-bethemestore.png' /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
            
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>

           
          {/* <-------Search Bar-------> */}
          

          <div className='col-8'>
          <Form className="d-flex">
            <input
              type="search"
              placeholder="Enter your search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search_btn' variant="outline-success">Search</Button>
          </Form>
          </div>

<div className='col-2'>
          {/* <--------logos------> */}



          <Nav className="me-auto">
            <Nav.Link href="#home"><BsFillPersonFill/></Nav.Link>
            <Nav.Link href="#features"><BsHeart /></Nav.Link>
            <Nav.Link href="#pricing"><BsBagCheck/></Nav.Link>
            
          </Nav>

          </div>

          <div className='col-1'>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>

    </>
  );
}

export default Navbar2;