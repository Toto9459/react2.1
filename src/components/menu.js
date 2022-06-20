import React from 'react'
import styled from 'styled-components';
import {primaryColor, secondaryColor, tertiaryColor, morgenWalsh} from './common';

const MenuContainer = styled.section`
  //display: none;
  height: 100%;
  width: calc(100% - 130px);
  position: fixed;
  right: 0;
  background: ${primaryColor};
  //opacity: 0;
  z-index: 1;
  @media (max-width: 850px){
    width: 100%;
    margin-top: 15%;
  }
`

const Copyright = styled.p`
  height: auto;
  width: auto;
  color: ${secondaryColor};
  font-size: max(1.4rem, 10px);
  line-height: 17px;
`
const PaddingCopy = styled.div`
  height: 100%;
  width: 100%;
  color: ${secondaryColor};
  font-size: max(1.4rem, 10px);
  line-height: 17px;
`

function Menu() {
  return (
    <MenuContainer>
      <div style={{height: 90 + "%", width: 100 + "%"}}>
        <div></div>
        <div></div>
      </div>
      <div style={{height: 10 + "%", width: 100 + "%",}}>
        <PaddingCopy>
          <Copyright>Designed and made by Vittorio</Copyright>
          <Copyright>2022 - All Rights Reserverd © </Copyright>
        </PaddingCopy>
      </div>
    </MenuContainer>
  )
}

export default Menu