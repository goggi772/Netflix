import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styled from 'styled-components';
import './Login.css';
import SignUpScreen from './SignUpScreen.js';
import { useState } from 'react';
import axios from 'axios';
function Login(params) {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(false);
  const [inputEmail, setinputEmail] = useState(0);
  const checkemailRef = useRef(null);
  const onInput = (e) => {
    setinputEmail(e.target.value);
  };
  const checkEmail = () => {
    const email = inputEmail;
    axios
      .get('/auth/check_email', {
        email: email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert('존재하지 않는 아이디 입니다.');
      });
  };
  console.log(inputEmail);
  const register = (username, password, nickname, email) => {
    axios
      .post('/api/join', {
        username: username,
        password: password,
        nickname: nickname,
        email: email,
      })
      .then((response) => {
        const token = localStorage.setItem(
          'accessToken',
          response.data['accessToken']
        );
        console.log(token);
      })
      .catch((error) => console.log(error));
    // emailRef.current.value, passwordRef.current.value;
  };
  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='./netflexlogo.png'
          onClick={() => {
            navigate('/');
          }}
        ></img>
        <button
          className='loginScreen__button'
          onClick={() => {
            setSignIn(true);
          }}
        >
          Sign in
        </button>
        <div className='loginScreen__gradient'></div>
        <div className='loginScreen__body'>
          {signIn ? (
            <SignUpScreen setSignIn={setSignIn} />
          ) : (
            <>
              <h1>영화 ,TV 프로그램을 무제한으로</h1>
              <h2>
                {' '}
                다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
              </h2>
              <h3>
                {' '}
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
                주소를 입력하세요.
              </h3>
              <div className='loginScreen__input'>
                <form>
                  <input
                    type='email'
                    ref={checkemailRef}
                    onChange={onInput}
                    placeholder='이메일을 입력하세요'
                  />
                  <button
                    className='loginScreen__getStart'
                    onClick={(e) => {
                      e.preventDefault();
                      checkEmail();
                    }}
                  >
                    시작하기
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
