import { HTMLProps, ReactNode } from "react";

export interface AvatarProps<T extends Element = Element> extends HTMLProps<T> {}

export interface AvatarImageProps extends AvatarProps {
	src: string;
	alt: string;
}

export interface AvatarDivProps extends AvatarProps {
	children?: ReactNode;
}

export type AvatarUnionProps = AvatarImageProps | AvatarDivProps;
