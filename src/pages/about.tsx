import * as React from 'react';
import { Wrapper } from './wrapper';

export default props => (
  <div className="base">
    <Wrapper>
      <p>
        Front-end engineer at
        {' '}
        <a href="https://www.facile.it" rel="noopener noreferrer" target="_blank">
          Facile.it
        </a>
      </p>
      <p>Currently developing beautiful things in React and Typescript.</p>

      <p>
        You can find me somewhere in Milan or on
        {' '}
        <a href="https://www.github.com/glitches" rel="noopener noreferrer" target="_blank">
          Github
        </a>
      </p>
    </Wrapper>
  </div>
);
