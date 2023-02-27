
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {IoIosHelpCircle} from 'react-icons/io'
import {BiTime} from 'react-icons/bi'
import '../App.css'
import {BiTargetLock} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import {GrNotes} from 'react-icons/gr'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {BiEnvelopeOpen} from 'react-icons/bi'
import {SlNote} from 'react-icons/sl'
import {BiGroup} from 'react-icons/bi'
import {CgDetailsMore} from 'react-icons/cg'
import Nav from '../components/Nav'

function ResponsiveExample() {

  
  return (
    <div>
      <Nav/>
      <Row style={{background:"#32a852",color:"white",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"18%"}}>
        <Col xs={10}style={{display:"flex",alignItems:"end",}}>
          <BiTime size={20}/>
          <input type="text" style={{height:"23px",width:"40%",borderRadius:"6px",boxShadow:"inset 0 0 0 1px rgb(104 74 104)",border:"none",paddingLeft:"8px",paddingRight:"8px",paddingTop:"4px",paddingBottom:"4px",marginLeft:"7px",marginRight:"7px"}} placeholder="Search" />
          
          
          <IoIosHelpCircle size={20}/>
        </Col>
        
        <Col xs={2} style={{display:"flex",alignItems:"center",justifyContent:"end",borderRadius:"6px",border:"none",paddingRight:"16px"}}>
          <span style={{paddingRight:"16px"}}>Razar</span>
          <IoIosHelpCircle size={25}/>
        </Col>

      </Row>
      
      <Row>
        <Col xs={3} style={{background:"#11401e",color:'white',height:"85vh"}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:"7px",borderBottom:"1px solid whitesmoke",marginBottom:"15px"}}>
            <span style={{fontWeight:"700"}}>Clever Programmer</span>
            <BiTargetLock size={26}/>
          </div>

          <div>
            <li><GrNotes size={20}/><span>Thread</span></li>
            <li> <BiMessageRoundedDetail size={25}/><span>All DMs</span></li>
            <li>
             <BiEnvelopeOpen size={20}/><span>Mentions and Reactions</span>
            </li>
            <li><SlNote size={20}/><span>Save Items</span></li>
            <li><BiGroup size={20}/><span>Peoples and Groups</span></li>
            <li><CgDetailsMore size={20}/><span>More</span></li>
          </div>

          <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:"2px",marginBottom:"1px",marginTop:"10px"}}>
            <span style={{fontWeight:"700"}}>Channels</span>
            <AiOutlinePlus/>
          </div>

          <div>
            <li># Channel 1</li>
            <li># Channel 2</li>
          </div>
        </Col>
        <Col xs={9} style={{background:"whitesmoke"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto quidem accusamus animi debitis fugit. Eligendi vitae consectetur harum voluptate!
        </Col>
      </Row>
    </div>
  );
}

export default ResponsiveExample;