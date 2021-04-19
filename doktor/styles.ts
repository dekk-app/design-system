import { css } from "@emotion/react";

export const fontFaces = css`
	html {
		font-family: poppins, sans-serif;
	}

	input,
	select,
	button {
		font-family: inherit;
		font-size: 1em;
	}
`;

export const poppins = css`
	/* devanagari */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 300;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z11lFd2JQEl8qw.woff2)
			format("woff2");
		unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC,
			U+A830-A839, U+A8E0-A8FB;
	}

	/* latin-ext */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 300;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1JlFd2JQEl8qw.woff2)
			format("woff2");
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
			U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 300;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2)
			format("woff2");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* devanagari */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2)
			format("woff2");
		unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC,
			U+A830-A839, U+A8E0-A8FB;
	}

	/* latin-ext */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2)
			format("woff2");
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
			U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)
			format("woff2");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* devanagari */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2)
			format("woff2");
		unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC,
			U+A830-A839, U+A8E0-A8FB;
	}

	/* latin-ext */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
			format("woff2");
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
			U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
			format("woff2");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* devanagari */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2)
			format("woff2");
		unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC,
			U+A830-A839, U+A8E0-A8FB;
	}

	/* latin-ext */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2)
			format("woff2");
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
			U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2)
			format("woff2");
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
`;

export const globalStyles = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		user-select: none;
	}

	html {
		font-size: 16px;
	}
	body {
		width: 100%;
		max-width: 100vw;
		min-height: 100vh;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;

		&.dark-mode {
			/* dark mode */
			background: #232324;
			color: white;
			-webkit-font-smoothing: antialiased;
		}
		&.light-mode {
			/* light mode */
			background: white;
			color: black;
		}
	}
	#__next {
		display: contents;
	}
`;
