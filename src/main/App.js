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
import MainPage from './page/MainPage';
import Login from './page/Login';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
