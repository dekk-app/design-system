import { pxToRem } from "@dekk-ui/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FieldsetRowProps } from "./types";

export const StyledFieldsetRow = styled.fieldset<FieldsetRowProps>`
	display: inline-grid;
	justify-content: stretch;
	justify-items: center;
	margin: 0;
	padding: 0;
	border: 0;
	user-select: none;

	> :first-of-type {
		justify-self: start;
	}

	> :last-child {
		justify-self: end;
	}

	${({ column, columns, gap, fullWidth }) => css`
		width: ${fullWidth ? "100%" : "auto"};
		max-width: 100%;
		grid-auto-columns: ${column ?? "initial"};
		grid-auto-flow: ${column ? "column" : "initial"};
		grid-column-gap: ${gap ?? pxToRem(8)};
		grid-template-columns: ${columns ?? "initial"};
	`};
`;
