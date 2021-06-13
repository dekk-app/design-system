import React, { FC } from "react";
import { StyledFieldsetRow } from "./styled";
import { FieldsetRowProps } from "./types";

export const FieldsetRow: FC<FieldsetRowProps> = props => <StyledFieldsetRow {...props} />;
