import { Icon } from "@dekk-ui/icon";
import { IconSize } from "@dekk-ui/icons";
import { ToggleButton, ToggleButtonProps } from "@dekk-ui/toggle-button";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<ToggleButtonProps> = args => {
	return (
		<ToggleButton {...args}>
			<Icon icon="editorImage" />
		</ToggleButton>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const PseudoStatesTemplate: Story<ToggleButtonProps> = args => {
	return (
		<ToggleButton {...args}>
			<Icon icon="editorImage" />
		</ToggleButton>
	);
};

export const PseudoStates = PseudoStatesTemplate.bind({});

PseudoStates.args = {
	icon: "plus",
	size: IconSize.m,
};

PseudoStates.parameters = {
	withPseudo: {
		selector: "button",
		pseudos: ["hover", "active", "focus-visible"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: ToggleButton,
	title: "Design System/Atoms/ToggleButton",
};

export default story;
