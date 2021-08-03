import React from "react";
import { Props } from "react-select";
import { SelectOption, SelectProps } from "../types";
export declare const popoutComponents: Props["components"];
export declare const PopoutSelect: React.ForwardRefExoticComponent<Pick<SelectProps<SelectOption> & Props<SelectOption, false, import("react-select").GroupTypeBase<SelectOption>>, string | number> & React.RefAttributes<HTMLSelectElement>>;
