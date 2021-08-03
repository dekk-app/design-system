/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/toggle-button
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import React from 'react';
import _styled from '@emotion/styled/base';
import { pxToRem } from '@dekk-ui/utils';
import { css } from '@emotion/react';

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

const StyledToggleButton = _styled("button", process.env.NODE_ENV === "production" ? {
  target: "ecytk870"
} : {
  target: "ecytk870",
  label: "StyledToggleButton"
})("display:inline-flex;position:relative;flex:1;align-content:center;align-items:center;justify-content:center;width:100%;height:100%;margin:0;padding:0;border:0;&:focus{outline:0;}&::before{position:absolute;top:50%;right:0;width:1px;}", ({
  theme,
  isSelected
}) => /*#__PURE__*/css("border-radius:", pxToRem(theme.radius.s), ";background:", isSelected ? theme.ui.colors.primary : theme.ui.fill["2"], ";color:", isSelected ? theme.ui.colors.lightest : theme.ui.text["1"], ";&::before{content:", isSelected ? "unset" : `""`, ";}&:hover{background:", isSelected ? theme.ui.colors.primary : theme.ui.fill["1"], ";&::before{content:unset;}}&:focus-visible{z-index:1;background:", isSelected ? theme.ui.colors.primary : theme.ui.fill["1"], ";box-shadow:", isSelected ? `inset 0 0 0 1px ${theme.ui.colors.primary}, inset  0 0 0 2px ${theme.ui.fill["2"]}` : `inset 0 0 0 1px ${theme.ui.colors.primary}`, ";&::before{content:unset;}}&:last-of-type{&::before{content:unset;}}&::before{height:", pxToRem(theme.space.xs), ";margin-top:calc(", pxToRem(theme.space.xs), " / -2);background:", isSelected ? theme.ui.colors.primary : theme.ui.outline["1"], ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledToggleButton;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHNcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkVG9nZ2xlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbiBgXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsZXg6IDE7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IDA7XG5cdH1cblxuXHQmOjpiZWZvcmUge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDUwJTtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMXB4O1xuXHR9XG5cblx0JHsoeyB0aGVtZSwgaXNTZWxlY3RlZCB9KSA9PiBjc3MgYFxuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogdGhlbWUudWkuZmlsbFtcIjJcIl19O1xuXHRcdGNvbG9yOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS51aS5jb2xvcnMubGlnaHRlc3QgOiB0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6ICR7aXNTZWxlY3RlZCA/IFwidW5zZXRcIiA6IGBcIlwiYH07XG5cdFx0fVxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiB1bnNldDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmOmZvY3VzLXZpc2libGUge1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogdGhlbWUudWkuZmlsbFtcIjFcIl19O1xuXHRcdFx0Ym94LXNoYWRvdzogJHtpc1NlbGVjdGVkXG4gICAgPyBgaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9LCBpbnNldCAgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjJcIl19YFxuICAgIDogYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fWB9O1xuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogdW5zZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogdW5zZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGhlaWdodDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnhzKX07XG5cdFx0XHRtYXJnaW4tdG9wOiBjYWxjKCR7cHhUb1JlbSh0aGVtZS5zcGFjZS54cyl9IC8gLTIpO1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5vdXRsaW5lW1wiMVwiXX07XG5cdFx0fVxuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0QiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlsc1wiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmV4cG9ydCBjb25zdCBTdHlsZWRUb2dnbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZmxleDogMTtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCY6OmJlZm9yZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNTAlO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHdpZHRoOiAxcHg7XG5cdH1cblxuXHQkeyh7IHRoZW1lLCBpc1NlbGVjdGVkIH0pID0+IGNzcyBgXG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5maWxsW1wiMlwiXX07XG5cdFx0Y29sb3I6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5saWdodGVzdCA6IHRoZW1lLnVpLnRleHRbXCIxXCJdfTtcblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogJHtpc1NlbGVjdGVkID8gXCJ1bnNldFwiIDogYFwiXCJgfTtcblx0XHR9XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS51aS5jb2xvcnMucHJpbWFyeSA6IHRoZW1lLnVpLmZpbGxbXCIxXCJdfTtcblx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IHVuc2V0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRib3gtc2hhZG93OiAke2lzU2VsZWN0ZWRcbiAgICA/IGBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX0sIGluc2V0ICAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsW1wiMlwiXX1gXG4gICAgOiBgaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9YH07XG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiB1bnNldDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiB1bnNldDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0aGVpZ2h0OiAke3B4VG9SZW0odGhlbWUuc3BhY2UueHMpfTtcblx0XHRcdG1hcmdpbi10b3A6IGNhbGMoJHtweFRvUmVtKHRoZW1lLnNwYWNlLnhzKX0gLyAtMik7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS51aS5jb2xvcnMucHJpbWFyeSA6IHRoZW1lLnVpLm91dGxpbmVbXCIxXCJdfTtcblx0XHR9XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"));

const ToggleButton = _a => {
  var {
    className,
    children
  } = _a,
      props = __rest(_a, ["className", "children"]);

  return /*#__PURE__*/React.createElement(StyledToggleButton, _extends({}, props, {
    className: className
  }), children);
};

export { StyledToggleButton, ToggleButton };
