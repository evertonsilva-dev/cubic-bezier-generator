import 'noty/lib/noty.css';
import 'noty/lib/themes/sunset.css';
import { createGlobalStyle } from 'styled-components';
import { FuhthestBackground, Secundaria, TextColor } from './components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,600;1,400&family=Julius+Sans+One&display=swap');
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    margin:0;
    font-family: 'Josefin Sans', sans-serif;
    position: relative;
    overflow:hidden;
    &:before{
      content:"";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0px 0 100vh 100vw;
      border-color: transparent transparent transparent ${Secundaria};
      z-index:-1;            
    }

  }
  *, *::before,*::after{
    box-sizing:border-box;
  }
  @keyframes animate {
    from{
      transform:translateY(0);
    }
    to{
      transform:translateY(-100px);
    }
  }
`;
export default GlobalStyle;
