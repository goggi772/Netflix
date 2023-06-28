import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
function MainPage() {
  const navigate = useNavigate();
  return (
    <div style={{ background: 'black' }}>
      <MainPageBackGround>
        <MainNavBarBackGround>
          <MainNavBar>
            <MainNavLogo>
              <LogoImage src='./netflexlogo.png' />
            </MainNavLogo>
            <MainNavLogin>
              <Langbtn>
                <option>한국어</option>
                <option>영어</option>
              </Langbtn>
              <LignBtn
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그인
              </LignBtn>
            </MainNavLogin>
          </MainNavBar>
        </MainNavBarBackGround>
        <MainSection>
          <MainSectionContentH1>
            영화, 시리즈 등을 무제한으로
          </MainSectionContentH1>
          <MainSectionContentH2>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </MainSectionContentH2>
          <MainSubContentH2>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </MainSubContentH2>
        </MainSection>
        <MainFormDiv>
          <MainForm>
            <MainFormInput
              type={'email'}
              placeholder='이메일 주소'
            ></MainFormInput>
            <MainFormButton>시작하기</MainFormButton>
          </MainForm>
        </MainFormDiv>
      </MainPageBackGround>
    </div>
  );
}
export const MainPageBackGround = styled.div`
  color: white;
  background: url(https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/d28ea384-b394-4886-9aad-68e318cbbd68/KR-ko-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg)
    center no-repeat;
  background-size: cover;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100vh;
  &:before {
    content: '';
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
export const MainNavBarBackGround = styled.div`
  height: 30vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent);
`;
export const MainNavBar = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MainNavLogo = styled.div`
  display: flex;
  justify-content: start;
  background-repeat: no-repeat;
  z-index: 100;
  cursor: pointer;
  margin-left: 15%;
  margin-right: 15%;
`;
export const LogoImage = styled.img`
  width: 50%;
  padding: 15px;
`;
export const MainNavLogin = styled.div`
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: end;
  margin-left: 15%;
  margin-right: 15%;
`;
export const Langbtn = styled.select`
  margin-right: 5%;
  background-color: rgba(222, 222, 222, 0);
  color: white;
  width: 30%;
  text-align: center;
  border-radius: 5px;
`;

export const LignBtn = styled.a`
  font-size: 18px;
  background-color: #e50914;
  padding: 7px 17px;
  border-radius: 5px;
  cursor: pointer;
`;

export const MainSection = styled.div`
  margin-left: 50%;
  margin-right: 50%;
`;
export const MainSectionContentH1 = styled.h1`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -15vh);
  width: 100%;
  text-align: center;
  font-size: 3em;
  display: block;
  font-weight: 900;
  font-family: sans-serif;
`;
export const MainSectionContentH2 = styled.h2`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0vh);
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  display: block;
  font-weight: 400;
  font-family: sans-serif;
`;
export const MainSubContentH2 = styled.h2`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 8vh);
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  display: block;
  font-weight: 400;
  font-family: sans-serif;
`;
export const MainFormDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 15vh);
  padding: 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainFormInput = styled.input`
  outline-width: 0;
  height: 60px;
  width: 30%;
  max-width: 600px;
  min-width: 450px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(222, 222, 222);
  border-radius: 5px;
  margin-right: 3%;
  font-size: 20px;
  padding: 0px 10px;
  color: white;
`;
export const MainFormButton = styled.button`
  outline-width: 0;
  height: 60px;
  width: 30%;
  max-width: 600px;
  min-width: 200px;
  background: red;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export default MainPage;
