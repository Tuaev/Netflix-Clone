import React from 'react';
import { Inner, Container } from './styles/jumbotron';

export default function Jumbotron({ direction = 'row', ...restProps }) {
  return (
    <Inner direction={direction}>
      <p>Hello!</p>
    </Inner>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
