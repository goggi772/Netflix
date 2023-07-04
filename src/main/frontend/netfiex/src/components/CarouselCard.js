import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useRef, useEffect } from 'react';

function CarouselCard(props) {
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
    slideRef.current.style.transition = 'all 1s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
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
    <>
      <CarouselDiv>
        <CarouselTitle>최다 검색</CarouselTitle>

        <CarouselContentDiv ref={slideRef}>
          {images.map((image, index) => (
            <CarouselContent key={index} src={image} />
          ))}
        </CarouselContentDiv>
        <Button onClick={prevSlide}>이전</Button>
        <Button onClick={nextSlide}>다음</Button>
      </CarouselDiv>
    </>
  );
}

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
`;
export const Left = styled.div``;

export const Button = styled.button`
  padding: 0 2em;
  color: white;
  background: unset;
  border: none;
  cursor: pointer;
`;

export default CarouselCard;
