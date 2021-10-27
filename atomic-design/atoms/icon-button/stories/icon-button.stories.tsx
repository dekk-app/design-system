import { IconButton, IconButtonProps } from "@dekk-ui/icon-button";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<IconButtonProps> = args => {
	return <IconButton {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	icon: "plus",
};

const PseudoStatesTemplate: Story<IconButtonProps> = () => {
	return <IconButton icon="plus" />;
};

export const PseudoStates = PseudoStatesTemplate.bind(null);

PseudoStates.argTypes = {
	icon: {
		table: {
			disable: true,
		},
	},
	size: {
		table: {
			disable: true,
		},
	},
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
		permutations: [{ attr: "isSelected", value: true, label: "Selected" }],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: IconButton,
	title: "Design System/Atoms/IconButton",
};

export default story;
