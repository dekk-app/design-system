import { Checkbox, CheckboxProps } from "@dekk-ui/checkbox";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<CheckboxProps> = args => {
	return (
		<label>
			<Checkbox {...args} />
		</label>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const story = {
	component: Checkbox,
	title: "Design System/Atoms/Checkbox",
};

export default story;
