import { Card} from 'react-bootstrap'
import img from '../instagram-live.png'
import '../App.css'
function storeItem({imgUrl,name,isLive,price}){


    return (
        <Card style={{position:"relative"}} id="img">
            <Card.Img
             variant='top'
             src={imgUrl}
             height="200px"
             style={{objectFit: "cover"}}
             className="img"
            />

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-center align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    
                    

                </Card.Title>
                {/* <span style={{position:"absolute",right:"10px",top:"0px",display:isLive?"inline-block":"none"}}>Hello</span> */}

                <img src={img}
                alt="live"
                width="40px"
                style={{position:"absolute",right:"10px",top:"0px",display:isLive?"inline-block":"none"}} />

               

            </Card.Body>

            
        </Card>
    )

}
 
export default storeItem;