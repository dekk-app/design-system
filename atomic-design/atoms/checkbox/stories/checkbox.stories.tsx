import { Checkbox, CheckboxProps } from "@dekk-ui/checkbox";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-react";
import { Story } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";

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

const PseudoStatesTemplate: Story<CheckboxProps> = () => {
	return <Checkbox />;
};

export const PseudoStates = PseudoStatesTemplate.bind(null);

PseudoStates.args = {};

PseudoStates.argTypes = {
	indeterminate: {
		table: {
			disable: true,
		},
	},
	onChange: {
		table: {
			disable: true,
		},
	},
};
PseudoStates.parameters = {
	controls: { hideNoControlsWarning: true },
	withPseudo: {
		selector: `input[type="checkbox"]`,
		pseudos: ["focus-visible"],
		prefix: "pseudoclass--",
		attributes: ["disabled", "checked", "indeterminate"],
	},
};

PseudoStates.decorators = [withPseudo];

export const Indeterminate: Story<CheckboxProps> = args => {
	const checkboxRef = useRef(null);
	const [indeterminate, setIndeterminate] = useState(false);

	useEffect(() => {
		setIndeterminate(checkboxRef.current.indeterminate);
	});

	return (
		<div>
			<p>
				<Checkbox {...args} ref={checkboxRef} /> Value of{" "}
				<code>checkbox.indeterminate: {indeterminate.toString()}</code>
			</p>
			<p>
				<Checkbox disabled={true} indeterminate={true} /> Set via indeterminate property
			</p>
		</div>
	);
};

Indeterminate.args = {};

const story = {
	component: Checkbox,
	title: "Design System/Atoms/Checkbox",
};

export default story;
