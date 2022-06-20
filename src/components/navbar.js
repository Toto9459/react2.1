import React from 'react'
import { useState } from "react";
import styled from 'styled-components';
import {ReactComponent as DribbleIcon} from '../icons/dribbble.svg';
import {ReactComponent as GithubIcon} from '../icons/github.svg';
import {ReactComponent as TwitterIcon} from '../icons/twitter.svg';
import {primaryColor, secondaryColor, LinksA, tertiaryColor} from './common';


const NavbarContainer = styled.section`
  height: 100vh;
  min-width: 130px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 2px solid #95ADCF;
  background-color: ${primaryColor};

  @media (max-width: 850px) {
    height: 10%;
    border-right: none;
    width: 100%;
    max-width: 100%;
  }
`

const NavBarWrap = styled.div`
  height: 100%;
  width: 100%;
`
const NavBarFlex1 = styled.div`
  height: 30%;
  width: 100%;
  padding-top: max(5rem, 30px);
  @media (max-width: 850px) {
    height: 100%;
    padding-top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
const NavBarFlex2 = styled.div`
  height: 35%;
  width: 100%;
  @media (max-width: 850px) {
    display: none;
  }
`
const NavBarFlex3 = styled.div`
  height: 35%;
  width: 100%;
  padding-bottom: max(5rem, 30px);
  @media (max-width: 850px) {
    display: none;
  }
`

const MenuBtnContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 850px) {
    height: auto;
    width: auto;
    padding: 20px 20px;
  }
`
const HomeBtnContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactBtnContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`


const Bar = styled.div`
  position: absolute;
  left: 0;
  height: 3px;
  width: 50px;
  border-radius: 10px;
  background: ${props => props.isActive === true ? "#95ADCF" : "#FFEDCB"};
  transition: ${props => props.isActive === true ? 'transform 400ms ease' : 'transform 0.5s ease'};
  z-index: 999;
  
  &.bar1 {
    top: 0;
    transform:${props => props.isActive === true ?  'translate3d(0, 15px, 0) rotate(-225deg)' : 'translateY(10px)' };
  }
  &.bar2 {
    bottom: 0;
    transform:${props => props.isActive === true ?  'translate3d(0, -22px, 0) rotate(225deg)' : 'translateY(-10px)' };
  }

  @media (max-width: 280px) {
    height: 3px;
  }
`
const BurgerContainer = styled.button`
  position: relative;
  height: ${props => props.isActive === true ?  24 + "px" : 40 + "px"};
  width: 50px;
  background: none;
  border: none;
  margin-bottom: max(6rem, 20px);
  
    /* &:hover > .bar1{
        transform: translate3d(0, 15px, 0) rotate(45deg);
    }
    &:hover > .bar2{
        transform: translate3d(0, -22px, 0) rotate(495deg);
    }  */

  /* &:hover > .bar1{
      transform: translate3d(0, 10px, 0) rotate(-180deg);
  }
  &:hover > .bar2{
      transform: translateY(-10px) rotate(-180deg);
  } */


  @media (max-width: 850px) {
    width: 55px;
    margin-bottom: 0;
  }
  @media (max-width: 280px) {
    width: 50px;
  }
`
const SocialsLinks = styled.ul`
  height: auto;
  width: auto;
  margin-top: max(6rem, 20px);
`
const DribbleLinks = styled(DribbleIcon)`
  height: 2.5rem;
  width: 2.5rem;
  min-height: 20px;
  min-width: 20px;
  &:hover > path {
      fill: #95ADCF;
  }
  path {
    transition: all .3s ease-out;
  }
`
const GithubLinks = styled(GithubIcon)`
  height: 2.5rem;
  width: 2.5rem;
  min-height: 20px;
  min-width: 20px;
  &:hover > path {
      fill: #95ADCF;
  }
  path {
    transition: all .3s ease-out;
  }
`
const TwitterLinks = styled(TwitterIcon)`
  height: 2.5rem;
  width: 2.5rem;
  min-height: 20px;
  min-width: 20px;
  &:hover > path {
      fill: #95ADCF;
  }
  path {
    transition: all .3s ease-out;
  }
`
const TextRotate = styled(LinksA)`
  &:after {    
    bottom: 0;
    content: "";
    display: block;
    width: 2px;
    left: -20%;
    position: absolute;
    background: ${tertiaryColor};
    transition: height 0.3s ease 0s, left 0.3s ease 0s;
    height: 0;
  }
  &:hover:after { 
    height: 100%; 
    top: 0; 
  }
  @media (max-width: 850px) {
    display: none;
  }
`
const LinksIcon = styled.a`
  position: relative;
  &:after {    
    bottom: 90%;
    content: "";
    display: block;
    height: 10px;
    border-radius: 50%;
    left: -60%;
    position: absolute;
    background: ${tertiaryColor};
    transform: translate(-50%, 0%);
    transition: width 0.2s ease 0s;
    width: 0;
  }
  &:hover:after { 
    width: 10px; 
  }
`




const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)


  const ClickMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <NavbarContainer>
      <NavBarWrap>

        <NavBarFlex1>

          <MenuBtnContainer>

            <BurgerContainer onClick={ClickMenu} >
              <Bar className='bar1' isActive={openMenu}/>
              <Bar className='bar2'isActive={openMenu}/>
            </BurgerContainer>

            <TextRotate href='#'>Menu</TextRotate>

          </MenuBtnContainer>

        </NavBarFlex1>

        <NavBarFlex2>

          <HomeBtnContainer>
            <TextRotate href='#'>Home</TextRotate>
          </HomeBtnContainer>

        </NavBarFlex2>
        
        <NavBarFlex3>

          <ContactBtnContainer>
            <TextRotate href='#'>Contact</TextRotate>

              <SocialsLinks>

                <li style={{marginBottom: 2 + "rem"}}>
                  <LinksIcon href='https://dribbble.com/'>
                    <DribbleLinks />
                  </LinksIcon>
                </li>

                <li style={{marginBottom: 2 + "rem"}}>
                  <LinksIcon href='https://github.com/'>
                    <GithubLinks />
                  </LinksIcon>
                </li>

                <li>
                  <LinksIcon href='https://twitter.com/'>
                    <TwitterLinks />
                  </LinksIcon>
                </li>

              </SocialsLinks>

          </ContactBtnContainer>

        </NavBarFlex3>

      </NavBarWrap>
      
    </NavbarContainer>
    
  )
}

export default Navbar