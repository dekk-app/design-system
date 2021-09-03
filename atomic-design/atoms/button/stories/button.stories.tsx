import { Button, ButtonProps } from "@dekk-ui/button";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
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

const PseudoStatesTemplate: Story<ButtonProps> = ({ children, ...args }) => {
	return (
		<div style={{ width: "max-content" }}>
			<Button {...args} type="button">
				{children}
			</Button>
		</div>
	);
};
export const PseudoStates = PseudoStatesTemplate.bind({});

PseudoStates.args = {
	children: "Click Me",
};

PseudoStates.parameters = {
	withPseudo: {
		selector: "button",
		pseudos: ["hover", "active", "focus-visible"],
		attributes: ["disabled"],
		styles: {
			orientation: "COLUMN",
		},
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: Button,
	title: "Design System/Atoms/Button",
};

export default story;
