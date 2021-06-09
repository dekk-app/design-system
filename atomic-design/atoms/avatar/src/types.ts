import React from "react";

export interface AvatarProps<T extends Element = Element> extends React.HTMLProps<T> {}

export interface AvatarImageProps extends AvatarProps {
	src: string;
	alt: string;
}

export interface AvatarDivProps extends AvatarProps {
	children?: React.ReactNode;
}

export type AvatarUnionProps = AvatarImageProps | AvatarDivProps;
