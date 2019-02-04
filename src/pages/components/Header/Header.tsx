import React from 'react';

import './header.scss';

export interface Props {
  display: 'fixed' | 'sticky';
  children: React.ReactNode;
}

export const Header: React.StatelessComponent<Props> = (props: Props) => (
  <div className="Header-bar">{props.children}</div>
);
