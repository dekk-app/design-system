/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/range-field
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { FieldsetRow } from '@dekk-ui/fieldset-row';
import { NumberInput } from '@dekk-ui/input-field/number-input';
import { StyledCombinedInput, StyledPrefix, StyledSuffix } from '@dekk-ui/input-field/styled';
import { InputLabel } from '@dekk-ui/input-label';
import { Range } from '@dekk-ui/range';
import { clamp } from '@dekk-ui/utils/clamp';
import { pxToRem } from '@dekk-ui/utils/px-to-rem';
import { useTheme } from '@emotion/react';
import React, { forwardRef, useState, useCallback } from 'react';
import _styled from '@emotion/styled/base';

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const StyledInputWrapper = _styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1df8p8e1"
} : {
  target: "e1df8p8e1",
  label: "StyledInputWrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "my7tnz",
  styles: "display:inline-flex;flex-wrap:wrap;align-content:center;align-items:center;justify-content:space-between;width:100%"
} : {
  name: "my7tnz",
  styles: "display:inline-flex;flex-wrap:wrap;align-content:center;align-items:center;justify-content:space-between;width:100%",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDNkMiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUmFuZ2VMYWJlbCA9IHN0eWxlZC5sYWJlbCBgXG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledRangeLabel = _styled("label", process.env.NODE_ENV === "production" ? {
  target: "e1df8p8e0"
} : {
  target: "e1df8p8e0",
  label: "StyledRangeLabel"
})(process.env.NODE_ENV === "production" ? {
  name: "1082qq3",
  styles: "display:block;width:100%"
} : {
  name: "1082qq3",
  styles: "display:block;width:100%",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTNkMiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUmFuZ2VMYWJlbCA9IHN0eWxlZC5sYWJlbCBgXG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const RangeField = /*#__PURE__*/forwardRef(({
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
    setValue(clamp(newValue, max, min));
  }, [max, min]);
  return /*#__PURE__*/React.createElement(StyledInputWrapper, null, /*#__PURE__*/React.createElement(InputLabel, {
    fullWidth: true,
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement(FieldsetRow, {
    fullWidth: true,
    columns: `auto ${pxToRem(theme.space.l * 2)}`,
    gap: pxToRem(theme.space.l)
  }, /*#__PURE__*/React.createElement(StyledRangeLabel, null, /*#__PURE__*/React.createElement(Range, {
    fullWidth: true,
    id: `__${id}__`,
    value: value,
    step: step,
    min: min,
    max: max,
    tabIndex: -1,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(StyledCombinedInput, {
    fullWidth: true
  }, prefix && /*#__PURE__*/React.createElement(StyledPrefix, null, prefix), /*#__PURE__*/React.createElement(NumberInput, {
    ref: ref,
    fullWidth: true,
    id: id,
    name: name,
    value: `${value}`,
    step: step,
    min: min,
    max: max,
    textAlign: "right",
    onChange: handleChange
  }), suffix && /*#__PURE__*/React.createElement(StyledSuffix, null, suffix))));
});

export { RangeField, StyledInputWrapper, StyledRangeLabel };
