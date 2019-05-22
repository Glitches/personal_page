/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

import './title.scss';

export interface Props {
  label: string;
}

export const Title: React.StatelessComponent<Props> = ({ label }) => (
  <div className="title">
    <div>{label}</div>
  </div>
);
