import {FiSettings} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {CgNotes} from 'react-icons/cg'
import {GrDocumentText} from 'react-icons/gr'
import {SiZcash} from 'react-icons/si'
import {FaGift} from 'react-icons/fa'

const Account = () => {
    return (
        <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <AiOutlineUser size={24}/>
            <Link to="/settings" style={{color:"black"}}>
                <FiSettings size={24}/>
            </Link>
            
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <h2>Total Balance</h2>
                <h2>Ghc1.00</h2>
            </div>

            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <h2 style={{border:"1px solid green",padding:"30px",backgroundColor:"green",color:"white",width:"40%",textAlign:"center"}}>
                    <CgNotes/>
                    Deposit</h2>
                <h2 style={{border:"1px solid green",padding:"30px",backgroundColor:"green",color:"white",width:"40%",textAlign:"center"}}>Withdrawal</h2>
            </div>

            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <GrDocumentText/>
                    <h5>Sports Bet History</h5>

                </div>
                <div>
                    <SiZcash/>
                    <p>Transactions</p>

                </div>
                <div>
                    <FaGift/>
                    <p>Gifts(0)</p>

                </div>
            </div>
        </div>
    );
}
 
export default Account;