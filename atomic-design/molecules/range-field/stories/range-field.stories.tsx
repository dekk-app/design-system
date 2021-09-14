import { RangeField, RangeFieldProps } from "@dekk-ui/range-field";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<RangeFieldProps> = args => {
	return <RangeField {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	label: "Opacity",
	id: "opacity-0",
	min: 0,
	max: 100,
	endAdornment: "%",
};

const story = {
	component: RangeField,
	title: "Design System/Molecules/RangeField",
};

export default story;
