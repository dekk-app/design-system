import { IconButton, IconButtonProps } from "@dekk-ui/icon-button";
import { IconSize } from "@dekk-ui/icons";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<IconButtonProps> = args => {
	return <IconButton {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	icon: "plus",
	size: IconSize.m,
};

const PseudoStatesTemplate: Story<IconButtonProps> = args => {
	return <IconButton {...args} />;
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
	component: IconButton,
	title: "Design System/Atoms/IconButton",
};

export default story;
