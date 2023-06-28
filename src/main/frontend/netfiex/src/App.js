import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './Reset.css';
/*components */
import Footer from './components/Footer';

/* page */
import BeforeLoginPage from './page/BeforeLoginPage';
import Login from './page/Login';
import Main from './page/Main';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<BeforeLoginPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/main' element={<Main />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
