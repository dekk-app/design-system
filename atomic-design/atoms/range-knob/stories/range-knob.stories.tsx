import { RangeKnob, RangeKnobProps } from "@dekk-ui/range-knob";
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

const story = {
	component: RangeKnob,
	title: "Design System/Atoms/RangeKnob",
};

export default story;
