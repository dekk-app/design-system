import { StyledAvatarWrapper } from "@dekk-ui/avatar/styled";
import { pxToRem } from "@dekk-ui/utils/px-to-rem";
import styled from "@emotion/styled";

export const StyledAvatars = styled.div`
	display: inline-grid;
	grid-auto-flow: dense;
	grid-column-gap: 0;
	grid-template-columns: repeat(4, ${pxToRem(20)});

	${StyledAvatarWrapper} {
		&:nth-last-child(1) {
			grid-column: 1;
		}
		&:nth-last-child(2) {
			grid-column: 2;
		}
		&:nth-last-child(3) {
			grid-column: 3;
		}
		&:nth-last-child(4) {
			grid-column: 4;
		}
	}
`;
