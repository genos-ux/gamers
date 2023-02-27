import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Model from 'react-modal'

function FlushExample() {

  const styl = {
    textDecoration:"none",
    color:"black",
    cursor:"pointer"
  }

  const [visible, setVisible] = useState(false)
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Account</Accordion.Header>
        <Accordion.Body>
        <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="/shop" style={styl}>Deposit funds</a>
            </ListGroup.Item>
            <ListGroup.Item >Withdraw Funds</ListGroup.Item>
            <ListGroup.Item>My Bets</ListGroup.Item>
            <ListGroup.Item>
              <a href="/gift" style={styl}>Gifts</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/info" style={styl}>Update Details</a>
            </ListGroup.Item>
            <ListGroup.Item>Manage Password</ListGroup.Item>
            <ListGroup.Item>
              <a href="/message" style={styl}>Messages</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/login" style={styl}>Log out</a>
            </ListGroup.Item>

        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Customer Service</Accordion.Header>
        <Accordion.Body>
        <ListGroup variant="flush">
            <ListGroup.Item>How To Play</ListGroup.Item>
            <ListGroup.Item>Recurring Deposits</ListGroup.Item>
            <ListGroup.Item>Transaction Summary</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quick Links</Accordion.Header>
        <Accordion.Body>
        <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="/" style={styl}>Home</a>
            </ListGroup.Item>
            <ListGroup.Item>About us</ListGroup.Item>
            <ListGroup.Item>
              <a href="/contact" style={styl}>Contact us</a>
            </ListGroup.Item>
            <ListGroup.Item>Help and info</ListGroup.Item>
            <ListGroup.Item>Responsible Gaming</ListGroup.Item>
            <ListGroup.Item>Unsubscribe</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;