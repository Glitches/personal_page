import React from 'react';
import App from './components/index';
import { Button } from './components/Button/index';

export default () => (
  <div style={{ color: 'purple' }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    {' '}
    <Button color="red" label="Dog" onClick={() => console.log('ciao')} />
  </div>
);
