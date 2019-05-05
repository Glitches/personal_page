/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

import './header.scss';

export interface Props {
  display: 'fixed' | 'sticky';
  children: React.ReactNode;
  maxWidth?: number;
}

export class Header extends React.PureComponent<Props> {
  private calcWidth = (): number => this.props.maxWidth - 5;

  private sticky = css`
    position: sticky;
    top: 1vh;
    width: ${this.calcWidth()}vw;
  `;

  private fixed = css`
    position: fixed;
    width: ${this.calcWidth()}vw;
  `;

  render = (): React.ReactNode => (
    <div
      key="HEADER"
      className="Header-bar"
      css={this.props.display === 'sticky' ? this.sticky : this.fixed}
    >
      {this.props.children}
    </div>
  );
}
