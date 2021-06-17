import { Checkbox, CheckboxProps } from "@dekk-ui/checkbox";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<CheckboxProps> = args => {
	return (
		<>
			<div>
				<label>
					<Checkbox {...args} />
				</label>
			</div>
			<div>
				<label>
					<Checkbox {...args} style={{ width: "64px", height: "64px" }} />
				</label>
			</div>
			<div>
				<label>
					<Checkbox {...args} style={{ width: "64px", height: "32px" }} />
				</label>
			</div>
			<div>
				<label>
					<Checkbox {...args} style={{ width: "32px", height: "64px" }} />
				</label>
			</div>
		</>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const story = {
	component: Checkbox,
	title: "Design System/Atoms/Checkbox",
};

export default story;
