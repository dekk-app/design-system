import { Button, ButtonProps } from "@dekk-ui/button";
import { Story } from "@storybook/react";
import React from "react";

const Template: Story<ButtonProps> = ({ children, ...args }) => {
	return (
		<div>
			<h2>Available Variants</h2>
			<div
				style={{
					display: "inline-grid",
					gridGap: 16,
					gridTemplateColumns: "auto auto auto",
				}}
			>
				<Button {...args} type="button" variant="default">
					DefaultButton
				</Button>
				<Button {...args} type="button" variant="primary">
					Primary Button
				</Button>
				<Button {...args} type="button" variant="text">
					Text Button
				</Button>
			</div>
			<div>
				<h2>Adjustable</h2>
				<Button {...args} type="button">
					{children}
				</Button>
			</div>
		</div>
	);
};

export const Simple = Template.bind({});

Simple.args = {
	children: "Click Me",
};

const story = {
	component: Button,
	title: "Design System/Atoms/Button",
};

export default story;
