import React from "react";
import { StyledAvatar, StyledAvatarText, StyledAvatarWrapper } from "./styled";
import { AvatarUnionProps } from "./types";

export const Avatar: React.FC<AvatarUnionProps> = props => {
	return (
		<StyledAvatarWrapper className={props.className}>
			{typeof props.children !== "undefined" ? (
				<StyledAvatarText>{props.children}</StyledAvatarText>
			) : (
				<StyledAvatar src={props.src} alt={props.alt} height={32} width={32} />
			)}
		</StyledAvatarWrapper>
	);
};
