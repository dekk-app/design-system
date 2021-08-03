/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/range-field
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fieldsetRow = require('@dekk-ui/fieldset-row');
var numberInput = require('@dekk-ui/input-field/number-input');
var styled = require('@dekk-ui/input-field/styled');
var inputLabel = require('@dekk-ui/input-label');
var range = require('@dekk-ui/range');
var clamp = require('@dekk-ui/utils/clamp');
var pxToRem = require('@dekk-ui/utils/px-to-rem');
var react = require('@emotion/react');
var React = require('react');
var _styled = require('@emotion/styled/base');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const StyledInputWrapper = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
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
const StyledRangeLabel = _styled__default['default']("label", process.env.NODE_ENV === "production" ? {
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

const RangeField = /*#__PURE__*/React.forwardRef(({
  id,
  label,
  name,
  max = 100,
  min = 0,
  step = 1,
  prefix,
  suffix
}, ref) => {
  const [value, setValue] = React.useState(min);
  const theme = react.useTheme();
  const handleChange = React.useCallback(newValue => {
    setValue(clamp.clamp(newValue, max, min));
  }, [max, min]);
  return /*#__PURE__*/React__default['default'].createElement(StyledInputWrapper, null, /*#__PURE__*/React__default['default'].createElement(inputLabel.InputLabel, {
    fullWidth: true,
    htmlFor: id
  }, label), /*#__PURE__*/React__default['default'].createElement(fieldsetRow.FieldsetRow, {
    fullWidth: true,
    columns: `auto ${pxToRem.pxToRem(theme.space.l * 2)}`,
    gap: pxToRem.pxToRem(theme.space.l)
  }, /*#__PURE__*/React__default['default'].createElement(StyledRangeLabel, null, /*#__PURE__*/React__default['default'].createElement(range.Range, {
    fullWidth: true,
    id: `__${id}__`,
    value: value,
    step: step,
    min: min,
    max: max,
    tabIndex: -1,
    onChange: handleChange
  })), /*#__PURE__*/React__default['default'].createElement(styled.StyledCombinedInput, {
    fullWidth: true
  }, prefix && /*#__PURE__*/React__default['default'].createElement(styled.StyledPrefix, null, prefix), /*#__PURE__*/React__default['default'].createElement(numberInput.NumberInput, {
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
  }), suffix && /*#__PURE__*/React__default['default'].createElement(styled.StyledSuffix, null, suffix))));
});

exports.RangeField = RangeField;
exports.StyledInputWrapper = StyledInputWrapper;
exports.StyledRangeLabel = StyledRangeLabel;
