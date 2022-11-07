import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function navbar1() {
  return (
    <div  >
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        {/* <div className='col-1'></div> */}
          <div className='col-9'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <---Home---> */}
            <Nav.Link href="#action1">Home</Nav.Link>
            

            {/* <--------features--------> */}
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* <----------Shops--------> */}
            <Nav.Link href="#action2">Shop</Nav.Link>


            {/* <---------Pages-------> */}
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                {/* <1st drop down > */}
              <NavDropdown.Item href="#action3">Permotions</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <2nd drop down> */}
              <NavDropdown.Item href="#action4">
                Cart
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <3rd drop down> */}
              <NavDropdown.Item href="#action5">
                Side Cart
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <4th drop down> */}
              <NavDropdown.Item href="#action5">
                WishList
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <5th drop down> */}
              <NavDropdown.Item href="#action5">
                Checkout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <6th drop down> */}
              <NavDropdown.Item href="#action5">
                My accout
              </NavDropdown.Item>
              
            </NavDropdown>



            
          </Nav>

          </div>
<div className='col-3'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <---ABout---> */}
            <Nav.Link href="#action1">About</Nav.Link>

             {/* <---COntact---> */}
             <Nav.Link href="#action1">Contact</Nav.Link>

              {/* <---Term Of Use---> */}
            <Nav.Link href="#action1">Term Of Use</Nav.Link>
            
            </Nav>

            </div>     
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default navbar1;