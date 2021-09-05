import { PopoutSelect, SelectProps } from "@dekk-ui/select";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React from "react";

const options = [
	{ value: "bold", label: <strong style={{ fontWeight: 700 }}>Bold</strong> },
	{ value: "semibold", label: <strong style={{ fontWeight: 600 }}>Semibold</strong> },
	{ value: "normal", label: <em style={{ fontWeight: 400, fontStyle: "normal" }}>Normal</em> },
	{ value: "light", label: <em style={{ fontWeight: 300, fontStyle: "normal" }}>Light</em> },
];

const Template: Story<SelectProps> = args => {
	return <PopoutSelect {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	placeholder: "Search…",
	id: "select-0",
	width: "132px",
	maxMenuHeight: 150,
	options,
};

const PseudoStatesTemplate: Story<SelectProps> = () => {
	return (
		<PopoutSelect options={options} placeholder="Search…" width="132px" maxMenuHeight={150} />
	);
};

export const PseudoStates = PseudoStatesTemplate.bind(null);

PseudoStates.argTypes = {
	placeholder: {
		table: {
			disable: true,
		},
	},
	width: {
		table: {
			disable: true,
		},
	},
	maxMenuHeight: {
		table: {
			disable: true,
		},
	},
	options: {
		table: {
			disable: true,
		},
	},
};

PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: ".pseudo-states-addon__story__container > div > div",
		pseudos: ["hover", "focus", "focus & hover"],
		prefix: "pseudoclass--",
		attributes: ["disabled"],
	},
};

PseudoStates.decorators = [withPseudo];

const story = {
	component: PopoutSelect,
	title: "Design System/Molecules/PopoutSelect",
};

export default story;
