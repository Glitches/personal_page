import React from 'react';

export type AppColor = 'red' | 'blue' | 'white';
export interface Props {
  color: AppColor;
  label: string;
  onClick: () => void;
}

const App: React.StatelessComponent<Props> = (props: Props) => (
  <button onClick={props.onClick}>
    <span>{props.label}</span>
  </button>
);

export default App;
