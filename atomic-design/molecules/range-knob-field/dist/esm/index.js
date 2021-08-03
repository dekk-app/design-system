/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/range-knob-field
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { FieldsetRow } from '@dekk-ui/fieldset-row';
import { NumberInput } from '@dekk-ui/input-field/number-input';
import { StyledCombinedInput, StyledPrefix, StyledSuffix } from '@dekk-ui/input-field/styled';
import { InputLabel } from '@dekk-ui/input-label';
import { RangeKnob } from '@dekk-ui/range-knob';
import { clamp } from '@dekk-ui/utils/clamp';
import { pxToRem } from '@dekk-ui/utils/px-to-rem';
import { useTheme } from '@emotion/react';
import React, { forwardRef, useState, useCallback } from 'react';
import _styled from '@emotion/styled/base';

const StyledRangeKnobLabel = _styled("label", process.env.NODE_ENV === "production" ? {
  target: "e1dewd2l0"
} : {
  target: "e1dewd2l0",
  label: "StyledRangeKnobLabel"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDaUQiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkUmFuZ2VLbm9iTGFiZWwgPSBzdHlsZWQubGFiZWwgYGA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */");

const RangeKnobField = /*#__PURE__*/forwardRef(({
  id,
  label,
  name,
  max = 100,
  min = 0,
  step = 1,
  prefix,
  suffix
}, ref) => {
  const [value, setValue] = useState(min);
  const theme = useTheme();
  const handleChange = useCallback(newValue => {
    setValue(newValue <= min ? clamp((newValue + max) % max, max, min) : clamp(newValue % max, max, min));
  }, [max, min]);
  return /*#__PURE__*/React.createElement(FieldsetRow, {
    fullWidth: true,
    columns: `1fr ${pxToRem(36)} 1fr`,
    gap: pxToRem(theme.space.xs)
  }, /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement(StyledRangeKnobLabel, null, /*#__PURE__*/React.createElement(RangeKnob, {
    id: `__${id}__`,
    value: value,
    step: step,
    min: min,
    max: max,
    tabIndex: -1,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(StyledCombinedInput, {
    width: pxToRem(theme.space.l * 2)
  }, prefix && /*#__PURE__*/React.createElement(StyledPrefix, null, prefix), /*#__PURE__*/React.createElement(NumberInput, {
    ref: ref,
    fullWidth: true,
    id: id,
    name: name,
    value: `${value}`,
    step: step,
    max: max,
    textAlign: "right",
    onChange: handleChange
  }), suffix && /*#__PURE__*/React.createElement(StyledSuffix, null, suffix)));
});

export { RangeKnobField, StyledRangeKnobLabel };
