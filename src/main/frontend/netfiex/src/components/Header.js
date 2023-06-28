import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderContent>
          <HeaderLogo
            src='./netflexlogo.png'
            onClick={() => {
              navigate('/');
            }}
          ></HeaderLogo>
          <HeaderHome>홈</HeaderHome>
          <HeaderHome>내가 찜한 콘텐츠</HeaderHome>
          <HeaderHome>액션</HeaderHome>
          <HeaderHome>SF</HeaderHome>
          <HeaderHome>공포</HeaderHome>
          <HeaderHome>코미디</HeaderHome>
          <HeaderHome>멜로/로맨스</HeaderHome>
          <HeaderHome>드라마</HeaderHome>
        </HeaderContent>
        <HeaderSubContent>
          <HeaderSub>검색</HeaderSub>
          <HeaderSub>마이페이지</HeaderSub>
        </HeaderSubContent>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
}

export default Header;
export const HeaderContainer = styled.div`
  height: 100vh;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  top: 0;
  position: sticky;
  height: 10vh;
  margin-left: 5%;
`;

export const HeaderLogo = styled.img`
  width: 10%;
  cursor: pointer;
`;

export const HeaderHome = styled.a`
  text-align: center;
  margin-left: 3%;
  font-size: 13px;
  cursor: pointer;
`;
export const HeaderContent = styled.div`
  display: flex;

  align-items: center;
`;
export const HeaderSubContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const HeaderSub = styled.a`
  text-align: center;
  font-size: 13px;
  padding-left: 50%;
  white-space: nowrap;
  cursor: pointer;
`;
