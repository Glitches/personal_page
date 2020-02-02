import * as React from 'react';
import { Header } from '../lib/components/Header';
import { Layout } from '../lib/components/Layout/Layout';
import { Title } from '../lib/components/Title';
import { Tabs } from '../lib/components/Tabs';

import './index.scss';

const app: React.StatelessComponent = () => (
  <div className="base">
    <Layout maxWidth={85}>
      <Header display="sticky">
        <Title label="Andrea Ceccarelli" />
      </Header>
      <Tabs tabs={[
        {
          label: 'home',
          selected: true,
          href: ''
        },
        {
          label: 'blog',
          selected: false,
          href: ''
        },
        {
          label: 'about',
          selected: false,
          href: ''
        },
      ]} />
      <div className="body-content">
        <p>
          Front-end engineer at
          {' '}
          <a href="https://www.facile.it" rel="noopener noreferrer" target="_blank">
            Facile.it
          </a>
        </p>
        <p>
          Currently developing beautiful things in React, Typescript.
        </p>

        <p>
          You can find me somewhere in Milan or on{' '}
          <a href="https://www.github.com/glitches" rel="noopener noreferrer" target="_blank">
            Github
          </a>
        </p>
      </div>
    </Layout>
  </div>
);

export default app;
