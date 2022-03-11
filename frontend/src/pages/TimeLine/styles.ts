import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

import { animated } from 'react-spring';
import HeaderImg from '../../assets/headerTwo.png';

interface RecProps {
  act_type: number;
}

export const Container = styled.div`
  header {
    height: 15rem;
    background: url(${HeaderImg});
    display: flex;
    align-items: center;

    img {
      margin-left: 5rem;
    }
  }
  p {
    text-align: justify;
  }
  svg {
    color: #2980b9;
  }
  button {
    position: relative;
    left: 29.3rem;
    top: -2.75rem;
    background: transparent;
    border: none;

    svg {
      transition: 1s color;
      background-color: transparent;
    }
  }
`;

export const SubHeader = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  height: 3.3rem;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.2rem;

  a {
    text-decoration: none;
    color: #959595;
    &:hover {
      color: ${shade(0.2, '#959595')};
    }

    h3 {
      margin-right: 0.3rem;
    }
  }
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  svg {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
  }

  p {
    font-weight: 700;
    color: #000000;
    text-align: none;
    width: 24rem;
  }

  & + div {
    margin-top: 1.5rem;
  }
`;

export const DateRec = styled.div`
  position: absolute;
  top: -12px;
  left: 0;
  background: #ddd;
  padding: 1px;
  -webkit-clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
  height: 52px;
  box-sizing: border-box;
  width: 90%;
`;

interface ColorTypes {
  [key: number]: string;
}

const colors: ColorTypes = {
  1: '#46EB8E',
  2: '#FF0000',
  3: '#3538D4',
  4: '#00A3FF',
  5: '#8615FF',
  6: '#ECB33B',
  7: '#FF28AB',
  8: '#35D4A7',
  9: '#35CAD4',
  10: '#8385FF',
  11: '#845B5B',
  12: '#045929',
  13: '#FF5C00',
  14: '#37839B',
  15: '#404040',
  16: '#00343a',
  999: '#808080',
};

export const Rec = styled.div<RecProps>`
  color: #fff;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  border-right-color: transparent;
  clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
  height: 50px;
  width: 100%;
  display: block;
  line-height: 52px;
  text-indent: 15px;

  ${(props) =>
    props.act_type &&
    css`
      background: ${colors[props.act_type]};
    `}
`;

const FlipInYReverseAnimation = keyframes`
 from {
      transform: perspective(400px) rotate3d(0, 1, 0, -90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, 20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(0, 1, 0, -10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, 5deg);
    }
    to {
      transform: perspective(400px);
    }
`;

export const BodyStyle = styled(animated.div)`
  will-change: transform, opacity;

  animation: ${FlipInYReverseAnimation} 0.5s;
  animation-play-state: unset;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.4s;
  width: 32rem;
  height: 35rem;
  overflow: auto;
`;

const FlipInYAnimation = keyframes`
 from {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
`;

export const InformationAct = styled(animated.div)`
  display: flex;

  animation: ${FlipInYAnimation} 0.8s;

  flex: 1 1 auto;

  flex-direction: column;
  justify-items: center;
  align-items: flex-start;

  padding: 1.5rem;
  border-radius: 0.5rem;

  width: 32rem;
  height: 35rem;
  overflow: auto;

  transition: 0.5s;
  background: linear-gradient(90deg, #e0f3ff, #e0f3ff, #caeaff 51%, #e0f3ff)
    var(--x, 0) / 200%;
  color: white;
  /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 0.5rem;

  :hover {
    --x: 100%;
  }
`;

export const ProcessNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3rem;
    font-weight: 500;
    padding-left: 1rem;
  }
`;

export const Footer = styled.div`
  position: relative;
  top: -3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  footer {
    display: flex;
    height: 100%;
    flex-direction: column;

    background: #2a84bf;
    margin-top: auto;
    position: relative;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 7rem;
      &:after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #e8f6ff;
      }

      img {
        width: 24.1875rem;
        height: 5.5rem;
      }
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a84bf;
    width: 100%;
    height: 3rem;
    p {
      color: #fcfcfc;
      font-weight: 500;
    }
  }
`;
