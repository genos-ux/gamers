import Slide from '../components/Slide'
import Header from '../components/Header'
import StoreItem from '../components/StoreItem'
import {Row, Col} from 'react-bootstrap'
import storeItems from '../data/items.json'
import Navbar from '../components/Navbar'

const Home = () => {
    
    return ( 
        <div>
            <Navbar/>
            <Slide/>
            <Header/>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item=>{
                    return (<Col key={item.id}><StoreItem {...item}/></Col>)    
                })}
            </Row>
            

        </div>
        
     );
}
 
export default Home;