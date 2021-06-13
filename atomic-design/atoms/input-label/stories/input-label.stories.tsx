import { InputLabel, InputLabelProps } from "@dekk-ui/input-label";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<InputLabelProps> = args => {
	return <InputLabel {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "Label",
};

const story = {
	component: InputLabel,
	title: "Design System/Atoms/InputLabel",
};

export default story;
