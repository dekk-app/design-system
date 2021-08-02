import { Icon } from "@dekk-ui/icon";
import { ToggleButton, ToggleButtonProps } from "@dekk-ui/toggle-button";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<ToggleButtonProps> = args => {
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
