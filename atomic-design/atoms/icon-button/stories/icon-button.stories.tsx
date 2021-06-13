import { IconButton, IconButtonProps } from "@dekk-ui/icon-button";
import { IconSize } from "@dekk-ui/icons";
import { light } from "@dekk-ui/theme";
import { Story } from "@storybook/react";
import { ThemeProvider } from "@storybook/theming";
import React from "react";

const Template: Story<IconButtonProps> = args => {
	return (
		<ThemeProvider theme={light}>
			<IconButton {...args} />
		</ThemeProvider>
	);
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
