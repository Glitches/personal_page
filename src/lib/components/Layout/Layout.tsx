/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import './layout.scss';

interface Props {
  maxWidth: number;
}

export class Layout extends React.PureComponent<Props> {
  renderHeader(children: React.ReactNode[] | JSX.Element | React.ReactNode) {
    if (!Array.isArray(children)) {
      return [children];
    }
    const childrens = children.map((child: React.ReactNode) => {
      if (child.type.displayName === 'Header') {
        const el = React.cloneElement(child, { maxWidth: this.props.maxWidth });
        return el;
      }
      return child;
    });
    return childrens;
  }

  render() {
    return (
      <div
        className="Layout"
        css={css`
          width: ${this.props.maxWidth}vw;
        `}
      >
        {this.renderHeader(this.props.children).map(el => el)}
        <p>ciao andrea</p>
      </div>
    );
  }
}
