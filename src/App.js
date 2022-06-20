import './font.css';
import './reset.css';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar';
import Menu from './components/menu'
import HomePage from './components/homepage';
import {secondaryColor, primaryColor, tertiaryColor} from '../src/components/common';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media (max-width: 1100px) {
      font-size: 50%;
    }
    @media (max-width: 850px) {
      font-size: 40%;
    }
    @media (max-width: 650px) {
      font-size: 30%;
    }
    @media (max-width: 380px) {
      font-size: 20%;
    }
  }
  body {
    background-color: ${primaryColor};
  }
  ::-moz-selection {
    background: #F2E4D5;
    text-shadow: none;
  }
  ::selection {
      background: #F2E4D5;
      text-shadow: none;
  }
  ::-webkit-scrollbar{
      width: 10px;
  }
  ::-webkit-scrollbar-thumb{
      background-color:  ${secondaryColor};
      border-radius: 15px;
  }
`



function App() {
  return (
    <div className="App" style={{display: "flex",justifyContent: "flex-end"}}>
      <GlobalStyle />
      <Navbar/>
      <Menu />
      <HomePage />
    </div>
  );
}

export default App;
