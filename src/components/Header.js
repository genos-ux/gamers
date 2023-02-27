
import { MdSportsEsports} from 'react-icons/md';
import {CgCardSpades} from 'react-icons/cg';
import {FaTableTennis} from 'react-icons/fa';
import {FaChessBoard} from 'react-icons/fa';
import {FaChess} from 'react-icons/fa';
import {MdOutlineLiveTv} from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import storeList from '../data/items.json'

function NavScrollExample() {

  const [list,setList] = useState(storeList);
  

  function console(){
    const filterList = list.filter(item=> item.name === console)
    setList(filterList)
    
  }

  

  useEffect(()=>{
    setList(storeList)
    
  },[])
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={{marginBottom:"10px",marginTop:"10px"}}>
        <Navbar.Brand href="#">
            {/* <h1 >GAMES</h1> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width:"70%",display:"flex",justifyContent:"space-between" }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={console}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
                 }}>
                    <MdSportsEsports style={{textAlign:"center"}} size={28}/>
                        <span>CONSOLE</span>
                        
                    </div>
            </Nav.Link>
            <Nav.Link href="#action2">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
               }}>
                <MdSportsEsports style={{textAlign:"center"}} size={28}/>
                <span>SNOOKER</span>
                        
                </div>
            </Nav.Link>
            <Nav.Link href="#">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
               }}>
                <FaTableTennis style={{textAlign:"center"}} size={28}/>
                <span>TABLE TENNIS</span>
                        
                </div>
              
            </Nav.Link>
          
          <Nav.Link href="#">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
               }}>
                <FaChessBoard style={{textAlign:"center"}} size={28}/>
                <span>CHECKERS</span>
                        
                </div>
              
            </Nav.Link>
            <Nav.Link href="#">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
               }}>
                <CgCardSpades style={{textAlign:"center"}} size={28}/>
                <span>UNO CARDS</span>
                        
                </div>
              
            </Nav.Link>

            <Nav.Link href="#">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
               }}>
                <FaChess style={{textAlign:"center"}} size={28}/>
                <span>CHESS</span>
                        
                </div>
              
            </Nav.Link>
            <Nav.Link href="#">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
               }}>
                <MdOutlineLiveTv style={{textAlign:"center"}} size={28}/>
                <span>LIVE</span>       
                </div>
              
            </Nav.Link>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
}

export default NavScrollExample;