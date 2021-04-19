import { dark, light } from "@dekk-ui/theme";
import { CacheProvider, Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

import pkg from "../../package.json";
import { fontFaces, globalStyles, poppins } from "../doktor/styles";
import { cache } from "../emotion";

const App = ({ Component, pageProps }) => {
	const { value: darkMode } = useDarkMode();
	const [theme, setTheme] = useState(light);

	useEffect(() => {
		setTheme(darkMode ? dark : light);
	}, [darkMode]);

	return (
		<CacheProvider value={cache}>
			<Global styles={globalStyles} />
			<Global styles={poppins} />
			<Global styles={fontFaces} />
			<Head>
				<title>Dekk</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="version" content={pkg.version} />
			</Head>
			<EmotionThemeProvider theme={theme}>
				<Component {...pageProps} />
			</EmotionThemeProvider>
		</CacheProvider>
	);
};

export default App;
