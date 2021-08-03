import { CSSToken, Token } from "./types";
export declare const createToken: <T>(name: string, value: T, description?: string) => Token<T>;
export declare const createCSSToken: <T>(value: T, namespace: string, name: string) => CSSToken<T>;
