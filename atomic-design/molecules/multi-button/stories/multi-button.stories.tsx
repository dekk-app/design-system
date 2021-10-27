import { Icon } from "@dekk-ui/icon";
import { MultiButton, MultiButtonProps } from "@dekk-ui/multi-button";
import { ToggleButton } from "@dekk-ui/toggle-button";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<MultiButtonProps> = args => {
	return (
		<MultiButton {...args}>
			<ToggleButton isSelected>
				<Icon icon="formatText" />
			</ToggleButton>
			<ToggleButton>
				<Icon icon="imageOutline" />
			</ToggleButton>
			<ToggleButton>
				<Icon icon="menu" />
			</ToggleButton>
			<ToggleButton>
				<Icon icon="plus" />
			</ToggleButton>
		</MultiButton>
	);
};

export const Simple = Template.bind({});

Simple.args = {
	width: "200px",
};

const story = {
	component: MultiButton,
	title: "Design System/Molecules/MultiButton",
};

export default story;
