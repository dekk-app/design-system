/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/icon-button
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { IconSize, icons } from '@dekk-ui/icons';
import React from 'react';
import _styled from '@emotion/styled/base';
import { pxToRem } from '@dekk-ui/utils/px-to-rem';
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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const StyledSvg = _styled("svg", process.env.NODE_ENV === "production" ? {
  target: "e17lkvz82"
} : {
  target: "e17lkvz82",
  label: "StyledSvg"
})(process.env.NODE_ENV === "production" ? {
  name: "134acw",
  styles: "fill:currentColor"
} : {
  name: "134acw",
  styles: "fill:currentColor",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHb0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkU3ZnID0gc3R5bGVkLnN2ZyBgXG5cdGZpbGw6IGN1cnJlbnRDb2xvcjtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0ZmlsbDogY3VycmVudENvbG9yO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IDA7XG5cdH1cblxuXHQke1N0eWxlZFN2Z30ge1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR9XG5cblx0JHsoeyB0aGVtZSwgaXNTZWxlY3RlZCB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5sKX07XG5cdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5saWdodGVzdCA6IFwiY3VycmVudENvbG9yXCJ9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXG5cdFx0Jjpmb2N1cy12aXNpYmxlIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogdGhlbWUudWkuZmlsbFtcIjFcIl19O1xuXHRcdFx0Ym94LXNoYWRvdzogJHtpc1NlbGVjdGVkXG4gICAgPyBgaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9LCBpbnNldCAgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjJcIl19YFxuICAgIDogYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fWB9O1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0fVxuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledPath = _styled("path", process.env.NODE_ENV === "production" ? {
  target: "e17lkvz81"
} : {
  target: "e17lkvz81",
  label: "StyledPath"
})(process.env.NODE_ENV === "production" ? {
  name: "134acw",
  styles: "fill:currentColor"
} : {
  name: "134acw",
  styles: "fill:currentColor",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNc0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkU3ZnID0gc3R5bGVkLnN2ZyBgXG5cdGZpbGw6IGN1cnJlbnRDb2xvcjtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0ZmlsbDogY3VycmVudENvbG9yO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IDA7XG5cdH1cblxuXHQke1N0eWxlZFN2Z30ge1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR9XG5cblx0JHsoeyB0aGVtZSwgaXNTZWxlY3RlZCB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5sKX07XG5cdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5saWdodGVzdCA6IFwiY3VycmVudENvbG9yXCJ9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXG5cdFx0Jjpmb2N1cy12aXNpYmxlIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogdGhlbWUudWkuZmlsbFtcIjFcIl19O1xuXHRcdFx0Ym94LXNoYWRvdzogJHtpc1NlbGVjdGVkXG4gICAgPyBgaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9LCBpbnNldCAgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjJcIl19YFxuICAgIDogYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fWB9O1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0fVxuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledButton = _styled("button", process.env.NODE_ENV === "production" ? {
  target: "e17lkvz80"
} : {
  target: "e17lkvz80",
  label: "StyledButton"
})("display:inline-flex;align-content:center;align-items:center;justify-content:center;margin:0;padding:0;border:0;&:focus{outline:0;}", StyledSvg, "{pointer-events:none;}", ({
  theme,
  isSelected
}) => /*#__PURE__*/css("width:", pxToRem(theme.space.l), ";min-width:", pxToRem(theme.space.l), ";height:", pxToRem(theme.space.l), ";background:", isSelected ? theme.ui.colors.primary : "none", ";color:", isSelected ? theme.ui.colors.lightest : "currentColor", ";border-radius:", pxToRem(theme.radius.s), ";&:focus-visible{background:", isSelected ? theme.ui.colors.primary : theme.ui.fill["1"], ";box-shadow:", isSelected ? `inset 0 0 0 1px ${theme.ui.colors.primary}, inset  0 0 0 2px ${theme.ui.fill["2"]}` : `inset 0 0 0 1px ${theme.ui.colors.primary}`, ";}&:hover{background:", isSelected ? theme.ui.colors.primary : theme.ui.fill["1"], ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledButton;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFN2ZyA9IHN0eWxlZC5zdmcgYFxuXHRmaWxsOiBjdXJyZW50Q29sb3I7XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFBhdGggPSBzdHlsZWQucGF0aCBgXG5cdGZpbGw6IGN1cnJlbnRDb2xvcjtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbiBgXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5cblx0JHtTdHlsZWRTdmd9IHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0fVxuXG5cdCR7KHsgdGhlbWUsIGlzU2VsZWN0ZWQgfSkgPT4gY3NzIGBcblx0XHR3aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRtaW4td2lkdGg6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5sKX07XG5cdFx0aGVpZ2h0OiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogXCJub25lXCJ9O1xuXHRcdGNvbG9yOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS51aS5jb2xvcnMubGlnaHRlc3QgOiBcImN1cnJlbnRDb2xvclwifTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS51aS5jb2xvcnMucHJpbWFyeSA6IHRoZW1lLnVpLmZpbGxbXCIxXCJdfTtcblx0XHRcdGJveC1zaGFkb3c6ICR7aXNTZWxlY3RlZFxuICAgID8gYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fSwgaW5zZXQgIDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbXCIyXCJdfWBcbiAgICA6IGBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX1gfTtcblx0XHR9XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogdGhlbWUudWkuZmlsbFtcIjFcIl19O1xuXHRcdH1cblx0YH07XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEMiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkU3ZnID0gc3R5bGVkLnN2ZyBgXG5cdGZpbGw6IGN1cnJlbnRDb2xvcjtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0ZmlsbDogY3VycmVudENvbG9yO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IDA7XG5cdH1cblxuXHQke1N0eWxlZFN2Z30ge1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR9XG5cblx0JHsoeyB0aGVtZSwgaXNTZWxlY3RlZCB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5sKX07XG5cdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5saWdodGVzdCA6IFwiY3VycmVudENvbG9yXCJ9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXG5cdFx0Jjpmb2N1cy12aXNpYmxlIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7aXNTZWxlY3RlZCA/IHRoZW1lLnVpLmNvbG9ycy5wcmltYXJ5IDogdGhlbWUudWkuZmlsbFtcIjFcIl19O1xuXHRcdFx0Ym94LXNoYWRvdzogJHtpc1NlbGVjdGVkXG4gICAgPyBgaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9LCBpbnNldCAgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjJcIl19YFxuICAgIDogYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fWB9O1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0fVxuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"));

const IconButton = _a => {
  var {
    icon,
    size
  } = _a,
      props = __rest(_a, ["icon", "size"]);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({}, props, {
    "aria-label": icon
  }), /*#__PURE__*/React.createElement(StyledSvg, {
    height: size,
    width: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement(StyledPath, {
    d: icons[size][icon]
  })));
};
IconButton.defaultProps = {
  size: IconSize.m
};

export { IconButton, StyledButton, StyledPath, StyledSvg };
