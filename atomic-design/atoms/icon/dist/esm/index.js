/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/icon
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { IconSize, icons } from '@dekk-ui/icons';
import React from 'react';
import _styled from '@emotion/styled/base';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var _extends$1 = {exports: {}};

(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(_extends$1));

var _extends = /*@__PURE__*/getDefaultExportFromCjs(_extends$1.exports);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const StyledSvg = _styled("svg", process.env.NODE_ENV === "production" ? {
  target: "e1phws1e1"
} : {
  target: "e1phws1e1",
  label: "StyledSvg"
})(process.env.NODE_ENV === "production" ? {
  name: "134acw",
  styles: "fill:currentColor"
} : {
  name: "134acw",
  styles: "fill:currentColor",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDb0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkU3ZnID0gc3R5bGVkLnN2ZyBgXG5cdGZpbGw6IGN1cnJlbnRDb2xvcjtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0ZmlsbDogY3VycmVudENvbG9yO1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledPath = _styled("path", process.env.NODE_ENV === "production" ? {
  target: "e1phws1e0"
} : {
  target: "e1phws1e0",
  label: "StyledPath"
})(process.env.NODE_ENV === "production" ? {
  name: "134acw",
  styles: "fill:currentColor"
} : {
  name: "134acw",
  styles: "fill:currentColor",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJc0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkU3ZnID0gc3R5bGVkLnN2ZyBgXG5cdGZpbGw6IGN1cnJlbnRDb2xvcjtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0ZmlsbDogY3VycmVudENvbG9yO1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Icon = _a => {
  var {
    icon,
    size
  } = _a,
      props = __rest(_a, ["icon", "size"]);

  return /*#__PURE__*/React.createElement(StyledSvg, _extends({}, props, {
    height: size,
    width: size,
    viewBox: `0 0 ${size} ${size}`
  }), /*#__PURE__*/React.createElement(StyledPath, {
    d: icons[size][icon]
  }));
};
Icon.defaultProps = {
  size: IconSize.m
};

export { Icon, StyledPath, StyledSvg };
