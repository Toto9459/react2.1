import React from 'react'
import styled from 'styled-components';
import {ReactComponent as ArrowImg} from '../icons/arrow.svg';
import {secondaryColor, tertiaryColor, morgenWalsh, BigText, LinksA} from './common';


const Head = styled.header`
    height: auto;
    width: 100%;
    display: inline-flex;
`

/* const Title = styled.h1`
    height: auto;
    width: auto;
    max-height: 140px;
    font-size: max(14rem, 20px);
    color: ${tertiaryColor};
    font-family: ${morgenWalsh};
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    letter-spacing: .5rem;
    text-transform: uppercase;
` */
const Indent = styled.span`
    display: block;
    height: max(1rem, 5px);
    width: max(6rem, 20px);
    background-color: ${secondaryColor};
    //margin-top: 2rem;
`

const Arrow = styled(ArrowImg)`
    height: max(5rem, 25px);
    width: max(5rem, 25px);
    margin: 6rem 0 0 3rem;
`

const WorkBtn = styled.button`
    position: relative;
    height: auto;
    width: auto;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    border: none;
    background-color: ${tertiaryColor};
    transition: all .7s ease-out;
    &:hover {
        background-color: ${secondaryColor};
    }
    @media (max-width: 850px) {
        display: none;
    }
`

const WorkA = styled(LinksA)`
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translate(-50%, 50%);
`

const WorkBtnContainer = styled.div`
    height: auto;
    width: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding-top: .5rem;
    padding-right: 4rem;
    min-width: 300px;
    @media (max-width: 1300px) {
        min-width: 180px;
    }
    @media (max-width: 1100px) {
        min-width: 100px;
    }
`

function header() {
  return (
    <div style={{height: 'auto', width: 100 + "%", display: 'inline-flex', alignItems: 'center', paddingLeft: 'max(5rem, 20px)', paddingTop: 2 + 'rem'}}>
        <Head>
            <div style={{height: 100 + "%", width: 90 + "%", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <BigText>Portfolio&nbsp;<Indent />&nbsp;V1<Arrow /></BigText>
            </div>
            <WorkBtnContainer>
                <WorkBtn>
                    <WorkA>Work</WorkA>
                </WorkBtn>
            </WorkBtnContainer>
        </Head>
    </div>
  )
}

export default header
