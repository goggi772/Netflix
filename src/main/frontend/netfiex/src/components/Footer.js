import styled from 'styled-components';
function Footer() {
  return (
    <FooterBackground>
      <FooterContent>질문이 있으신가요? 문의 전화: 010-8823-5776</FooterContent>
      <FooterContent>
        <FooterDetailContent>자주묻는 질문</FooterDetailContent>
        <FooterDetailContent>자주묻는 질문</FooterDetailContent>
        <FooterDetailContent>자주묻는 질문</FooterDetailContent>
        <FooterDetailContent>자주묻는 질문</FooterDetailContent>
      </FooterContent>
    </FooterBackground>
  );
}

export default Footer;

export const FooterBackground = styled.div`
  background-color: black;
`;
export const FooterContent = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  color: white;
  z-index: 10000;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FooterDetailContent = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  color: white;
  z-index: 10000;
`;
