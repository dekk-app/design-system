import { ColorInput, ColorInputProps } from "@dekk-ui/color-input-field";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<ColorInputProps> = args => {
	return <ColorInput {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	default: "#000000",
	id: "opacity-0",
	min: 0,
	max: 100,
	suffix: "%",
};

const story = {
	component: ColorInput,
	title: "Design System/Molecules/ColorInput",
};

export default story;
