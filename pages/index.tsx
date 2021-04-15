import { TextInput, NumberInput, ColorInput } from "@dekk-ui/input-field";
import React from "react";
import { Viewport } from "../doktor";

const Home = () => {
	return (
		<>
			<Viewport>
				<TextInput fullWidth />
				<br />
				<br />
				<TextInput />
				<br />
				<br />
				<ColorInput width="100px" />
				<br />
				<br />
				<TextInput width="132px" />
				<br />
				<br />
				<NumberInput width="39px" />
			</Viewport>
		</>
	);
};
export default Home;
