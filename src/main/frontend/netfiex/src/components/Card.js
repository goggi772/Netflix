import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';

function Card() {
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [sf, setSf] = useState([]);
  const [drama, setDrama] = useState([]);
  useEffect(() => {
    fetch('/data2.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // json 변수에 파싱된 JSON 데이터가 저장됩니다.

        const actionData = json?.movie.filter(
          (value) => value.category === '액션'
        );
        const romanceData = json?.movie.filter(
          (value) => value.category === '멜로/로맨스'
        );
        const comedyData = json?.movie.filter(
          (value) => value.category === '코미디'
        );
        const horrorData = json?.movie.filter(
          (value) => value.category === '공포'
        );
        const sfData = json?.movie.filter((value) => value.category === 'SF');
        const dramaData = json?.movie.filter(
          (value) => value.category === '드라마'
        );

        setAction(actionData);
        setRomance(romanceData);
        setComedy(comedyData);
        setHorror(horrorData);
        setSf(sfData);
        setDrama(dramaData);

        // 필터링된 데이터를 활용한 로직을 여기에서 처리합니다.
        // 예: 상태 업데이트, 렌더링 등
      })
      .catch(function (error) {
        console.log('데이터를 불러오는 도중 오류가 발생했습니다.', error);
      });
  }, []);
  console.log(action);
  return (
    <StCardCC>
      <CarouselCard props={action} />
      <CarouselCard props={romance} />
      <CarouselCard props={comedy} />
      <CarouselCard props={horror} />
      <CarouselCard props={sf} />
      <CarouselCard props={drama} />
    </StCardCC>
  );
}
const StCardCC = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Card;
