import React from 'react';
import { useRef } from 'react';
import './SignupScreen.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  console.log(emailRef.current?.value);
  const navigate = useNavigate();
  const register = (_email, _password) => {
    axios
      .post('/api/requestLogin', {
        email: _email,
        password: _password,
      })
      .then((response) => {
        if (response.data['result'] === 'true') {
          sessionStorage.setItem('id', response.data['id']);
        } else {
          alert(response.data['message']);
        }
      })
      .catch((error) => console.log(error));
    // emailRef.current.value, passwordRef.current.value;
  };
  const signIn = (_username, _password) => {
    axios
      .post('/auth/login', {
        username: _username,
        password: _password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log('hi'));
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>로그인</h1>
        <input ref={emailRef} type='email' placeholder='이메일을 입력하세요' />
        <input
          ref={passwordRef}
          type='password'
          placeholder='비밀번호를 입력하세요'
        />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault(); //새로고침방지
            signIn(emailRef.current?.value, passwordRef.current?.value);
          }}
        >
          로그인
        </button>

        <h5>
          <span className='signuScreen__gray'>Netflix 회원이 아닌가요?</span>{' '}
          <span
            className='signupScreen__link'
            onClick={(e) => {
              e.preventDefault(); //새로고침방지
              register(emailRef.current?.value, passwordRef.current?.value);
            }}
          >
            지금 가입하세요
          </span>
        </h5>
        <h6>
          <span className='signuScreen__gray'>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.{' '}
          </span>
        </h6>
      </form>
    </div>
  );
}

export default SignUpScreen;
