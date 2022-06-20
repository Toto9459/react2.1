import styled from 'styled-components';

export const primaryColor = "#0D1B2A"
export const secondaryColor = "#FFEDCB"
export const tertiaryColor = "#95ADCF"
export const white = "#F1F1F1"
export const morgenWalsh = "Morgenwalsh"

export const BigText = styled.h1`
  height: auto;
  width: auto;
  font-size: max(14rem, 20px);
  color: ${white};
  font-family: ${morgenWalsh};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: .5rem;
  text-transform: uppercase;
`
export const LinksA = styled.a`
  position: relative;
  font-size: max(1.6rem);
  writing-mode: vertical-lr;
  color: ${secondaryColor};
  font-family: 'Roboto Flex', sans-serif;
  text-transform: uppercase;
  transition: all .3s ease-out;
  font-variation-settings: 'GRAD' 0, 'slnt' 0, 'XTRA' 483, 'XOPQ' 124, 'YOPQ' 91, 
  'YTLC' 514, 'YTUC' 712, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738;
  &:hover {
    color: #95ADCF;
  }
`