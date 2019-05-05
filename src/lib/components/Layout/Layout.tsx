/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import * as Header from '../Header';

import './layout.scss';
import { some } from 'fp-ts/lib/Option';

export interface LayoutProps {
  maxWidth: number;
}

export class Layout extends React.PureComponent<LayoutProps> {
  private renderHeader = (children: React.ReactNode[] | JSX.Element | React.ReactNode) => React.Children.map(children, (child: React.ReactElement<Header.Props>) => some(child)
    .map((child) => {
      if (child.type.name === Header.Header.name) {
        return React.cloneElement(child, { maxWidth: this.props.maxWidth });
      }
      return child;
    })
    .toNullable());

  render = (): React.ReactNode => (
    <div
      className="Layout"
      css={css`
        width: ${this.props.maxWidth}vw;
      `}
    >
      {this.renderHeader(this.props.children).map(el => el)}
    </div>
  );
}
