import React from 'react';
import { graphql } from 'gatsby';
import App from './components/index';
import { Button } from './components/Button/index';

export default () => (
  <div style={{ color: 'purple' }}>
    <Button color="red" label="@ house" onClick={() => console.log('ciao')} />
  </div>
);
