import { Checkbox, CheckboxProps } from "@dekk-ui/checkbox";
import { Story } from "@storybook/react";
import React from "react";

export const Simple: Story<CheckboxProps> = args => {
	return (
		<label>
			<Checkbox {...args} />
		</label>
	);
};

Simple.args = {};

export const Scaling: Story<CheckboxProps> = args => {
	return (
		<div
			style={{
				display: "grid",
				gridGap: "1rem",
			}}
		>
			<label>
				<Checkbox {...args} style={{ width: "64px", height: "64px" }} />
			</label>

			<label>
				<Checkbox {...args} style={{ width: "64px", height: "32px" }} />
			</label>

			<label>
				<Checkbox {...args} style={{ width: "32px", height: "64px" }} />
			</label>
		</div>
	);
};

Scaling.args = {};

const story = {
	component: Checkbox,
	title: "Design System/Atoms/Checkbox",
};

export default story;
