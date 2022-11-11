import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <>
      <div style={{paddingBottom:"7rem",paddingTop:"6rem", textAlign:"left"}} className='container'>
        <h1>Hot Promotions</h1>
      </div>
      <div className=' flex container' style={{display: "block"}}>
<Row>

       
        

        {/* 1st card---------- */}
        <Col>
        <Card style={{ width: "18rem", backgroundColor: "#F9F9F9", borderRadius:"30px" }}>
          <Card.Img style={{display: "block", margin:"auto",height:"17rem", width:"17rem", paddingTop:"1rem", borderRadius:"30px"}}
            variant="top"
            src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic15-500x500.webp"
          />
          <Card.Body>
            <br />
            <div className="fluid container" style={{ textAlign: "left" }}>
              <Card.Title>BePencil</Card.Title>
              <Card.Text style={{ color: "#484ef8" }}>
                <b> $65.80 </b>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        </Col>

         {/* 2nd card-------- */}
         <Col>
        <Card style={{ width: "18rem", backgroundColor: "#F9F9F9", borderRadius:"30px" }}>
          <Card.Img style={{display: "block", margin:"auto",height:"17rem", width:"17rem", paddingTop:"1rem", borderRadius:"30px"}}
            variant="top"
            src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic16-1-500x500.webp"
          />
          <Card.Body>
            <br />
            <div className="fluid container" style={{ textAlign: "left" }}>
              <Card.Title>BeFlashdrive</Card.Title>
              <Card.Text style={{ color: "#484ef8" }}>
                <b> $7.30 </b>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        </Col>


        {/* 3rd card----------- */}
        <Col>

        <Card style={{ width: "18rem", backgroundColor: "#F9F9F9", borderRadius:"30px" }}>
          <Card.Img style={{display: "block", margin:"auto",height:"17rem", width:"17rem", paddingTop:"1rem", borderRadius:"30px"}}
            variant="top"
            src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic13-1-500x500.webp"
          />
          <Card.Body>
            <br />
            <div className="fluid container" style={{ textAlign: "left" }}>
              <Card.Title>BeHeadphones</Card.Title>
              <Card.Text style={{ color: "#484ef8" }}>
                <b> $7.30 </b>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        </Col>

        {/* 4th card----------------- */}
<Col>
        <Card style={{ width: "18rem", backgroundColor: "#F9F9F9", borderRadius:"30px" }}>
          <Card.Img style={{display: "block", margin:"auto",height:"17rem", width:"17rem", paddingTop:"1rem", borderRadius:"30px"}}
            variant="top"
            src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic12-1-500x500.webp"
          />
          <Card.Body>
            <br />
            <div className="fluid container" style={{ textAlign: "left" }}>
              <Card.Title>BeFlashdrive4</Card.Title>
              <Card.Text style={{ color: "#484ef8" }}>
                <b> $30.00-$40.00 </b>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      </div>
    </>
  );
}

export default BasicExample;
