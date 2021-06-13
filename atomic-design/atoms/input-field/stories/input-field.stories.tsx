import {
	InputProps,
	NumberInput,
	NumberInputProps,
	StyledCombinedInput,
	StyledPrefix,
	StyledSuffix,
	TextInput,
} from "@dekk-ui/input-field";
import { Story } from "@storybook/react";
import React from "react";

const TextTemplate: Story<InputProps> = args => {
	return (
		<label>
			<TextInput {...args} />
		</label>
	);
};

export const Text = TextTemplate.bind({});

Text.args = {
	placeholder: "Text",
};

const NumberTemplate: Story<NumberInputProps> = args => {
	return (
		<label>
			<NumberInput {...args} />
		</label>
	);
};

export const Number = NumberTemplate.bind({});

Number.args = {
	placeholder: "Number",
};

const CombinedTemplate: Story<NumberInputProps & { suffix?: string }> = ({
	fullWidth,
	width,
	prefix,
	suffix,
	...args
}) => {
	return (
		<StyledCombinedInput fullWidth={fullWidth} width={width}>
			{prefix && <StyledPrefix>{prefix}</StyledPrefix>}
			<NumberInput {...args} />
			{suffix && <StyledSuffix>{suffix}</StyledSuffix>}
		</StyledCombinedInput>
	);
};

export const Combined = CombinedTemplate.bind({});

Combined.args = {
	prefix: "Width:",
	suffix: "px",
	textAlign: "right",
	width: "120px",
};

const story = {
	component: TextInput,
	title: "Design System/Atoms/InputField",
};

export default story;
