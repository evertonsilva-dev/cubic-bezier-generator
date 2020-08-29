import { Card, ClosestBackground, Secundaria, TextColor } from 'src/styles/components';
import styled from 'styled-components';

export const BezierContainer = styled(Card)`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;
  margin: 0px 20px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const AnimationBox = styled.div`
  align-self: center;
  background-color: ${ClosestBackground};
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  position: relative;
  min-height: 180px;
`;
export const AnimationItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 15px;
  background-color: ${Secundaria};
  animation: animate 1s ${(props) => props.title} infinite alternate;
  &:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.5;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.3;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.1;
  }
`;
export const AnimationController = styled.div`
  padding: 0 15px;
`;
export const Bezier = styled.div`
  background-color: ${ClosestBackground};
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  input {
    background: transparent;
    color: ${TextColor};
    border: none;
    font-size: inherit;
    text-align: center;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
