import { Icon, IconProps } from "@dekk-ui/icon";
import { IconName } from "@dekk-ui/icons";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<IconProps> = args => {
	return <Icon {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	icon: "chevronDown",
};

export const ARIAHidden = Template.bind({});

ARIAHidden.args = {
	icon: "chevronDown",
	"aria-hidden": true,
};

const iconNames: IconName[] = [
	"chartLine",
	"chevronDown",
	"chevronRight",
	"chevronLeft",
	"chevronUp",
	"cubeOutline",
	"deleteOutline",
	"dotsHorizontal",
	"dotsVertical",
	"dragHorizontal",
	"dragVertical",
	"formatAlignCenter",
	"formatAlignJustify",
	"formatAlignLeft",
	"formatAlignRight",
	"formatHorizontalAlignCenter",
	"formatHorizontalAlignLeft",
	"formatHorizontalAlignRight",
	"formatVerticalAlignBottom",
	"formatVerticalAlignMiddle",
	"formatVerticalAlignTop",
	"formatSize",
	"formatText",
	"formatTextBox",
	"formatTitle",
	"imageOutline",
	"menu",
	"play",
	"plus",
	"toyBrickOutline",
];

export const AllIcons: Story<IconProps> = (() => {
	return (
		<div
			style={{
				display: "grid",
				gridGap: "1rem",
				gridTemplateColumns: `repeat( auto-fit, minmax(24px, 1fr) )`,
			}}
		>
			{iconNames.map(iconName => (
				<Icon icon={iconName} />
			))}
		</div>
	);
}).bind({});

AllIcons.args = {};

const story = {
	component: Icon,
	title: "Design System/Atoms/Icon",
};

export default story;
