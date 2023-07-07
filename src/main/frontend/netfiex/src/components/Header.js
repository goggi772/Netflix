import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Nav.css';
import { useEffect, useState } from 'react';
function Header() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img src='./netflexlogo.png' className='nav__logo'></img>
        <img
          className='nav__avatar'
          src='https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
        ></img>
      </div>
    </div>
  );
}

export default Header;