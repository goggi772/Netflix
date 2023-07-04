import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import CarouselCard from '../components/CarouselCard';
import CardModal from '../components/Modal';
import {
  MainPageBackGround,
  MainNavBarBackGround,
  MainNavBar,
} from './BeforeLoginPage';
import { LoginLogoContainer } from './Login';
import styled, { css } from 'styled-components';
function Main(props) {
  let [ismodal, isSetModal] = useState(false);
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const right = () => {
    if (currentSlide == 2) {
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const left = () => {
    if (currentSlide == 0) {
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
      slideRef.current.style.transform = `translateX(-${TOTAL_SLIDES}00%)`;
    } else {
      setCurrentSlide(currentSlide - 1);
      slideRef.current.style.transform = `translateX(-${currentSlide - 1}00%)`;
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  const images = [
    '../1.jpg',
    '../2.jpg',
    '../3.jpg',
    '../4.jpg',
    '../5.jpg',
    '../6.jpg',
    '../7.jpg',
    '../8.jpg',
    '../9.jpg',
    '../10.jpg',
    '../11.jpg',
    '../12.jpg',
    '../13.jpg',
    '../14.jpg',
    '../15.jpg',
    '../16.jpg',
  ];
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
            <CarouselDiv>
              <CarouselTitle>최다 검색</CarouselTitle>

              <CarouselContentDiv ref={slideRef}>
                {images.map((image, index) => (
                  <CarouselContent
                    key={index}
                    src={image}
                    onClick={() => {
                      isSetModal(true);
                    }}
                  />
                ))}
              </CarouselContentDiv>
              <Button onClick={prevSlide}>이전</Button>
              <Button onClick={nextSlide}>다음</Button>
            </CarouselDiv>
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
export const CarouselDiv = styled.ul`
  width: 90vw;
  height: 250px;
  border-radius: 5px;
  margin-top: 2%;
  z-index: 1;
  overflow: hidden;
`;
export const CarouselTitle = styled.span`
  display: table-cell;
  font-size: 1.4vw;
  line-height: 1.25vw;
  vertical-align: bottom;
`;
export const CarouselContentDiv = styled.li`
  display: flex;
  margin-top: 1%;
  align-items: center;
`;

export const CarouselContent = styled.img`
  background: black;
  width: 15vw;
  padding-right: 2%;
  cursor: pointer;
`;
export const Left = styled.div``;

export const Button = styled.button`
  padding: 0 2em;
  color: white;
  background: unset;
  border: none;
  cursor: pointer;
`;
