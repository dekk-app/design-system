/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/range-knob-field
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fieldsetRow = require('@dekk-ui/fieldset-row');
var numberInput = require('@dekk-ui/input-field/number-input');
var styled = require('@dekk-ui/input-field/styled');
var inputLabel = require('@dekk-ui/input-label');
var rangeKnob = require('@dekk-ui/range-knob');
var clamp = require('@dekk-ui/utils/clamp');
var pxToRem = require('@dekk-ui/utils/px-to-rem');
var react = require('@emotion/react');
var React = require('react');
var _styled = require('@emotion/styled/base');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

const StyledRangeKnobLabel = _styled__default['default']("label", process.env.NODE_ENV === "production" ? {
  target: "e1dewd2l0"
} : {
  target: "e1dewd2l0",
  label: "StyledRangeKnobLabel"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDaUQiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkUmFuZ2VLbm9iTGFiZWwgPSBzdHlsZWQubGFiZWwgYGA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */");

const RangeKnobField = /*#__PURE__*/React.forwardRef(({
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
    setValue(newValue <= min ? clamp.clamp((newValue + max) % max, max, min) : clamp.clamp(newValue % max, max, min));
  }, [max, min]);
  return /*#__PURE__*/React__default['default'].createElement(fieldsetRow.FieldsetRow, {
    fullWidth: true,
    columns: `1fr ${pxToRem.pxToRem(36)} 1fr`,
    gap: pxToRem.pxToRem(theme.space.xs)
  }, /*#__PURE__*/React__default['default'].createElement(inputLabel.InputLabel, {
    htmlFor: id
  }, label), /*#__PURE__*/React__default['default'].createElement(StyledRangeKnobLabel, null, /*#__PURE__*/React__default['default'].createElement(rangeKnob.RangeKnob, {
    id: `__${id}__`,
    value: value,
    step: step,
    min: min,
    max: max,
    tabIndex: -1,
    onChange: handleChange
  })), /*#__PURE__*/React__default['default'].createElement(styled.StyledCombinedInput, {
    width: pxToRem.pxToRem(theme.space.l * 2)
  }, prefix && /*#__PURE__*/React__default['default'].createElement(styled.StyledPrefix, null, prefix), /*#__PURE__*/React__default['default'].createElement(numberInput.NumberInput, {
    ref: ref,
    fullWidth: true,
    id: id,
    name: name,
    value: `${value}`,
    step: step,
    max: max,
    textAlign: "right",
    onChange: handleChange
  }), suffix && /*#__PURE__*/React__default['default'].createElement(styled.StyledSuffix, null, suffix)));
});

exports.RangeKnobField = RangeKnobField;
exports.StyledRangeKnobLabel = StyledRangeKnobLabel;
