import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useRef, useEffect } from 'react';
import CardModal from './CardModal';
import CarouselTopTen from './CarouselTopTen';
function CarouselCard(props) {
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
  const carouselTitle = [
    {
      title: '내가 찜한 컨텐츠',
    },
    {
      title: '액션',
    },
    {
      title: 'SF',
    },

    {
      title: '공포',
    },
    {
      title: '코미디',
    },
    {
      title: '멜로/로맨스',
    },
  ];

  const [ismodal, isSetModal] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(
    Array(carouselTitle.length).fill(0)
  );
  const slideRefs = useRef([]);
  const nextSlide = (index) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[index] = (newSlides[index] + 1) % 3;
      return newSlides;
    });
  };

  const prevSlide = (index) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[index] = newSlides[index] === 0 ? 3 : newSlides[index] - 1;
      return newSlides;
    });
  };
  useEffect(() => {
    slideRefs.current.forEach((ref, index) => {
      const currentSlideIndex = currentSlide[index];
      ref.current.style.transition = 'all 1s ease-in-out';
      ref.current.style.transform = `translateX(-${currentSlideIndex}00%)`;
    });
  }, [currentSlide]);

  return (
    <>
      <CarouselDiv>
        <CarouselTopTen></CarouselTopTen>
        {carouselTitle.map((carousel, index) => (
          <div key={index}>
            <CarouselTitle>{carousel.title}</CarouselTitle>
            <Slider>
              <LeftArrow onClick={() => prevSlide(index)}>&#60;</LeftArrow>
              <CarouselContentDiv
                ref={(el) => {
                  slideRefs.current[index] = { current: el };
                }}
              >
                {images.map((image, i) => (
                  <CarouselContent
                    key={i}
                    src={image}
                    onClick={() => {
                      isSetModal(true);
                    }}
                  />
                ))}
              </CarouselContentDiv>
              <RightArrow onClick={() => nextSlide(index)}>&#62;</RightArrow>
            </Slider>
          </div>
        ))}
      </CarouselDiv>
      <CardModal modal={ismodal} setModal={isSetModal} />
    </>
  );
}

const Slider = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
export const CarouselDiv = styled.div`
  width: 90vw;

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
  margin-top: 1%;
`;
export const CarouselContentDiv = styled.div`
  display: flex;
  margin-top: 1%;
  align-items: center;
`;

export const CarouselContent = styled.img`
  background: black;
  width: 15vw;
  padding-right: 2%;
  margin-bottom: 1%;
  cursor: pointer;
`;
export const Arrow = styled.button`
  position: absolute;

  direction: ${(props) => props.direction};
  color: white;
  opacity: 0.5;
  font-size: 60px;
  cursor: pointer;
  z-index: 1;
  border: none;
  background: none;
  &:hover {
    opacity: 1;
  }
`;
const LeftArrow = styled(Arrow.withComponent('button'))`
  left: 0px;
`;

const RightArrow = styled(Arrow.withComponent('button'))`
  right: 0px;
`;

export default CarouselCard;
