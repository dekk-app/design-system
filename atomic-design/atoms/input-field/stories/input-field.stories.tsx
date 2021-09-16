import { NumberInput, NumberInputProps, TextInput, TextInputProps } from "@dekk-ui/input-field";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

export const Text: Story<TextInputProps> = args => {
	return (
		<label>
			<TextInput {...args} />
		</label>
	);
};

export const Number: Story<NumberInputProps> = args => {
	return (
		<label>
			<NumberInput {...args} />
		</label>
	);
};

export const PseudoStates: Story<TextInputProps> = () => {
	return <TextInput />;
};

PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: "input",
		pseudos: ["hover", "focus", "focus & hover"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.argTypes = {
	prefix: {
		table: {
			disable: true,
		},
	},
	suffix: {
		table: {
			disable: true,
		},
	},
	textAlign: {
		table: {
			disable: true,
		},
	},
	width: {
		table: {
			disable: true,
		},
	},
	fullWidth: {
		table: {
			disable: true,
		},
	},
	placeholder: {
		table: {
			disable: true,
		},
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: TextInput,
	title: "Design System/Atoms/InputField",
};

export default story;
