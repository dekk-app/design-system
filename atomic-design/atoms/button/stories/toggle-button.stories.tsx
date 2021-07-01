import { Story } from "@storybook/react";
import { ButtonProps, ToggleButton } from "@dekk-ui/button";
import { Icon } from "@dekk-ui/icon";
import React from "react";

const Template: Story<ButtonProps> = args => {
	return (
		<ToggleButton {...args}>
			<Icon icon="editorImage" />
		</ToggleButton>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const story = {
	component: ToggleButton,
	title: "Design System/Atoms/ToggleButton",
};

export default story;
