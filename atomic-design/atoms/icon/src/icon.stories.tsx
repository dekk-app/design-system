import { IconName } from "@dekk-ui/icons";
import React from "react";
import { Story } from "@storybook/react";
import { Icon, IconProps } from "./";

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
	"chevronDown",
	"chevronRight",
	"chevronLeft",
	"chevronUp",
	"editorImage",
	"editorText",
	"menu",
	"play",
	"plus",
];

export const AllIcons: Story<IconProps> = (({ size }) => {
	return (
		<div
			style={{
				display: "grid",
				gridGap: "1rem",
				gridTemplateColumns: `repeat( auto-fit, minmax(${size}px, 1fr) )`,
			}}
		>
			{iconNames.map(iconName => (
				<Icon icon={iconName} size={size} />
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
