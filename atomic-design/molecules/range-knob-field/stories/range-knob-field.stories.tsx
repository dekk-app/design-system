import { RangeKnobField, RangeKnobFieldProps } from "@dekk-ui/range-knob-field";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<RangeKnobFieldProps> = args => {
	return <RangeKnobField {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	label: "Rotation",
	max: 360,
	id: "rotation-0",
	suffix: "°",
};

const story = {
	component: RangeKnobField,
	title: "Design System/Molecules/RangeKnobField",
};

export default story;
