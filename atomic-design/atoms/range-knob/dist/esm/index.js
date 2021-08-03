/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/range-knob
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { clamp } from '@dekk-ui/utils/clamp';
import { getDeg } from '@dekk-ui/utils/get-deg';
import React, { forwardRef, useRef, useState, useCallback, useEffect } from 'react';
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
const StyledInputWrapper = _styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1j34ie12"
} : {
  target: "e1j34ie12",
  label: "StyledInputWrapper"
})("display:inline-flex;position:relative;width:", pxToRem(48), ";height:", pxToRem(48), ";margin:", pxToRem(-8), " ", pxToRem(-6), ";", ({
  theme
}) => /*#__PURE__*/css("&:focus-within{background:", theme.ui.fill["1"], ";box-shadow:0 0 0 1px ", theme.ui.colors.primary, ";border-radius:", pxToRem(theme.radius.s), ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledInputWrapper;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTc0IiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRXcmFwcGVyID0gc3R5bGVkLnNwYW4gYFxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogJHtweFRvUmVtKDQ4KX07XG5cdGhlaWdodDogJHtweFRvUmVtKDQ4KX07XG5cdG1hcmdpbjogJHtweFRvUmVtKC04KX0gJHtweFRvUmVtKC02KX07XG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHQmOmZvY3VzLXdpdGhpbiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLnVpLmZpbGxbXCIxXCJdfTtcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdH1cblx0YH07XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFJpbmcgPSBzdHlsZWQuZGl2IGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHdpZHRoOiAke3B4VG9SZW0oMzIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgzMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC0xNil9O1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbM119O1xuXHRgfTtcbmA7XG5jb25zdCB0aHVtYiA9IGNzcyBgXG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDA7XG5cdGJvcmRlcjogMDtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1YmJsZSA9IHN0eWxlZC5pbnB1dCBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiA1MCU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5cblx0Jjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0Jjo6LW1vei1yYW5nZS10aHVtYiB7XG5cdFx0JHt0aHVtYn07XG5cdH1cblxuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7cHhUb1JlbSgxMil9O1xuXHRcdGhlaWdodDogJHtweFRvUmVtKDEyKX07XG5cdFx0bWFyZ2luOiAke3B4VG9SZW0oLTYpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0YH07XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHOEMiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRXcmFwcGVyID0gc3R5bGVkLnNwYW4gYFxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogJHtweFRvUmVtKDQ4KX07XG5cdGhlaWdodDogJHtweFRvUmVtKDQ4KX07XG5cdG1hcmdpbjogJHtweFRvUmVtKC04KX0gJHtweFRvUmVtKC02KX07XG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHQmOmZvY3VzLXdpdGhpbiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLnVpLmZpbGxbXCIxXCJdfTtcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdH1cblx0YH07XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFJpbmcgPSBzdHlsZWQuZGl2IGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHdpZHRoOiAke3B4VG9SZW0oMzIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgzMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC0xNil9O1xuXHRcdGJveC1zaGFkb3c6IDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbM119O1xuXHRgfTtcbmA7XG5jb25zdCB0aHVtYiA9IGNzcyBgXG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDA7XG5cdGJvcmRlcjogMDtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1YmJsZSA9IHN0eWxlZC5pbnB1dCBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiA1MCU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5cblx0Jjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0Jjo6LW1vei1yYW5nZS10aHVtYiB7XG5cdFx0JHt0aHVtYn07XG5cdH1cblxuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7cHhUb1JlbSgxMil9O1xuXHRcdGhlaWdodDogJHtweFRvUmVtKDEyKX07XG5cdFx0bWFyZ2luOiAke3B4VG9SZW0oLTYpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0YH07XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"));
const StyledRing = _styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1j34ie11"
} : {
  target: "e1j34ie11",
  label: "StyledRing"
})("position:absolute;border-radius:50%;pointer-events:none;", ({
  theme
}) => /*#__PURE__*/css("top:50%;left:50%;width:", pxToRem(32), ";height:", pxToRem(32), ";margin:", pxToRem(-16), ";box-shadow:0 0 0 2px ", theme.ui.fill[3], ";" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledRing;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnNCIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICR7cHhUb1JlbSg0OCl9O1xuXHRoZWlnaHQ6ICR7cHhUb1JlbSg0OCl9O1xuXHRtYXJnaW46ICR7cHhUb1JlbSgtOCl9ICR7cHhUb1JlbSgtNil9O1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0Jjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRSaW5nID0gc3R5bGVkLmRpdiBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR3aWR0aDogJHtweFRvUmVtKDMyKX07XG5cdFx0aGVpZ2h0OiAke3B4VG9SZW0oMzIpfTtcblx0XHRtYXJnaW46ICR7cHhUb1JlbSgtMTYpfTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsWzNdfTtcblx0YH07XG5gO1xuY29uc3QgdGh1bWIgPSBjc3MgYFxuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXI6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdWJibGUgPSBzdHlsZWQuaW5wdXQgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHRvcDogMDtcblx0bGVmdDogNTAlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHQke3RodW1ifTtcblx0fVxuXG5cdCY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0oMTIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgxMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC02KX07XG5cdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnFDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICR7cHhUb1JlbSg0OCl9O1xuXHRoZWlnaHQ6ICR7cHhUb1JlbSg0OCl9O1xuXHRtYXJnaW46ICR7cHhUb1JlbSgtOCl9ICR7cHhUb1JlbSgtNil9O1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0Jjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRSaW5nID0gc3R5bGVkLmRpdiBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR3aWR0aDogJHtweFRvUmVtKDMyKX07XG5cdFx0aGVpZ2h0OiAke3B4VG9SZW0oMzIpfTtcblx0XHRtYXJnaW46ICR7cHhUb1JlbSgtMTYpfTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsWzNdfTtcblx0YH07XG5gO1xuY29uc3QgdGh1bWIgPSBjc3MgYFxuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXI6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdWJibGUgPSBzdHlsZWQuaW5wdXQgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHRvcDogMDtcblx0bGVmdDogNTAlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHQke3RodW1ifTtcblx0fVxuXG5cdCY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0oMTIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgxMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC02KX07XG5cdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"));
const thumb = process.env.NODE_ENV === "production" ? {
  name: "9f3j05",
  styles: "width:0;height:0;border:0;appearance:none;pointer-events:none"
} : {
  name: "1n730nl-thumb",
  styles: "width:0;height:0;border:0;appearance:none;pointer-events:none;label:thumb;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICR7cHhUb1JlbSg0OCl9O1xuXHRoZWlnaHQ6ICR7cHhUb1JlbSg0OCl9O1xuXHRtYXJnaW46ICR7cHhUb1JlbSgtOCl9ICR7cHhUb1JlbSgtNil9O1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0Jjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRSaW5nID0gc3R5bGVkLmRpdiBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR3aWR0aDogJHtweFRvUmVtKDMyKX07XG5cdFx0aGVpZ2h0OiAke3B4VG9SZW0oMzIpfTtcblx0XHRtYXJnaW46ICR7cHhUb1JlbSgtMTYpfTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsWzNdfTtcblx0YH07XG5gO1xuY29uc3QgdGh1bWIgPSBjc3MgYFxuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXI6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdWJibGUgPSBzdHlsZWQuaW5wdXQgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHRvcDogMDtcblx0bGVmdDogNTAlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHQke3RodW1ifTtcblx0fVxuXG5cdCY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0oMTIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgxMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC02KX07XG5cdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const StyledBubble = _styled("input", process.env.NODE_ENV === "production" ? {
  target: "e1j34ie10"
} : {
  target: "e1j34ie10",
  label: "StyledBubble"
})("position:absolute;appearance:none;top:0;left:50%;border-radius:50%;&:focus{outline:0;}&::-webkit-slider-thumb{", thumb, ";}&::-moz-range-thumb{", thumb, ";}", ({
  theme
}) => /*#__PURE__*/css("width:", pxToRem(12), ";height:", pxToRem(12), ";margin:", pxToRem(-6), ";background:", theme.ui.colors.primary, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledBubble;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RHNCIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICR7cHhUb1JlbSg0OCl9O1xuXHRoZWlnaHQ6ICR7cHhUb1JlbSg0OCl9O1xuXHRtYXJnaW46ICR7cHhUb1JlbSgtOCl9ICR7cHhUb1JlbSgtNil9O1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0Jjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRSaW5nID0gc3R5bGVkLmRpdiBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR3aWR0aDogJHtweFRvUmVtKDMyKX07XG5cdFx0aGVpZ2h0OiAke3B4VG9SZW0oMzIpfTtcblx0XHRtYXJnaW46ICR7cHhUb1JlbSgtMTYpfTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsWzNdfTtcblx0YH07XG5gO1xuY29uc3QgdGh1bWIgPSBjc3MgYFxuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXI6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdWJibGUgPSBzdHlsZWQuaW5wdXQgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHRvcDogMDtcblx0bGVmdDogNTAlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHQke3RodW1ifTtcblx0fVxuXG5cdCY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0oMTIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgxMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC02KX07XG5cdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICR7cHhUb1JlbSg0OCl9O1xuXHRoZWlnaHQ6ICR7cHhUb1JlbSg0OCl9O1xuXHRtYXJnaW46ICR7cHhUb1JlbSgtOCl9ICR7cHhUb1JlbSgtNil9O1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0Jjpmb2N1cy13aXRoaW4ge1xuXHRcdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRSaW5nID0gc3R5bGVkLmRpdiBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR3aWR0aDogJHtweFRvUmVtKDMyKX07XG5cdFx0aGVpZ2h0OiAke3B4VG9SZW0oMzIpfTtcblx0XHRtYXJnaW46ICR7cHhUb1JlbSgtMTYpfTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsWzNdfTtcblx0YH07XG5gO1xuY29uc3QgdGh1bWIgPSBjc3MgYFxuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXI6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdWJibGUgPSBzdHlsZWQuaW5wdXQgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHRvcDogMDtcblx0bGVmdDogNTAlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHQke3RodW1ifTtcblx0fVxuXG5cdCY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuXHRcdCR7dGh1bWJ9O1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke3B4VG9SZW0oMTIpfTtcblx0XHRoZWlnaHQ6ICR7cHhUb1JlbSgxMil9O1xuXHRcdG1hcmdpbjogJHtweFRvUmVtKC02KX07XG5cdFx0YmFja2dyb3VuZDogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"));

const RangeKnob = /*#__PURE__*/forwardRef((_a, inputRef) => {
  var {
    onChange,
    defaultValue = 0,
    value: controlledValue,
    min = 0,
    max = 100,
    step = 1
  } = _a,
      props = __rest(_a, ["onChange", "defaultValue", "value", "min", "max", "step"]);

  const ref = useRef(null);
  const [value, setValue] = useState(defaultValue);
  const [down, setDown] = useState(false);
  const [rect, setRect] = useState({
    left: 0,
    top: 0,
    width: 0
  });
  const range = max - min;
  const handleStart = useCallback(({
    pageX,
    pageY
  }) => {
    if (ref.current) {
      const {
        left,
        top,
        width
      } = ref.current.getBoundingClientRect();
      const x = pageX - window.scrollX - left;
      const y = pageY - window.scrollY - top;
      const newValue = Math.round((getDeg({
        x,
        y
      }, width / 2) / 360 * range + min) / step) * step;
      setRect({
        top,
        left,
        width
      });
      setDown(true);
      setValue(newValue);

      if (onChange) {
        onChange(newValue);
      }
    }
  }, [onChange, ref, range, min, step]);
  useEffect(() => {
    const subscribe = () => {
      const handleMove = ({
        pageX,
        pageY
      }) => {
        if (down) {
          const x = pageX - window.scrollX - rect.left;
          const y = pageY - window.scrollY - rect.top;
          const newValue = Math.round((getDeg({
            x,
            y
          }, rect.width / 2) / 360 * range + min) / step) * step;
          setValue(newValue);

          if (onChange) {
            onChange(newValue);
          }
        }
      };

      const handleEnd = () => {
        setDown(false);
      };

      document.addEventListener("mousemove", handleMove, {
        passive: true
      });
      document.addEventListener("mouseup", handleEnd);
      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
      };
    };

    return subscribe();
  }, [onChange, rect, down, range, min, step]);
  const handleChange = useCallback(event_ => {
    const newValue = Number.parseFloat(event_.target.value);
    const moduloValue = newValue <= min ? (newValue + range) % range + min : clamp(newValue % range + min, max, min);
    setValue(moduloValue);

    if (onChange) {
      onChange(moduloValue);
    }
  }, [onChange, min, max, range]);
  return /*#__PURE__*/React.createElement(StyledInputWrapper, {
    ref: ref,
    onMouseDown: handleStart
  }, /*#__PURE__*/React.createElement(StyledRing, {
    style: {
      transform: `rotate3d(0,0,1,${Math.round((controlledValue !== null && controlledValue !== void 0 ? controlledValue : value) * (360 / range))}deg)`
    }
  }, /*#__PURE__*/React.createElement(StyledBubble, _extends({}, props, {
    ref: inputRef,
    type: "range",
    value: controlledValue !== null && controlledValue !== void 0 ? controlledValue : value,
    max: max,
    min: min - step,
    step: step,
    onChange: handleChange
  }))));
});

export { RangeKnob, StyledBubble, StyledInputWrapper, StyledRing };
