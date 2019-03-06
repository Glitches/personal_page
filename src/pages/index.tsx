import React from "react";
import getTime from "date-fns/get_time";
import { Flex } from "reflexy";
import { Button } from "../lib/components/Button/index";

import "./index.scss";
import { Header } from "../lib/components/Header";
import { Layout } from "../lib/components/Layout/Layout";

const timestamp: number = getTime(new Date());

class app extends React.PureComponent {
	render() {
		return (
			<div className="base">
				<Layout maxWidth={85}>
					<Header display="sticky">
						<span>HEADER</span>
					</Header>
					<Flex>
						<Button color="red" label="house" onClick={() => console.log("ciao")} />
						<div>{timestamp}</div>
					</Flex>
				</Layout>
			</div>
		);
	}
}

export default app;
