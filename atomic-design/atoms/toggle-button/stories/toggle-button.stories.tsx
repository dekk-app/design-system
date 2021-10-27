import { Icon } from "@dekk-ui/icon";
import { ToggleButton, ToggleButtonProps } from "@dekk-ui/toggle-button";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<ToggleButtonProps> = args => {
	return (
		<ToggleButton {...args}>
			<Icon icon="imageOutline" />
		</ToggleButton>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const PseudoStatesTemplate: Story<ToggleButtonProps> = () => {
	return (
		<ToggleButton>
			<Icon icon="imageOutline" />
		</ToggleButton>
	);
};

export const PseudoStates = PseudoStatesTemplate.bind(null);
PseudoStates.argTypes = {
	isSelected: {
		table: {
			disable: true,
		},
	},
};
PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: "button",
		pseudos: [
			"hover",
			"active",
			"focus-visible",
			"focus-visible & hover",
			"focus-visible & active",
		],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
		permutations: ["isSelected"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: ToggleButton,
	title: "Design System/Atoms/ToggleButton",
};

export default story;
