import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import CarouselCard from '../components/CarouselCard';
import CardModal from '../components/CardModal';
import {
  MainPageBackGround,
  MainNavBarBackGround,
  MainNavBar,
} from './BeforeLoginPage';
import { LoginLogoContainer } from './Login';
import styled, { css } from 'styled-components';
function Main(props) {
  let [ismodal, isSetModal] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '230vh',
      }}
    >
      <LoginedMainPageBackGround>
        <MainNavBarBackGround>
          <Header></Header>

          <ContentDiv>
            <LogoImage src='../bglogo.jpg'></LogoImage>
            <TopSeriesRankDiv>
              <TopTenImg src='../top10.png'></TopTenImg>
              <TopSeriesRank>오늘의 시리즈 3위</TopSeriesRank>
            </TopSeriesRankDiv>
            <TopSeriesContent>
              두 청년 복서가 선한 대부업자와 한뜻으로 뭉친다. 돈 때문에 절박한
              약자들을 먹잇감 삼는 악랄한 사채업자에 대적하기 위해.
            </TopSeriesContent>
            <DetailBtn>상세정보</DetailBtn>
            <CarouselCard></CarouselCard>
            <CardModal modal={ismodal} setModal={isSetModal}></CardModal>
          </ContentDiv>
        </MainNavBarBackGround>
      </LoginedMainPageBackGround>
    </div>
  );
}

export default Main;
export const LogoImage = styled.img`
  width: 50%;
  padding: 15px;
  width: 36vw;
`;
export const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  top: 20vh;
  left: 4%;
  width: 36%;
`;
export const TopSeriesRank = styled.div`
  font-size: 1.6vw;
  text-align: center;
`;
export const TopSeriesContent = styled.div`
  font-size: 1.2vw;
  margin-top: 1%;
  font-wight: 400;
  padding-top: 1%;
  line-height: normal;
`;
export const TopSeriesRankDiv = styled.div`
  display: flex;
  justify-content: start;
  margin-right: 1%;
  align-items: center;
`;
export const TopTenImg = styled.img`
  width: 5%;
  padding: 15px;
  width: 2vw;
  border-radius: 5px;
`;
export const LoginedMainPageBackGround = styled.div`
  color: white;
  background: url(../bgimg.jpg) center no-repeat;
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
export const DetailBtn = styled.button`
  width: 25%;
  height: 6vh;
  background: rgba(109, 109, 110, 0.8);
  color: white;
  border-radius: 5px;
  font-size: 1.2vw;
  font-weight: 300;
  margin-top: 3%;
`;
