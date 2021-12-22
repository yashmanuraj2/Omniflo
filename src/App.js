
import logo from './logo.svg';
import {useContext} from 'react';
import {  BrowserRouter as Router,  Routes,  Route,  Redirect  }     
 from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
import { AuthContext } from './context/AuthContext';
import AddModal from './components/addModal'


function App() {
  const {user} = useContext(AuthContext);
return (

    <Router>  
     <Routes>
        <Route exact path="/" element ={user ? <Main /> : <Login />}/>
        
        <Route path="/login" element ={<Login/>}/>
        
         
           <Route path = '/modal' element = {AddModal}/>
             
           
        <Route path="/register" element ={<Register/>}/>
          
         </Routes>
    </Router>

  );
}

export default App;