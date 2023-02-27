
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanva from './Offcanvas'
import Pop from './Pop'
import Popper from './Popper'
import {Link} from 'react-router-dom'


function NavScrollExample() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="#" style={{textDecoration:"none",color:"grey"}}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="" style={{textDecoration:"none",color:"grey"}}>Shop</Link>
            </Nav.Link>
            
            <Nav.Link href="#">
              <Link to="" style={{textDecoration:"none",color:"grey"}}>Forum</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-space-between">
            <Pop/>
            <Popper/>
            
            {/* <Offcanva/> */}
            
          </Form>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>
  );
}

export default NavScrollExample;