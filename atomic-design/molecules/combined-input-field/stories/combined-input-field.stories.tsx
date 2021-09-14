import { CombinedInput, CombinedInputProps } from "@dekk-ui/combined-input-field";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

export const Combined: Story<CombinedInputProps> = args => {
	return <CombinedInput {...args} />;
};

Combined.args = {
	startAdornment: "Width:",
	endAdornment: "px",
	textAlign: "right",
	width: "150px",
	type: "number",
};

export const PseudoStates: Story<CombinedInputProps> = args => {
	return <CombinedInput {...args} />;
};

PseudoStates.args = {
	startAdornment: "Width:",
	endAdornment: "px",
	textAlign: "right",
	width: "120px",
	type: "number",
};

PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: "label",
		pseudos: ["hover", "focus-within", "focus-within & hover"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
		permutations: [{ attr: "invalid", value: true }],
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
	component: CombinedInput,
	title: "Design System/Molecules/CombinedInput",
};

export default story;
