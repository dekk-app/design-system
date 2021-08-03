/*!
 * Copyright (c) Dekk
 * @author Oliver Kühn
 * @license MIT
 * @name @dekk-ui/checkbox
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import React, { forwardRef, useState, useCallback } from 'react';
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
const StyledCheckboxWrapper = _styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1eedvug3"
} : {
  target: "e1eedvug3",
  label: "StyledCheckboxWrapper"
})("display:inline-block;position:relative;", ({
  theme
}) => /*#__PURE__*/css("min-width:", pxToRem(theme.space.s), ";min-height:", pxToRem(theme.space.s), ";border-radius:", pxToRem(theme.radius.s), ";" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledCheckboxWrapper;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNc0IiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkQ2hlY2tib3hXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0bWluLXdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdG1pbi1oZWlnaHQ6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5zKX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdGB9XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFN2ZyA9IHN0eWxlZC5zdmcgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdCR7KHsgdGhlbWUsIGhhc0JhY2tncm91bmQgfSkgPT4gY3NzIGBcblx0XHQtLWJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjFcIl19O1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdFx0YmFja2dyb3VuZDogJHsoaGFzQmFja2dyb3VuZCAmJiBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCIpIHx8IFwibm9uZVwifTtcblx0XHRjb2xvcjogJHt0aGVtZS51aS50ZXh0W1wiMlwiXX07XG5cdGB9XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94ID0gc3R5bGVkLmlucHV0IGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHdpZHRoOiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRoZWlnaHQ6IDEwMCU7IC8qIGNocm9taXVtICovXG5cdG1hcmdpbjogMDtcblxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cblx0XHRcdCsgJHtTdHlsZWRTdmd9IHtcblx0XHRcdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRcdH1cblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRQYXRoID0gc3R5bGVkLnBhdGggYFxuXHRzdHJva2Utd2lkdGg6IDEuNTtcblx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuXHRzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuXHRzdHJva2U6IGN1cnJlbnRDb2xvcjtcblx0ZmlsbDogbm9uZTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0QiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkQ2hlY2tib3hXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0bWluLXdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdG1pbi1oZWlnaHQ6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5zKX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdGB9XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFN2ZyA9IHN0eWxlZC5zdmcgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdCR7KHsgdGhlbWUsIGhhc0JhY2tncm91bmQgfSkgPT4gY3NzIGBcblx0XHQtLWJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjFcIl19O1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdFx0YmFja2dyb3VuZDogJHsoaGFzQmFja2dyb3VuZCAmJiBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCIpIHx8IFwibm9uZVwifTtcblx0XHRjb2xvcjogJHt0aGVtZS51aS50ZXh0W1wiMlwiXX07XG5cdGB9XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94ID0gc3R5bGVkLmlucHV0IGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHdpZHRoOiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRoZWlnaHQ6IDEwMCU7IC8qIGNocm9taXVtICovXG5cdG1hcmdpbjogMDtcblxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cblx0XHRcdCsgJHtTdHlsZWRTdmd9IHtcblx0XHRcdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRcdH1cblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRQYXRoID0gc3R5bGVkLnBhdGggYFxuXHRzdHJva2Utd2lkdGg6IDEuNTtcblx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuXHRzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuXHRzdHJva2U6IGN1cnJlbnRDb2xvcjtcblx0ZmlsbDogbm9uZTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"));
const StyledSvg = _styled("svg", process.env.NODE_ENV === "production" ? {
  target: "e1eedvug2"
} : {
  target: "e1eedvug2",
  label: "StyledSvg"
})("position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;", ({
  theme,
  hasBackground
}) => /*#__PURE__*/css("--background-color:", theme.ui.text["1"], ";border-radius:", pxToRem(theme.radius.s), ";background:", hasBackground && "var(--background-color)" || "none", ";color:", theme.ui.text["2"], ";" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledSvg;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRtaW4taGVpZ2h0OiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRTdmcgPSBzdHlsZWQuc3ZnIGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQkeyh7IHRoZW1lLCBoYXNCYWNrZ3JvdW5kIH0pID0+IGNzcyBgXG5cdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblxuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdGJhY2tncm91bmQ6ICR7KGhhc0JhY2tncm91bmQgJiYgXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiKSB8fCBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjJcIl19O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZC5pbnB1dCBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMTAwJTsgLyogY2hyb21pdW0gKi9cblx0aGVpZ2h0OiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRtYXJnaW46IDA7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cblx0XHQmOmZvY3VzLXZpc2libGUge1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9O1xuXG5cdFx0XHQrICR7U3R5bGVkU3ZnfSB7XG5cdFx0XHRcdC0tYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHR9XG5cdFx0fVxuXHRgfTtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0c3Ryb2tlLXdpZHRoOiAxLjU7XG5cdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcblx0c3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcblx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XG5cdGZpbGw6IG5vbmU7XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkQ2hlY2tib3hXcmFwcGVyID0gc3R5bGVkLmRpdiBgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0bWluLXdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdG1pbi1oZWlnaHQ6ICR7cHhUb1JlbSh0aGVtZS5zcGFjZS5zKX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdGB9XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZFN2ZyA9IHN0eWxlZC5zdmcgYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdCR7KHsgdGhlbWUsIGhhc0JhY2tncm91bmQgfSkgPT4gY3NzIGBcblx0XHQtLWJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjFcIl19O1xuXG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cdFx0YmFja2dyb3VuZDogJHsoaGFzQmFja2dyb3VuZCAmJiBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCIpIHx8IFwibm9uZVwifTtcblx0XHRjb2xvcjogJHt0aGVtZS51aS50ZXh0W1wiMlwiXX07XG5cdGB9XG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94ID0gc3R5bGVkLmlucHV0IGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHdpZHRoOiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRoZWlnaHQ6IDEwMCU7IC8qIGNocm9taXVtICovXG5cdG1hcmdpbjogMDtcblxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiAwO1xuXHR9XG5cblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cblx0XHRcdCsgJHtTdHlsZWRTdmd9IHtcblx0XHRcdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRcdH1cblx0XHR9XG5cdGB9O1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRQYXRoID0gc3R5bGVkLnBhdGggYFxuXHRzdHJva2Utd2lkdGg6IDEuNTtcblx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuXHRzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuXHRzdHJva2U6IGN1cnJlbnRDb2xvcjtcblx0ZmlsbDogbm9uZTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"));
const StyledCheckbox = _styled("input", process.env.NODE_ENV === "production" ? {
  target: "e1eedvug1"
} : {
  target: "e1eedvug1",
  label: "StyledCheckbox"
})("position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;appearance:none;width:100%;height:100%;margin:0;&:focus{outline:0;}", ({
  theme
}) => /*#__PURE__*/css("box-shadow:inset 0 0 0 1px ", theme.ui.text["1"], ";border-radius:", pxToRem(theme.radius.s), ";&:focus-visible{box-shadow:inset 0 0 0 1px ", theme.ui.colors.primary, ";+", StyledSvg, "{--background-color:", theme.ui.colors.primary, ";}}" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledCheckbox;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3NCIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRtaW4taGVpZ2h0OiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRTdmcgPSBzdHlsZWQuc3ZnIGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQkeyh7IHRoZW1lLCBoYXNCYWNrZ3JvdW5kIH0pID0+IGNzcyBgXG5cdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblxuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdGJhY2tncm91bmQ6ICR7KGhhc0JhY2tncm91bmQgJiYgXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiKSB8fCBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjJcIl19O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZC5pbnB1dCBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMTAwJTsgLyogY2hyb21pdW0gKi9cblx0aGVpZ2h0OiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRtYXJnaW46IDA7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cblx0XHQmOmZvY3VzLXZpc2libGUge1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9O1xuXG5cdFx0XHQrICR7U3R5bGVkU3ZnfSB7XG5cdFx0XHRcdC0tYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHR9XG5cdFx0fVxuXHRgfTtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0c3Ryb2tlLXdpZHRoOiAxLjU7XG5cdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcblx0c3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcblx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XG5cdGZpbGw6IG5vbmU7XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjJDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRtaW4taGVpZ2h0OiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRTdmcgPSBzdHlsZWQuc3ZnIGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQkeyh7IHRoZW1lLCBoYXNCYWNrZ3JvdW5kIH0pID0+IGNzcyBgXG5cdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblxuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdGJhY2tncm91bmQ6ICR7KGhhc0JhY2tncm91bmQgJiYgXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiKSB8fCBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjJcIl19O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZC5pbnB1dCBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMTAwJTsgLyogY2hyb21pdW0gKi9cblx0aGVpZ2h0OiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRtYXJnaW46IDA7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cblx0XHQmOmZvY3VzLXZpc2libGUge1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9O1xuXG5cdFx0XHQrICR7U3R5bGVkU3ZnfSB7XG5cdFx0XHRcdC0tYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHR9XG5cdFx0fVxuXHRgfTtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0c3Ryb2tlLXdpZHRoOiAxLjU7XG5cdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcblx0c3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcblx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XG5cdGZpbGw6IG5vbmU7XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"));
const StyledPath = _styled("path", process.env.NODE_ENV === "production" ? {
  target: "e1eedvug0"
} : {
  target: "e1eedvug0",
  label: "StyledPath"
})(process.env.NODE_ENV === "production" ? {
  name: "1asq4b4",
  styles: "stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke:currentColor;fill:none"
} : {
  name: "1asq4b4",
  styles: "stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke:currentColor;fill:none",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RHNDIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENoZWNrYm94V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0JHsoeyB0aGVtZSB9KSA9PiBjc3MgYFxuXHRcdG1pbi13aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRtaW4taGVpZ2h0OiAke3B4VG9SZW0odGhlbWUuc3BhY2Uucyl9O1xuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRTdmcgPSBzdHlsZWQuc3ZnIGBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQkeyh7IHRoZW1lLCBoYXNCYWNrZ3JvdW5kIH0pID0+IGNzcyBgXG5cdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnVpLnRleHRbXCIxXCJdfTtcblxuXHRcdGJvcmRlci1yYWRpdXM6ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9O1xuXHRcdGJhY2tncm91bmQ6ICR7KGhhc0JhY2tncm91bmQgJiYgXCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiKSB8fCBcIm5vbmVcIn07XG5cdFx0Y29sb3I6ICR7dGhlbWUudWkudGV4dFtcIjJcIl19O1xuXHRgfVxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZC5pbnB1dCBgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMTAwJTsgLyogY2hyb21pdW0gKi9cblx0aGVpZ2h0OiAxMDAlOyAvKiBjaHJvbWl1bSAqL1xuXHRtYXJnaW46IDA7XG5cblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogMDtcblx0fVxuXG5cdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX07XG5cblx0XHQmOmZvY3VzLXZpc2libGUge1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9O1xuXG5cdFx0XHQrICR7U3R5bGVkU3ZnfSB7XG5cdFx0XHRcdC0tYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHR9XG5cdFx0fVxuXHRgfTtcbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkUGF0aCA9IHN0eWxlZC5wYXRoIGBcblx0c3Ryb2tlLXdpZHRoOiAxLjU7XG5cdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcblx0c3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcblx0c3Ryb2tlOiBjdXJyZW50Q29sb3I7XG5cdGZpbGw6IG5vbmU7XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const display = flag => flag ? "block" : "none";

const Checkbox = /*#__PURE__*/forwardRef((_a, ref) => {
  var {
    className,
    checked: controlledChecked,
    indeterminate,
    onChange,
    style
  } = _a,
      props = __rest(_a, ["className", "checked", "indeterminate", "onChange", "style"]);

  const [isChecked, setIsChecked] = useState(!!controlledChecked);
  const handleChange = useCallback(event_ => {
    const {
      checked
    } = event_.target;
    setIsChecked(checked);
    onChange === null || onChange === void 0 ? void 0 : onChange(checked);
  }, [onChange]); // TODO: Set `indeterminate` property on Input-DOM-Element

  return /*#__PURE__*/React.createElement(StyledCheckboxWrapper, {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(StyledCheckbox, _extends({}, props, {
    ref: ref,
    type: "checkbox",
    checked: isChecked,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(StyledSvg, {
    hasBackground: isChecked || indeterminate,
    width: "100%",
    height: "100%",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement(StyledPath, {
    d: "m3.75 8.5 2.5 2.5 6-6",
    display: display(isChecked && !indeterminate)
  }), /*#__PURE__*/React.createElement(StyledPath, {
    d: "M4 8h8",
    display: display(indeterminate)
  })));
});

export { Checkbox, StyledCheckbox, StyledCheckboxWrapper, StyledPath, StyledSvg };
