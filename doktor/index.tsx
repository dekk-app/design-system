import { dark, light } from "@dekk-ui/theme";
import { css, Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { fontFaces, globalStyles, poppins } from "./styles";

export const StyledMacOSScreen = styled.div`
	position: relative;
	margin: auto;
	border-width: 24px 40px;
	border-style: solid;
	border-color: transparent;
	border-image: url("/assets/macOS/toolbar.png") 24 40 repeat;
`;

export const StyledMacOSViewport = styled.div`
	position: absolute;
	top: 0;
	left: -40px;
	width: calc(100% + 80px);
	height: calc(100% + 24px);
	border: 0;
	border-radius: 0 0 10px 10px;
	background: #666;
`;

export const MacOS: React.FC<{ height: number; width: number }> = ({ children, height, width }) => {
	return (
		<StyledMacOSScreen style={{ height, width }}>
			<StyledMacOSViewport>{children}</StyledMacOSViewport>
		</StyledMacOSScreen>
	);
};

export const StyledChromeWindow = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
	border-width: 80px 365px;
	border-style: solid;
	border-color: transparent;
	border-image: url("/assets/chrome/frame.png") 80 365 repeat;
`;

export const StyledChromeViewport = styled.div`
	position: absolute;
	top: 0;
	left: -363px;
	width: calc(100% + 726px);
	height: calc(100% + 79px);
	overflow: hidden;
	border: 0;
	border-radius: 0 0 10px 10px;
`;

export const Chrome: React.FC = ({ children }) => {
	return (
		<StyledChromeWindow>
			<StyledChromeViewport>{children}</StyledChromeViewport>
		</StyledChromeWindow>
	);
};

export const StyledPWAWindow = styled("div", {
	shouldForwardProp: (propName): propName is "className" | "children" =>
		propName === "className" || propName === "children",
})<{ dark?: boolean }>`
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
	border-width: 39px 74px;
	border-style: solid;
	border-color: transparent;
	${({ dark }) => css`
		border-image: url("/assets/pwa/frame-${dark ? "dark" : "light"}.png") 39 74 repeat;
	`};
`;

export const StyledPWAViewport = styled.div`
	position: absolute;
	top: 0;
	left: -72px;
	width: calc(100% + 143px);
	height: calc(100% + 36px);
	overflow: hidden;
	border: 0;
	border-radius: 0 0 10px 10px;
`;

export const PWA: React.FC<{ dark?: boolean }> = ({ children, dark }) => {
	return (
		<StyledPWAWindow dark={dark}>
			<StyledPWAViewport>{children}</StyledPWAViewport>
		</StyledPWAWindow>
	);
};

export const StyledSafariWindow = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
	border-width: 82px 260px;
	border-style: solid;
	border-color: transparent;
	border-image: url("/assets/safari/frame.png") 82 260 repeat;
`;

export const StyledSafariViewport = styled.div`
	position: absolute;
	top: 0;
	left: -259px;
	width: calc(100% + 518px);
	height: calc(100% + 81px);
	overflow: hidden;
	border: 0;
	border-radius: 0 0 10px 10px;
`;

export const Safari: React.FC = ({ children }) => {
	return (
		<StyledSafariWindow>
			<StyledSafariViewport>{children}</StyledSafariViewport>
		</StyledSafariWindow>
	);
};

export const StyledFirefoxWindow = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
	border-width: 74px 365px;
	border-style: solid;
	border-color: transparent;
	border-image: url("/assets/firefox/frame.png") 74 365 round;
`;

export const StyledFirefoxViewport = styled.div`
	position: absolute;
	top: 0;
	left: -365px;
	width: calc(100% + 730px);
	height: calc(100% + 74px);
	overflow: hidden;
	border: 0;
	border-radius: 0 0 10px 10px;
`;

export const Firefox: React.FC = ({ children }) => {
	return (
		<StyledFirefoxWindow>
			<StyledFirefoxViewport>{children}</StyledFirefoxViewport>
		</StyledFirefoxWindow>
	);
};

const StyledFrame = styled("div", {
	shouldForwardProp: (propName): propName is "children" => propName === "children",
})<{ dark?: boolean }>`
	width: 100%;
	height: 100%;
	border: 0;
	${({ dark, theme }) => css`
		background: ${theme.ui.colors[dark ? "darkest" : "lightest"].value};
	`};
`;

const screenSizes = {
	appleWatch: { width: 224, height: 184 },
	iPhone8: { width: 375, height: 667 },
	iPhone11: { width: 414, height: 896 },
	iPad: { width: 768, height: 1042 },
	iPadPro: { width: 1024, height: 1366 },
	macbookPro13: { width: 1280, height: 800 },
	macbookPro16: { width: 1536, height: 960 },
	iMac: { width: 1920, height: 1080 },
};

const browsers = {
	chrome: Chrome,
	firefox: Firefox,
	pwa: PWA,
	safari: Safari,
};

const icons = {
	pwa:
		"M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18A2,2 0 0,0 5,20H9V18H5V8H19V18H15V20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4Z",
	safari:
		"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.95L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.05L8.12,8.11M6.5,12V13H5V12H6.5Z",
	firefox:
		"M9.27 7.94C9.27 7.94 9.27 7.94 9.27 7.94M6.85 6.74C6.86 6.74 6.86 6.74 6.85 6.74M21.28 8.6C20.85 7.55 19.96 6.42 19.27 6.06C19.83 7.17 20.16 8.28 20.29 9.1L20.29 9.12C19.16 6.3 17.24 5.16 15.67 2.68C15.59 2.56 15.5 2.43 15.43 2.3C15.39 2.23 15.36 2.16 15.32 2.09C15.26 1.96 15.2 1.83 15.17 1.69C15.17 1.68 15.16 1.67 15.15 1.67H15.13L15.12 1.67L15.12 1.67L15.12 1.67C12.9 2.97 11.97 5.26 11.74 6.71C11.05 6.75 10.37 6.92 9.75 7.22C9.63 7.27 9.58 7.41 9.62 7.53C9.67 7.67 9.83 7.74 9.96 7.68C10.5 7.42 11.1 7.27 11.7 7.23L11.75 7.23C11.83 7.22 11.92 7.22 12 7.22C12.5 7.21 12.97 7.28 13.44 7.42L13.5 7.44C13.6 7.46 13.67 7.5 13.75 7.5C13.8 7.54 13.86 7.56 13.91 7.58L14.05 7.64C14.12 7.67 14.19 7.7 14.25 7.73C14.28 7.75 14.31 7.76 14.34 7.78C14.41 7.82 14.5 7.85 14.54 7.89C14.58 7.91 14.62 7.94 14.66 7.96C15.39 8.41 16 9.03 16.41 9.77C15.88 9.4 14.92 9.03 14 9.19C17.6 11 16.63 17.19 11.64 16.95C11.2 16.94 10.76 16.85 10.34 16.7C10.24 16.67 10.14 16.63 10.05 16.58C10 16.56 9.93 16.53 9.88 16.5C8.65 15.87 7.64 14.68 7.5 13.23C7.5 13.23 8 11.5 10.83 11.5C11.14 11.5 12 10.64 12.03 10.4C12.03 10.31 10.29 9.62 9.61 8.95C9.24 8.59 9.07 8.42 8.92 8.29C8.84 8.22 8.75 8.16 8.66 8.1C8.43 7.3 8.42 6.45 8.63 5.65C7.6 6.12 6.8 6.86 6.22 7.5H6.22C5.82 7 5.85 5.35 5.87 5C5.86 5 5.57 5.16 5.54 5.18C5.19 5.43 4.86 5.71 4.56 6C4.21 6.37 3.9 6.74 3.62 7.14C3 8.05 2.5 9.09 2.28 10.18C2.28 10.19 2.18 10.59 2.11 11.1L2.08 11.33C2.06 11.5 2.04 11.65 2 11.91L2 11.94L2 12.27L2 12.32C2 17.85 6.5 22.33 12 22.33C16.97 22.33 21.08 18.74 21.88 14C21.9 13.89 21.91 13.76 21.93 13.63C22.13 11.91 21.91 10.11 21.28 8.6Z",
	chrome:
		"M12,20L15.46,14H15.45C15.79,13.4 16,12.73 16,12C16,10.8 15.46,9.73 14.62,9H19.41C19.79,9.93 20,10.94 20,12A8,8 0 0,1 12,20M4,12C4,10.54 4.39,9.18 5.07,8L8.54,14H8.55C9.24,15.19 10.5,16 12,16C12.45,16 12.88,15.91 13.29,15.77L10.89,19.91C7,19.37 4,16.04 4,12M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M12,4C14.96,4 17.54,5.61 18.92,8H12C10.06,8 8.45,9.38 8.08,11.21L5.7,7.08C7.16,5.21 9.44,4 12,4M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
	iMac:
		"M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10L8,21V22H16V21L14,18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z",
	macbookPro16:
		"M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z",
	macbookPro13:
		"M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z",
	lightDark:
		"M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z",
};

const Svg = styled.svg`
	width: 1em;
	height: 1em;
	fill: currentColor;
	font-size: 24px;
`;

const Path = styled.path`
	fill: currentColor;
`;

const Button = styled.button<{ active?: boolean }>`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0.5rem 1rem;
	border: 0;
	border-radius: 3px;

	&:focus {
		outline: 0;
	}

	&:focus-visible {
		z-index: 1;
		box-shadow: 0 0 0 2px highlight;
	}

	${Svg} {
		margin-right: 0.5rem;
	}

	${({ active }) => css`
		background: ${active ? "white" : "black"};
		color: ${active ? "black" : "white"};
	`};
`;

const ButtonGroup = styled.div`
	display: flex;
	margin: 2px;

	${Button} {
		border-radius: 0;
		&:first-of-type {
			border-radius: 3px 0 0 3px;
		}
		&:last-of-type {
			border-radius: 0 3px 3px 0;
		}
	}
`;

const ButtonLabel = styled.span``;

export type IconName = keyof typeof icons;

const Icon: React.FC<{ icon: IconName }> = ({ icon }) => (
	<Svg viewBox="0 0 24 24">
		<Path d={icons[icon]} />
	</Svg>
);

export const Viewport: React.FC = ({ children }) => {
	const [isDark, setIsDark] = useState(true);
	const [device, setDevice] = useState("macbookPro13");
	const [browser, setBrowser] = useState("safari");
	const Browser = useMemo(() => browsers[browser], [browser]);
	return (
		<>
			<ButtonGroup>
				<Button
					active={device === "macbookPro13"}
					onClick={() => {
						setDevice("macbookPro13");
					}}
				>
					<Icon icon="macbookPro13" />
					<ButtonLabel>Macbook Pro 13</ButtonLabel>
				</Button>
				<Button
					active={device === "macbookPro16"}
					onClick={() => {
						setDevice("macbookPro16");
					}}
				>
					<Icon icon="macbookPro16" />
					<ButtonLabel>Macbook Pro 16</ButtonLabel>
				</Button>
				<Button
					active={device === "iMac"}
					onClick={() => {
						setDevice("iMac");
					}}
				>
					<Icon icon="iMac" />
					<ButtonLabel>iMac</ButtonLabel>
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button
					active={browser === "safari"}
					onClick={() => {
						setBrowser("safari");
					}}
				>
					<Icon icon="safari" />
					<ButtonLabel>Safari</ButtonLabel>
				</Button>
				<Button
					active={browser === "chrome"}
					onClick={() => {
						setBrowser("chrome");
					}}
				>
					<Icon icon="chrome" />
					<ButtonLabel>Chrome</ButtonLabel>
				</Button>
				<Button
					active={browser === "firefox"}
					onClick={() => {
						setBrowser("firefox");
					}}
				>
					<Icon icon="firefox" />
					<ButtonLabel>Firefox</ButtonLabel>
				</Button>
				<Button
					active={browser === "pwa"}
					onClick={() => {
						setBrowser("pwa");
					}}
				>
					<Icon icon="pwa" />
					<ButtonLabel>PWA</ButtonLabel>
				</Button>
			</ButtonGroup>

			<Button
				active={!isDark}
				onClick={() => {
					setIsDark(previousState => !previousState);
				}}
			>
				<Icon icon="lightDark" />
				<ButtonLabel>{isDark ? "Light" : "Dark"} Mode</ButtonLabel>
			</Button>
			<MacOS height={screenSizes[device].height} width={screenSizes[device].width}>
				<Browser dark={isDark}>
					<StyledFrame dark={isDark}>
						<ThemeProvider theme={isDark ? dark : light}>
							<Global styles={globalStyles} />
							<Global styles={poppins} />
							<Global styles={fontFaces} />
							{children}
						</ThemeProvider>
					</StyledFrame>
				</Browser>
			</MacOS>
		</>
	);
};
