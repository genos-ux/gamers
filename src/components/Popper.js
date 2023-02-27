import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {RiLockPasswordFill} from 'react-icons/ri'

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
              <Popover.Header as="h3">{`Login`}</Popover.Header>
              <Popover.Body>
                    <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <RiLockPasswordFill/>
                        </InputGroup.Text>
                        <Form.Control
                        placeholder="Password"
                        type="password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>


                        <Form.Check type="checkbox" label="Remember me" />
                        <div style={{display:"flex",marginTop:"10px",justifyContent:"space-between",alignItems:"center"}}>
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                            {/* <span>Forget Password</span> */}
                            <a href="#" style={{marginTop:"10px",color:"green",textDecoration:"none"}} variant="success">Forgot Password?</a>
                        </div>

                    </Form>
              </Popover.Body>
            </Popover>
          }
        >
          {/* <Button variant="secondary">Sign Up</Button> */}
          <Button variant="success" style={{marginRight:"15px"}}>Log in</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;