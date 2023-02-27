import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form,Button,FloatingLabel} from 'react-bootstrap'
import {GoLocation} from 'react-icons/go';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md';
import {BiTimeFive} from 'react-icons/bi';
import Nav from '../components/Nav'




const Contact = () => {
    return (
        <div>
            <Nav/>
            <div style={{textAlign:"center"}}>
                <h1>We are here to help</h1>
                <p style={{textAlign:"center"}}>loremq0dsfjlj</p>
            </div>

            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            width="100%"
            height="450"
            title='location'
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
      ></iframe>





    <Container style={{marginTop:"50px"}}>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <h1>Send us a message</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam, vel voluptatibus commodi tempore officiis.</p>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {/* <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel> */}
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      
      <Button variant="success" type="submit" style={{marginTop:"12px"}}>
        Send message
      </Button>
    </Form>

        </Col>
        <Col xs={6} md={4}>
            <div style={{border:"1px solid black",margin:"13px 10px",paddingLeft:"10px"}}>
                <div  style={{display:"flex",justifyContent:"space-between", alignItems:"center",padding:"10px"}}>
                    <GoLocation size={42}/>
                    <div>
                        <span>Address</span><br />
                        <span>11 Pentecost Church Road , Adjiringanor</span>
                    </div>
                </div>
                <div  style={{display:"flex",justifyContent:"space-between", alignItems:"center",padding:"10px"}}>
                    < BsFillTelephoneFill size={42}/>
                    <div>
                        <span>Address</span><br />
                        <span>11 Pentecost Church Road , Adjiringanor</span>
                    </div>
                </div>
                <div  style={{display:"flex",justifyContent:"space-between", alignItems:"center",padding:"10px"}}>
                    <MdEmail size={42}/>
                    <div>
                        <span>Address</span><br />
                        <span>11 Pentecost Church Road , Adjiringanor</span>
                    </div>
                </div>
                <div  style={{display:"flex",justifyContent:"space-between", alignItems:"center",padding:"10px"}}>
                    <BiTimeFive size={42}/>
                    <div>
                        <span>Address</span><br />
                        <span>11 Pentecost Church Road , Adjiringanor</span>
                    </div>
                </div>
                <div></div>
                
            </div>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      {/* <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row> */}

      {/* Columns are always 50% wide, on mobile and desktop */}
      {/* <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row> */}
    </Container>
 


        </div>
    );
}
 
export default Contact;