import { Select, SelectProps } from "@dekk-ui/select";
import { range } from "@dekk-ui/utils";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<SelectProps> = args => {
	return <Select {...args} />;
};

export const Simple = Template.bind({});
const options = range(12).map(x => ({ value: x, label: x }));
Simple.args = {
	placeholder: "0",
	id: "select-0",
	width: "132px",
	maxMenuHeight: 150,
	options,
};

const PseudoStatesTemplate: Story<SelectProps> = () => {
	return <Select options={options} placeholder="0" width="132px" maxMenuHeight={150} />;
};

export const PseudoStates = PseudoStatesTemplate.bind(null);

PseudoStates.argTypes = {
	placeholder: {
		table: {
			disable: true,
		},
	},
	width: {
		table: {
			disable: true,
		},
	},
	maxMenuHeight: {
		table: {
			disable: true,
		},
	},
	options: {
		table: {
			disable: true,
		},
	},
};

PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: ".pseudo-states-addon__story__container > div > div > div",
		pseudos: ["hover", "focus", "focus & hover"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: Select,
	title: "Design System/Molecules/Select",
};

export default story;
