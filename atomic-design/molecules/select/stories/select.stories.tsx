import { Select, SelectProps } from "@dekk-ui/select";
import { range } from "@dekk-ui/utils";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<SelectProps> = args => {
	return <Select {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	placeholder: "0",
	id: "select-0",
	width: "132px",
	maxMenuHeight: 150,
	options: range(12).map(x => ({ value: x, label: x })),
};

const PseudoStatesTemplate: Story<SelectProps> = args => {
	return <Select {...args} />;
};

export const PseudoStates = PseudoStatesTemplate.bind({});

PseudoStates.args = {
	placeholder: "0",
	width: "132px",
	maxMenuHeight: 150,
	options: range(12).map(x => ({ value: x, label: x })),
};

PseudoStates.parameters = {
	withPseudo: {
		selector: ".pseudo-states-addon__story__container > div > div > div",
		pseudos: ["hover", "focus"],
		prefix: "pseudoclass--",
		attributes: [],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: Select,
	title: "Design System/Molecules/Select",
};

export default story;
