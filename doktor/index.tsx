import { dark, light } from "@dekk-ui/theme";
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider, Global, ThemeProvider } from "@emotion/react";
import React from "react";
import weakMemoize from "@emotion/weak-memoize";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { fontFaces, globalStyles, poppins } from "./styles";

const memoizedCreateCacheWithContainer = weakMemoize<HTMLElement, EmotionCache>(container =>
	createCache({ container, key: "doktor" })
);

export const FrameProvider: React.FC = ({ children }) => (
	<FrameContextConsumer>
		{({ document }) => {
			return (
				<CacheProvider value={memoizedCreateCacheWithContainer(document.head)}>
					{children}
				</CacheProvider>
			);
		}}
	</FrameContextConsumer>
);

export const Viewport: React.FC = ({ children }) => {
	const [size, setSize] = React.useState({ width: 375, height: 667 });
	const [isDark, setIsDark] = React.useState(true);
	return (
		<>
			<button
				onClick={() => {
					setSize({ width: 224, height: 184 });
				}}
			>
				Apple watch
			</button>
			<button
				onClick={() => {
					setSize({ width: 375, height: 667 });
				}}
			>
				iPhone 8
			</button>
			<button
				onClick={() => {
					setSize({ width: 414, height: 896 });
				}}
			>
				iPhone 11
			</button>
			<button
				onClick={() => {
					setSize({ width: 768, height: 1042 });
				}}
			>
				iPad
			</button>
			<button
				onClick={() => {
					setSize({ width: 1024, height: 1366 });
				}}
			>
				iPad Pro
			</button>
			<button
				onClick={() => {
					setSize({ width: 1280, height: 800 });
				}}
			>
				Macbook Pro 13''
			</button>
			<button
				onClick={() => {
					setSize({ width: 1536, height: 960 });
				}}
			>
				Macbook Pro 16''
			</button>
			<button
				onClick={() => {
					setSize({ width: 1920, height: 1080 });
				}}
			>
				iMac
			</button>
			<br />
			<button
				onClick={() => {
					setSize(({ height, width }) => ({ width: height, height: width }));
				}}
			>
				Rotate
			</button>
			<br />
			<button
				onClick={() => {
					setIsDark(previousState => !previousState);
				}}
			>
				Dark / Light
			</button>
			<div
				style={{
					...size,
					margin: "40px auto",
					boxShadow: "0 0 0 10px #555",
					borderRadius: 5,
				}}
			>
				<Frame
					height="100%"
					width="100%"
					style={{
						height: "100%",
						width: "100%",
						border: 0,
						background: "white",
						borderRadius: 5,
					}}
				>
					<FrameProvider>
						<ThemeProvider theme={isDark ? dark : light}>
							<Global styles={globalStyles} />
							<Global styles={poppins} />
							<Global styles={fontFaces} />
							{children}
						</ThemeProvider>
					</FrameProvider>
				</Frame>
			</div>
		</>
	);
};
