import React, { FC } from "react";
import { StyledAvatar, StyledAvatarText, StyledAvatarWrapper } from "./styled";
import { AvatarUnionProps } from "./types";

export const Avatar: FC<AvatarUnionProps> = props => {
	return (
		<StyledAvatarWrapper className={props.className}>
			{typeof props.children === "undefined" ? (
				<StyledAvatar src={props.src} alt={props.alt} height={32} width={32} />
			) : (
				<StyledAvatarText>{props.children}</StyledAvatarText>
			)}
		</StyledAvatarWrapper>
	);
};
