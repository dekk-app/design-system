import { IconButton, IconButtonProps } from "@dekk-ui/icon-button";
import { IconSize } from "@dekk-ui/icons";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<IconButtonProps> = args => {
	return <IconButton {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	icon: "plus",
	size: IconSize.m,
};

const story = {
	component: IconButton,
	title: "Design System/Atoms/IconButton",
};

export default story;
