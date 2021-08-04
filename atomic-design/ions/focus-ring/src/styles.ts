import { highlight } from "@dekk-ui/design-tokens/colors";
import { css } from "@emotion/react";

export const focusRing = css`
	&::before {
		content: "";
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: inherit;
		box-shadow: 0 0 0 2px ${highlight.value};
		pointer-events: none;
	}
`;

export const focus = css`
	box-shadow: 0 0 0 2px ${highlight.value};
`;
