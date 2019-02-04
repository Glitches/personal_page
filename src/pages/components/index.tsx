import React from 'react';
import { Header } from './Header';

export type AppColor = 'red' | 'blue' | 'white';
export interface Props {
  color: AppColor;
  label: string;
  onClick: () => void;
}

const App: React.StatelessComponent<Props> = (props: Props) => (
  <React.Fragment>
    <Header />
    <button onClick={props.onClick}>
      <span>{props.label}</span>
    </button>
  </React.Fragment>
);

export default App;
