import React from 'react';
import jumboData from './fixtures/jumbo';
import Jumbotron from './components/jumbotron';

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item} direction={item.direction}>
            <p>Hello</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
