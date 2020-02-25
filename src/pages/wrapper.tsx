import * as React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { Header } from '../lib/components/Header';
import { Title } from '../lib/components/Title';
import { Tabs } from '../lib/components/Tabs';

const eight = document.body.clientHeight;
const width = document.body.clientWidth;

export const Wrapper = ({ children }) => (
  <Layout maxWidth={(width * 99) / 100} maxHeight={(eight * 99) / 100}>
    <Header display="sticky">
      <Title label="Yes, I Code!" />
    </Header>
    <Tabs
      tabs={[
        {
          label: 'home',
          selected: true,
          href: '/',
        },
        {
          label: 'blog',
          selected: false,
          href: '/blog',
        },
        {
          label: 'about',
          selected: false,
          href: '/about',
        },
      ]}
    />
    <div className="body-content">{children}</div>
  </Layout>
);
