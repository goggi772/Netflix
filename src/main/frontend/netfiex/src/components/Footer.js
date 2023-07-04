import styled from 'styled-components';
import { Langbtn } from '../page/BeforeLoginPage';
function Footer() {
  return (
    <FooterTopDiv>
      <FooterBackground>
        <FooterContent>
          질문이 있으신가요? 문의 전화: 010-8823-5776
        </FooterContent>
        <FooterDetailContent>
          <FooterDetailContentQnA>자주묻는 질문</FooterDetailContentQnA>
          <FooterDetailContentQnA>고객 센터</FooterDetailContentQnA>
          <FooterDetailContentQnA>이용 약관</FooterDetailContentQnA>
          <FooterDetailContentQnA>개인정보 처리방침</FooterDetailContentQnA>
          <FooterDetailContentQnA>쿠키 설정</FooterDetailContentQnA>
          <FooterDetailContentQnA>회사 정보</FooterDetailContentQnA>
        </FooterDetailContent>
        <Langbtn
          style={{
            width: '10%',
            marginLeft: '15%',
            marginTop: '2%',
            height: '5vh',
          }}
        >
          <option>한국어</option>
          <option>영어</option>
        </Langbtn>
        <FooterContent style={{ paddingTop: '2%' }}>
          <FooterSubDetailContent>
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호: 080-001-9587
          </FooterSubDetailContent>
          <FooterSubDetailContent>
            대표: 레지널드 숀 톰프슨
          </FooterSubDetailContent>
          <FooterSubDetailContent>
            이메일 주소: korea@netflix.com
          </FooterSubDetailContent>
          <FooterSubDetailContent>
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161
          </FooterSubDetailContent>
          <FooterSubDetailContent>
            사업자등록번호: 165-87-00119
          </FooterSubDetailContent>
          <FooterSubDetailContent>
            클라우드 호스팅: Amazon Web Services Inc.
          </FooterSubDetailContent>
          <FooterSubDetailContent>
            공정거래위원회 웹사이트
          </FooterSubDetailContent>
        </FooterContent>
      </FooterBackground>
    </FooterTopDiv>
  );
}

export default Footer;

export const FooterTopDiv = styled.div`
  height: 10vh;
  position: relative;
  z-index: 999;
`;
export const FooterBackground = styled.div`
  background: rgba(0, 0, 0);
  padding-bottom: 3%;
`;
export const FooterContent = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  color: gray;
  z-index: 10000;
  font-size: 15px;
`;
export const FooterDetailContent = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  color: white;
  z-index: 10000;
`;
export const FooterDetailContentQnA = styled.a`
  margin-top: 5%;
  margin-bottom: 3%;
  color: gray;
  z-index: 10000;
  font-size: 13px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
export const FooterSubDetailContent = styled.p`
  color: gray;
  z-index: 10000;
  font-size: 13px;
  padding-bottom: 0.25rem;
`;
