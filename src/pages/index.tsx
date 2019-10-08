import * as React from 'react';
import { Header } from '../lib/components/Header';
import { Layout } from '../lib/components/Layout/Layout';
import { Title } from '../lib/components/Title';
import { Image } from '../lib/components/Image';

import './index.scss';

const app: React.StatelessComponent = () => (
  <div className="base">
    <Layout maxWidth={85}>
      <Header display="sticky">
        <Title label="Andrea Ceccarelli" />
      </Header>
      <div className="body-content">
        <code>
          Front-end engineer at
          {' '}
          <a href="https://www.facile.it" rel="noopener noreferrer" target="_blank">
            Facile.it
          </a>
        </code>
      </div>
      <Image />
    </Layout>
  </div>
);

export default app;
