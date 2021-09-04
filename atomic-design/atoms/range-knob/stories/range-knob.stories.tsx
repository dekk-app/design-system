import { RangeKnob, RangeKnobProps } from "@dekk-ui/range-knob";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<RangeKnobProps> = args => {
	return (
		<label>
			<RangeKnob {...args} />
		</label>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const PseudoStatesTemplate: Story<RangeKnobProps> = args => {
	return (
		<label>
			<RangeKnob {...args} />
		</label>
	);
};

export const PseudoStates = PseudoStatesTemplate.bind({});

PseudoStates.args = {};

PseudoStates.parameters = {
	withPseudo: {
		selector: "label > span",
		pseudos: ["focus-within"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: RangeKnob,
	title: "Design System/Atoms/RangeKnob",
};

export default story;
