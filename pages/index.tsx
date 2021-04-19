import { ColorInput } from "@dekk-ui/color-input-field";
import { NumberInput, TextInput } from "@dekk-ui/input-field";
import { InputLabel } from "@dekk-ui/input-label";
import { RangeKnob } from "@dekk-ui/range-knob";
import styled from "@emotion/styled";
import React, { forwardRef, useCallback, useState } from "react";
import { Viewport } from "../doktor";

const InputWrapper = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	width: 300px;
	padding: 0 32px;
`;
interface RangeKnobFieldProps {
	id: string;
	label: string;
	name?: string;
	max: number;
	min: number;
}

const RangeKnobField = forwardRef<HTMLInputElement, RangeKnobFieldProps>(
	({ id, label, name, max, min }, ref) => {
		const [value, setValue] = useState(0);
		const handleChange = useCallback(deg => {
			setValue(deg);
		}, []);
		return (
			<InputWrapper>
				<InputLabel htmlFor={id}>{label}</InputLabel>
				<RangeKnob
					id="example-001"
					value={value}
					min={min}
					max={max}
					tabIndex={-1}
					onChange={handleChange}
				/>
				<NumberInput
					ref={ref}
					width="39px"
					id={id}
					name={name}
					value={`${value}`}
					min={min}
					max={max}
					onChange={handleChange}
				/>
			</InputWrapper>
		);
	}
);

const Home = () => {
	return (
		<Viewport>
			<TextInput fullWidth />
			<br />
			<br />
			<ColorInput fullWidth />
			<br />
			<br />
			<TextInput />
			<br />
			<br />
			<ColorInput />
			<br />
			<br />
			<TextInput width="132px" />
			<br />
			<br />
			<ColorInput width="132px" />
			<br />
			<br />
			<NumberInput width="132px" />
			<br />
			<br />
			<NumberInput width="39px" />
			<br />
			<br />
			<RangeKnobField label="Rotation" min={0} max={360} id="rotation" />
			<br />
			<br />
		</Viewport>
	);
};

export default Home;
