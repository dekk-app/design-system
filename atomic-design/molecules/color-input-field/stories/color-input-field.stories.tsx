import { ColorInput, ColorInputProps } from "@dekk-ui/color-input-field";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

export const Simple: Story<ColorInputProps> = args => {
	return <ColorInput {...args} />;
};

Simple.args = {
	defaultValue: "#000000",
};

export const PseudoStates: Story<ColorInputProps> = args => {
	return <ColorInput {...args} />;
};

PseudoStates.args = {
	width: "120px",
};

PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: "label",
		pseudos: ["hover", "focus-within", "focus-within & hover"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: ColorInput,
	title: "Design System/Molecules/ColorInput",
};

export default story;
