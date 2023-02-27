
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import storeItems from '../data/shop.json'
import StoreItems from '../components/StoreItem'
import Nav from '../components/Nav'

function ResponsiveAutoExample() {

    
  return (

        <>

        <Nav/>
    
        <Row style={{display:"flex",justifyContent:"space-around",padding:"10px 10px",paddingLeft:"10px",paddingTop:"15px"}}>
            <Col sm={2} style={{border:"1px solid grey",height:"50%"}}>
                <h3>Categories</h3>
                <nav>
                    
                    <li style={{marginBottom:"10px",listStyleType:"none"}}>Console(10)</li>
                    <li style={{marginBottom:"10px",listStyleType:"none"}}>Chess(30)</li>
                    <li style={{marginBottom:"10px",listStyleType:"none"}}>Checkers(40)</li>
                    <li style={{marginBottom:"10px",listStyleType:"none"}}>Tennis bat(30)</li>
                    <li style={{marginBottom:"10px",listStyleType:"none"}}>cards(20)</li>
                    <li style={{marginBottom:"10px",listStyleType:"none"}}>u20 cards(12)</li>
                    
                </nav>

                <div>
                    <h3>Product tags</h3>
                    <div>
                        <button style={{margin:"10px"}}>Console</button>
                        <button style={{margin:"10px"}}>Chess</button>
                        <button style={{margin:"10px"}}>Checkers</button>
                        <button style={{margin:"10px"}}>u02 cards</button>
                    </div>
                </div>

            </Col>
            <Col sm={10}>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {storeItems.map(item=>{
                        return (<Col key={item.id}><StoreItems {...item}/></Col>)    
                    })}
                </Row>
            </Col>
        </Row>

        </>
        
      
      
    
    
  );
}

export default ResponsiveAutoExample;