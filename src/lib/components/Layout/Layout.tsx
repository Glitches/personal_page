/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { some } from 'fp-ts/lib/Option';
import * as Header from '../Header';

import './layout.scss';

export interface LayoutProps {
  maxWidth: number;
  maxHeight: number;
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
        width: ${this.props.maxWidth}px;
        height: ${this.props.maxHeight}px;
      `}
    >
      {this.renderHeader(this.props.children).map(el => el)}
    </div>
  );
}
