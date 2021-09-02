import { RGBColor } from "@dekk-ui/design-tokens";
import { pxToRem } from "@dekk-ui/utils";
import React, { FC } from "react";
import { dark, light, Theme } from "../src";
import { base } from "../src/base";

export interface SwatchProps {
	colorName: string;
	colorValue: RGBColor;
	theme: Theme;
}

const Swatches: FC = ({ children }) => (
	<div style={{ display: "flex", flexWrap: "wrap", margin: -base.space.s }}>{children}</div>
);
const Swatch = ({ colorName, colorValue, theme }: SwatchProps) => {
	return (
		<div
			style={{
				margin: base.space.s,
				textAlign: "center",
				width: "max-content",
				borderRadius: base.radius.s,
				background: theme.ui.fill["1"],
				color: theme.ui.text["1"],
			}}
		>
			<div
				style={{
					width: 144,
					height: 144,
					borderRadius: [pxToRem(base.radius.s), pxToRem(base.radius.s), 0, 0].join(" "),
					background: colorValue,
					boxShadow: `inset 0 0 0 1px ${theme.ui.outline["1"]}`,
				}}
			/>
			<p style={{ fontSize: 12 }}>
				{colorName.replace(/(^\w)(.*)/, (_, $1, $2) => `${$1.toUpperCase()}${$2}`)}
			</p>
			<p style={{ fontSize: 12 }}>{colorValue}</p>
		</div>
	);
};

export const Light = () => {
	return (
		<div>
			<h1>Light</h1>
			<h2>Colors</h2>
			<Swatches>
				{Object.entries(light.ui.colors).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={light} />
				))}
			</Swatches>
			<h2>Text</h2>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{Object.entries(light.ui.text).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={light} />
				))}
			</div>
			<h2>Background</h2>
			<Swatches>
				{Object.entries(light.ui.background).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={light} />
				))}
			</Swatches>
			<h2>Fill</h2>
			<Swatches>
				{Object.entries(light.ui.fill).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={light} />
				))}
			</Swatches>
			<h2>Highlight</h2>
			<Swatches>
				<Swatch colorName="highlight" colorValue={light.ui.highlight} theme={light} />
			</Swatches>
			<h2>Outline</h2>
			<Swatches>
				{Object.entries(light.ui.outline).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={light} />
				))}
			</Swatches>
		</div>
	);
};

export const Dark = () => {
	return (
		<div>
			<h1>Dark</h1>
			<h2>Colors</h2>
			<Swatches>
				{Object.entries(dark.ui.colors).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={dark} />
				))}
			</Swatches>
			<h2>Text</h2>
			<Swatches>
				{Object.entries(dark.ui.text).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={dark} />
				))}
			</Swatches>
			<h2>Background</h2>
			<Swatches>
				{Object.entries(dark.ui.background).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={dark} />
				))}
			</Swatches>
			<h2>Fill</h2>
			<Swatches>
				{Object.entries(dark.ui.fill).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={dark} />
				))}
			</Swatches>
			<h2>Highlight</h2>
			<Swatches>
				<Swatch colorName="highlight" colorValue={dark.ui.highlight} theme={dark} />
			</Swatches>
			<h2>Outline</h2>
			<Swatches>
				{Object.entries(dark.ui.outline).map(([key, value]) => (
					<Swatch key={key} colorName={key} colorValue={value} theme={dark} />
				))}
			</Swatches>
		</div>
	);
};

const story = {
	component: Light,
	title: "Design System/Ions/Theme",
};

export default story;
