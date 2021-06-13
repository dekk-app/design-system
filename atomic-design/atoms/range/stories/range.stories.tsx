import { Range, RangeProps } from "@dekk-ui/range";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<RangeProps> = args => {
	return (
		<label>
			<Range {...args} />
		</label>
	);
};

export const Simple = Template.bind({});

Simple.args = {};

const story = {
	component: Range,
	title: "Design System/Atoms/Range",
};

export default story;
