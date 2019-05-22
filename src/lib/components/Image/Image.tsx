import * as React from 'react';

import './image.scss';

export interface Props {}

export const Image: React.FunctionComponent = () => (
  <div className="image">
    <a href="https://www.github.com/glitches" target="_blank">
      <img
        alt="https://www.github.com/glitches"
        src={require('../../../../static/images/GitHub-Mark-64px.png')}
      />
    </a>
  </div>
);
