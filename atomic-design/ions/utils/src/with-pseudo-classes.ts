import { css, SerializedStyles } from "@emotion/react";
import process from "process";

export const withPseudoClasses = (selector: string, styles: SerializedStyles | string) => {
	return process.env.STORYBOOK_PSEUDO_CLASSES === "true"
		? css`
				&:${selector},
				&.\\:${selector.replace(/&:/, "&.\\:").replace(/-/, "")} {
					${styles}
				}
		  `
		: css`
				&: ${selector} {
					${styles}
				}
		  `;
};
