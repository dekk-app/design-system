import { HTMLProps } from "react";
import { Except } from "type-fest";
export interface Person {
    id: string;
    name: string;
    avatar: string;
}
export interface AvatarsProps<T extends Element = Element> extends Except<HTMLProps<T>, "as" | "ref"> {
    people: Person[];
}
