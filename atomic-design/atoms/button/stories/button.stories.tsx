import { Button, ButtonProps } from "@dekk-ui/button";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<ButtonProps> = args => {
	return <Button {...args}>Label</Button>;
};

export const Simple = Template.bind({});

Simple.args = {};

const story = {
	component: Button,
	title: "Design System/Atoms/Button",
};

export default story;
