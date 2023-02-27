import ListGroup from 'react-bootstrap/ListGroup';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const styl = {
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center"
}

function FlushExample() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
          <div style={styl}>
           <h2>Profile</h2>
           <HiOutlineArrowNarrowRight size={38}/>

          </div>
      
      </ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}><h1>Preference</h1></ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
      <div style={styl}>
           
           <p style={{fontSize:"2.2rem"}}>My Stakes</p>
           <HiOutlineArrowNarrowRight size={38}/>

          </div>
      </ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
      <div style={styl}>
           
           <p style={{fontSize:"2.2rem"}}>My Favorite Settings</p>
           <HiOutlineArrowNarrowRight size={38}/>

          </div>
      </ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
      <div style={styl}>
      <p style={{fontSize:"2.2rem"}}>Language Preference</p>
           <HiOutlineArrowNarrowRight size={38}/>

          </div>
      </ListGroup.Item>
      
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}><h1>Safety and Security</h1></ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
    <div style={styl}>
         
         <p style={{fontSize:"2.2rem"}}>Change Password</p>
         <HiOutlineArrowNarrowRight size={38}/>

        </div>
    </ListGroup.Item>

    <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}><h1>Safety and Security</h1></ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
    <div style={styl}>
         
         <p style={{fontSize:"2.2rem"}}>Multifactor authentication</p>
         <HiOutlineArrowNarrowRight size={38}/>

        </div>
    </ListGroup.Item>

    <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}><h1>Safety and Security</h1></ListGroup.Item>
      <ListGroup.Item style={{paddingBottom:"10px",marginBottom:"10px"}}>
    <div style={styl}>
         <p style={{fontSize:"2.2rem"}}>Self Exclusion</p>
         <HiOutlineArrowNarrowRight size={38}/>

        </div>
    </ListGroup.Item>
 
  </ListGroup>
   );
    
}

export default FlushExample;