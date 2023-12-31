import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import CarouselCard from '../components/CarouselCard';
import CardModal from '../components/CardModal';

import styled, { css } from 'styled-components';
import '../App.css';
import requests from '../components/Request';
function Main(props) {
  let [ismodal, isSetModal] = useState(false);

  return (
    <div style={{}}>
      <Header></Header>
      <Banner></Banner>
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTreding} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      {/* <ContentDiv>
            <CarouselCard></CarouselCard>
            <CardModal modal={ismodal} setModal={isSetModal}></CardModal>
          </ContentDiv> */}
    </div>
  );
}

export default Main;