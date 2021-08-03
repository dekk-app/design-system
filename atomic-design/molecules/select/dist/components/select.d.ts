import React from "react";
import { Props } from "react-select";
import { SelectOption, SelectProps } from "../types";
export declare const customComponents: Props["components"];
export declare const Select: React.ForwardRefExoticComponent<Pick<SelectProps<SelectOption> & Props<SelectOption, false, import("react-select").GroupTypeBase<SelectOption>>, string | number> & React.RefAttributes<HTMLSelectElement>>;
