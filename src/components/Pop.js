import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';

function PopoverPositionedExample() {

  
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Register an Account`}</Popover.Header>
              <Popover.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h5>Firstname</h5>
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter your name" />
                            
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h5>Email address</h5>
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" />
                            
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <h5>Password</h5>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I am over 18 years of age and I accept terms and conditions" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Register
                        </Button>
                    </Form>
              </Popover.Body>
            </Popover>
          }
        >
          {/* <Button variant="secondary">Sign Up</Button> */}
          <Button variant="outline-success" style={{marginRight:"15px"}}>Sign up</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;