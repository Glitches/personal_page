import React from 'react';

import './button.scss';

export type ButtonColor = 'red' | 'blue' | 'white';
export interface Props {
  color: ButtonColor;
  label: string;
  onClick: () => void;
}

export const Button: React.StatelessComponent<Props> = (props: Props) => (
  <button className="Button" onClick={props.onClick}>
    <span>{props.label}</span>
  </button>
);
