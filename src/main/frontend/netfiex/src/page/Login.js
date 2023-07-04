import { useNavigate } from 'react-router-dom';
import {
  MainPageBackGround,
  MainNavBarBackGround,
  MainNavBar,
} from './BeforeLoginPage';
import styled from 'styled-components';

function Login(params) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
    >
      <MainPageBackGround>
        <MainNavBarBackGround>
          <MainNavBar>
            <LoginLogoContainer
              onClick={() => {
                navigate('/');
              }}
            >
              <LoginLogo src='./netflexlogo.png'></LoginLogo>
            </LoginLogoContainer>
          </MainNavBar>
          <LoginMainDiv>
            <LoginContentDiv>
              <LoginForm>
                <LoginH1>로그인</LoginH1>
                <LoginInput
                  type='text'
                  placeholder='이메일 주소 또는 전화번호'
                ></LoginInput>
                <LoginInput
                  type='text'
                  placeholder='이메일 주소 또는 전화번호'
                ></LoginInput>
                <LoginButton
                  onClick={() => {
                    navigate('/main');
                  }}
                >
                  로그인
                </LoginButton>
              </LoginForm>
              <LoginCheckBoxDiv>
                <LoginCheck htmlFor='로그인 정보 저장'>
                  <LoginCheckBox
                    type='checkbox'
                    id='로그인 정보 저장'
                    name='로그인 정보 저장'
                  ></LoginCheckBox>
                  <LoginP>로그인 정보 저장</LoginP>
                </LoginCheck>
                <LoginA href='#'>도움이 필요하신가요?</LoginA>
              </LoginCheckBoxDiv>
            </LoginContentDiv>
            <SignUpDiv>
              Netflex 회원이 아닌가요?{' '}
              <SignUpLink href='#'>지금 가입하세요</SignUpLink>
            </SignUpDiv>
            <LoginDetail>
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다.{' '}
              <LoginDetailGoogle href='https://policies.google.com/terms'>
                자세히 알아보기.
              </LoginDetailGoogle>
            </LoginDetail>
          </LoginMainDiv>
        </MainNavBarBackGround>
      </MainPageBackGround>
    </div>
  );
}

export const LoginLogoContainer = styled.div`
  cursor: pointer;
  z-index: 10000;
  
`;
export const LoginLogo = styled.img`
  width: 20%;
  padding: 30px;
`;
export const LoginMainDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -20%);
  height: 70%;
  width: 30%;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 3px;
  box-sizing: border-box;
`;
export const LoginContentDiv = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
`;
export const LoginForm = styled.form`
  display: grid;
  flex-direction: column;
`;
export const LoginH1 = styled.h1`
  font-weight: 400;
`;
export const LoginInput = styled.input`
  height: 50px;
  background-color: #333;
  border: none;
  border-radius: 3px;
  &:focus {
    background-color: #474545;
    outline: none;
  }
  padding-left: 5%;
  margin-bottom: 5%;
`;
export const LoginButton = styled.button`
  outline-width: 0;
  height: 50px;
  background: red;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  margin-top: 5%;
`;
export const LoginCheck = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const LoginCheckBox = styled.input`
  width: 1.5rem;
  height: 1rem;
  border: 1px solid gainsboro;
  border-radius: 0.35rem;
`;
export const LoginCheckBoxDiv = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const LoginP = styled.p`
  appearance: none;
  font-size: 12px;
  color: #b3b3b3;
`;

export const LoginA = styled.a`
  font-size: 12px;
  color: #b3b3b3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpDiv = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  margin-top: 5%;
  color: gray;
`;

export const SignUpLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const LoginDetail = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;

  font-size: 13px;
  color: gray;
`;

export const LoginDetailGoogle = styled.a`
  text-decoration: none;

  color: #0071eb;
  &:hover {
    text-decoration: underline;
  }
`;
export default Login;
