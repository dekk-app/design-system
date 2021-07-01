import { Icon } from "@dekk-ui/icon";
import { IconSize } from "@dekk-ui/icons";
import { MultiButton, MultiButtonProps } from "@dekk-ui/multi-button";
import { ToggleButton } from "@dekk-ui/button";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<MultiButtonProps> = args => {
	return (
		<MultiButton {...args}>
			<ToggleButton isSelected>
				<Icon icon="editorText" size={IconSize.s} />
			</ToggleButton>
			<ToggleButton>
				<Icon icon="editorImage" size={IconSize.s} />
			</ToggleButton>
			<ToggleButton>
				<Icon icon="menu" size={IconSize.s} />
			</ToggleButton>
			<ToggleButton>
				<Icon icon="plus" size={IconSize.s} />
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
