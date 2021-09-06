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

const PseudoStatesTemplate: Story<RangeProps> = () => {
	return <Range />;
};

export const PseudoStates = PseudoStatesTemplate.bind(null);

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
