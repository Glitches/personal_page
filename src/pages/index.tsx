import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import getTime from 'date-fns/get_time';
import { Flex } from 'reflexy';
import { Button } from '../lib/components/Button/index';

import './index.scss';
import { Header } from '../lib/components/Header';
import { Layout } from '../lib/components/Layout/Layout';

const timestamp: number = getTime(new Date());

export default (): JSX.Element => (
  <React.Fragment>
    <Layout maxWidth={85}>
      <Header display="sticky">
        <span>HEADER</span>
      </Header>
      <Flex className="base">
        {/* <Button color="red" label="house" onClick={() => console.log('ciao')} /> */}
        <StaticQuery
          query={graphql`
            query {
              swapi {
                Starship(name: "Millennium Falcon") {
                  name
                  hyperdriveRating
                  pilots(orderBy: height_DESC) {
                    name
                    height
                    homeworld {
                      name
                    }
                  }
                }
              }
            }
          `}
          render={data => console.log(data)}
        />
      </Flex>
    </Layout>
  </React.Fragment>
);
