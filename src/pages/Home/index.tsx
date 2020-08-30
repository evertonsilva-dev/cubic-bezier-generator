import React from 'react';
import BezierController from 'src/components/BezierController';
import { Title } from 'src/styles/components';
import { Cont, HomeContainer } from './styles';
export default function Home() {
  return (
    <HomeContainer>
      <Cont>
        <Title>Cubic-Bezier Generator</Title>
        <BezierController />
      </Cont>
    </HomeContainer>
  );
}
