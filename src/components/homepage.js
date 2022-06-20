import React from 'react';
import styled from 'styled-components';
import Header from './header';
import {primaryColor} from './common';
import LandingContent from './landingContent';


const HomePageContainer = styled.section`
  height: 100vh;
  width: calc(100% - 130px);
  background: ${primaryColor};

  @media (max-width: 850px) {
    width: 100%;
    padding-top: 10%;
  }
`



const landing = () => {


  return (
    <HomePageContainer>
      <Header />
      <landingContent />
    </HomePageContainer>
  )
}

export default landing
