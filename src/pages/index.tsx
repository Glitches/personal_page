import React from 'react';
import { graphql } from 'gatsby';
import getTime from 'date-fns/get_time';
import { Flex } from 'reflexy';
import { Button } from './components/Button/index';

import './index.scss';

const timestamp: number = getTime(new Date());

export default () => (
  <React.Fragment>
    <Flex className="base">
      <Button color="red" label="@ house" onClick={() => console.log('ciao')} />

      <div>{timestamp}</div>
    </Flex>
  </React.Fragment>
);
