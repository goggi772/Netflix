import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  useNavigate,
} from 'react-router-dom';
import './Reset.css';
/*components */
import Footer from './components/Footer';
import './App.css';
/* page */

import Login from './page/Login';
import Main from './page/Main';
import { findNonSerializableValue } from '@reduxjs/toolkit';
function App() {
  const user =null;
  return (
    
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>

          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
