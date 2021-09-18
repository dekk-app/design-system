import { RangeKnob, RangeKnobProps } from "@dekk-ui/range-knob";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

export const Simple = args => {
	return (
		<label>
			<RangeKnob {...args} />
		</label>
	);
};

export const PseudoStates: Story<RangeKnobProps> = () => {
	return <RangeKnob />;
};

PseudoStates.argTypes = {
	min: {
		table: {
			disable: true,
		},
	},
	max: {
		table: {
			disable: true,
		},
	},
	step: {
		table: {
			disable: true,
		},
	},
	value: {
		table: {
			disable: true,
		},
	},
	defaultValue: {
		table: {
			disable: true,
		},
	},
	onChange: {
		table: {
			disable: true,
		},
	},
};

PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: ".pseudo-states-addon__story__container > span",
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
