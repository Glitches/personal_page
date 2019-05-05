import React from 'react';

import './index.scss';
import { Header } from '../lib/components/Header';
import { Layout } from '../lib/components/Layout/Layout';
import { Title } from '../lib/components/Title';

const app: React.StatelessComponent = () => (
  <div className="base">
    <Layout maxWidth={85}>
      <Header display="sticky">
        <Title label="Andrea Ceccarelli" />
      </Header>
      <div className="body-content">
        <code>
          Front-end engineer at <a href="https://www.facile.it" target="_blank">Facile.it</a>
          </code>
      </div>
    </Layout>
  </div>
);

export default app;
