import { Select, SelectProps } from "@dekk-ui/select";
import { range } from "@dekk-ui/utils/range";
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

const story = {
	component: Select,
	title: "Design System/Molecules/Select",
};

export default story;
