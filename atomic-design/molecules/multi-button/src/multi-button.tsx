import React, { FC } from "react";
import { StyledMultiButton } from "./styled";
import { MultiButtonProps } from "./types";

export const MultiButton: FC<MultiButtonProps> = ({ children, width, fullWidth }) => {
	return (
		<StyledMultiButton width={width} fullWidth={fullWidth}>
			{children}
		</StyledMultiButton>
	);
};
