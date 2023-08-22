import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useRef, useEffect } from 'react';
import CardModal from './CardModal';
function CarouselTopTen(props) {
  const images = [
    '../topten1.jpg',
    '../topten2.jpg',
    '../topten3.jpg',
    '../topten4.jpg',
    '../topten5.jpg',
    '../topten6.jpg',
    '../topten7.jpg',
    '../topten8.jpg',
    '../topten9.jpg',
    '../topten10.jpg',
  ];
  const carouselTitle = [
    {
      title: '오늘의 Top10',
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
      newSlides[index] = (newSlides[index] + 1) % 2;
      return newSlides;
    });
  };

  const prevSlide = (index) => {
    setCurrentSlide((prevSlides) => {
      const newSlides = [...prevSlides];
      newSlides[index] = newSlides[index] === 0 ? 2 : newSlides[index] - 1;
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

export default CarouselTopTen;
