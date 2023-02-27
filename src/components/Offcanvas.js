import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {HiUser} from 'react-icons/hi'
import Accordion from './Accordion'


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      
        <HiUser size={36} onClick={handleShow} style={{color:"green",cursor:"pointer"}}/>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          <Accordion/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;