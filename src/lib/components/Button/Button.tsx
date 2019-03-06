import React from "react";

import "./button.scss";

export type ButtonColor = "red" | "blue" | "white";
export interface ButtonProps {
	children?: React.ReactNode;
	color: ButtonColor;
	label: string;
	onClick: () => void;
}

export const Button: React.StatelessComponent<ButtonProps> = (props: ButtonProps) => (
	<React.Fragment>
		<button className="Button" onClick={props.onClick}>
			<div className="button-label">{props.label}</div>
			<div>{props.children}</div>
		</button>
	</React.Fragment>
);
