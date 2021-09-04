import { Range, RangeProps } from "@dekk-ui/range";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<RangeProps> = args => {
	return (
		<label>
			<Range {...args} />
		</label>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const PseudoStatesTemplate: Story<RangeProps> = args => {
	return (
		<label>
			<Range {...args} />
		</label>
	);
};

export const PseudoStates = PseudoStatesTemplate.bind({});

PseudoStates.args = {};

PseudoStates.parameters = {
	withPseudo: {
		selector: "input",
		pseudos: ["focus-visible"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: Range,
	title: "Design System/Atoms/Range",
};

export default story;
