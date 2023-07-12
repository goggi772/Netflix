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
import React from 'react';
import { useRef, useState } from 'react';
import './SignupScreen.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUpScreen(props) {
  const [input, setinput] = useState(0);
  const [inputpwd, setinputpwd] = useState(0);
  const [signstate, setSignState] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const onInput = (e) => {
    setinput(e.target.value);
  };
  const onPwdInput = (e) => {
    setinputpwd(e.target.value);
  };

  const navigate = useNavigate();

  const signIn = () => {
    const username = input;
    const password = inputpwd;

    console.log(username);
    axios
      .post(
        '/auth/login',
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        const { accessToken } = response.data;
        if (response.statusText == 'OK') {
          navigate('/');
        }
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch((error) => {
        alert('존재하지 않는 아이디 입니다.');
      });
  };
  console.log(input);
  console.log(inputpwd);
  return (
    <div className='signupScreen'>
      <form>
        <h1>로그인</h1>
        <input
          ref={emailRef}
          onChange={onInput}
          type='email'
          placeholder='이메일을 입력하세요'
        />
        <input
          ref={passwordRef}
          type='password'
          onChange={onPwdInput}
          placeholder='비밀번호를 입력하세요'
        />
        <button
          type='submit'
          onClick={() => {
            //새로고침방지
            signIn();
            {
            }
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
              props.setSignIn(false);
              navigate('/login');
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
  