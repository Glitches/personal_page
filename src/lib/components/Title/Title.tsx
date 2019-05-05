/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

import './title.scss';
import { Flex } from 'reflexy';

export interface Props {
  label: string;
}

export const Title: React.StatelessComponent<Props> = ({ label }) => (
  <Flex className="title" center>
    <div>{label}</div>
  </Flex>
);
