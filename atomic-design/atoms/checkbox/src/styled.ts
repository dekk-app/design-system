import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledCheckbox = styled.input`
	position: relative;
	margin: 0;
	padding: 0;
	border: 0;
	appearance: none;
	background: none;

	&:focus {
		outline: 0;
	}

	${({ theme }) => css`
		width: ${pxToRem(theme.space.s)};
		max-width: ${pxToRem(theme.space.s)};
		height: ${pxToRem(theme.space.s)};
		max-height: ${pxToRem(theme.space.s)};
		box-shadow: inset 0 0 0 1px ${theme.ui.text["1"]};
		border-radius: ${pxToRem(theme.radius.s)};

		&:checked {
			background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${theme
						.ui.text[
						"2"
					]}"><path d="M12.256 4.25a.75.75 0 00-.537.219L6.25 9.937 4.281 7.97a.75.75 0 00-1.062 0 .75.75 0 000 1.062l2.5 2.5a.75.75 0 001.062 0l6-6a.75.75 0 000-1.062.75.75 0 00-.525-.219z"/></svg>')
					no-repeat center/100%,
				${theme.ui.text["1"]};
		}

		&:focus-visible {
			background-color: ${theme.ui.colors.primary};
			box-shadow: inset 0 0 0 1px ${theme.ui.colors.primary};
		}
	`};
`;
