export interface Token<T = unknown> {
    name: string;
    value: T;
    description?: string;
}
export interface CSSToken<T = unknown> {
    token: string;
    propertyName: string;
    value: T;
}
