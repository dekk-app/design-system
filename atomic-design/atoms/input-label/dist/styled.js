/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/input-label
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('@emotion/styled/base');
var pxToRem = require('@dekk-ui/utils/px-to-rem');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

const StyledLabel = _styled__default['default']("label", process.env.NODE_ENV === "production" ? {
  target: "e11muo6q0"
} : {
  target: "e11muo6q0",
  label: "StyledLabel"
})("height:", pxToRem.pxToRem(20), ";font-size:", pxToRem.pxToRem(12), ";font-weight:500;line-height:", pxToRem.pxToRem(20), ";", ({
  fullWidth
}) => /*#__PURE__*/react.css("width:", fullWidth ? "100%" : "auto", ";margin:", pxToRem.pxToRem(fullWidth ? 8 : 6), " 0;" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledLabel;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRMEIiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQubGFiZWwgYFxuXHRoZWlnaHQ6ICR7cHhUb1JlbSgyMCl9O1xuXHRmb250LXNpemU6ICR7cHhUb1JlbSgxMil9O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRsaW5lLWhlaWdodDogJHtweFRvUmVtKDIwKX07XG5cdCR7KHsgZnVsbFdpZHRoIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7ZnVsbFdpZHRoID8gXCIxMDAlXCIgOiBcImF1dG9cIn07XG5cdFx0bWFyZ2luOiAke3B4VG9SZW0oZnVsbFdpZHRoID8gOCA6IDYpfSAwO1xuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHd0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQubGFiZWwgYFxuXHRoZWlnaHQ6ICR7cHhUb1JlbSgyMCl9O1xuXHRmb250LXNpemU6ICR7cHhUb1JlbSgxMil9O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRsaW5lLWhlaWdodDogJHtweFRvUmVtKDIwKX07XG5cdCR7KHsgZnVsbFdpZHRoIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7ZnVsbFdpZHRoID8gXCIxMDAlXCIgOiBcImF1dG9cIn07XG5cdFx0bWFyZ2luOiAke3B4VG9SZW0oZnVsbFdpZHRoID8gOCA6IDYpfSAwO1xuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"));

exports.StyledLabel = StyledLabel;
