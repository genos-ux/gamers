import State from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Forum from './pages/Forum'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Event from './pages/Event'
import Shop from './pages/Shop'
import Settings from './pages/Settings'
import Info from './pages/Info'
import Gift from './pages/Gift'
import Message from './pages/Messages'
import Login from './pages/Login'

function App() {

  
  return (

    <div>
      {/* <State/> */}

      <div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/forum' element={<Forum/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/gift' element={<Gift/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/login' element={<Login/>}/>
            
        </Routes>

      </div>

      
    {/* </Container> */}

    </div>

    

    
  );
}

export default App;
