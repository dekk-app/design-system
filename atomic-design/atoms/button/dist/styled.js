/*!
 * Copyright (c) Dekk
 * @author undefined
 * @license MIT
 * @name @dekk-ui/button
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('@emotion/styled/base');
var utils = require('@dekk-ui/utils');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

const StyledButton = _styled__default['default']("button", process.env.NODE_ENV === "production" ? {
  target: "ewyau9s0"
} : {
  target: "ewyau9s0",
  label: "StyledButton"
})("display:inline-flex;align-content:center;align-items:center;justify-content:center;margin:0;border:0;&:focus{outline:0;}", ({
  theme,
  isSelected
}) => /*#__PURE__*/react.css("padding:", utils.pxToRem(theme.space.xs), " ", utils.pxToRem(theme.space.s), ";background:", isSelected ? theme.ci.colors.primaryDark : theme.ui.colors.primary, ";color:", theme.ui.colors.lightest, ";border-radius:", utils.pxToRem(theme.radius.s), ";&:hover{background:", isSelected ? theme.ui.colors.primary : theme.ci.colors.primaryDark, ";}&:focus-visible{background:", isSelected ? theme.ci.colors.primaryDark : theme.ui.colors.primary, ";box-shadow:", isSelected ? `inset 0 0 0 1px ${theme.ci.colors.primaryDark}, inset  0 0 0 2px ${theme.ui.fill["2"]}` : `inset 0 0 0 1px ${theme.ui.colors.primary}, inset  0 0 0 2px ${theme.ui.fill["2"]}`, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledButton;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlsc1wiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IDA7XG5cdH1cblxuXHQkeyh7IHRoZW1lLCBpc1NlbGVjdGVkIH0pID0+IGNzcyBgXG5cdFx0cGFkZGluZzogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnhzKX0gJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmsgOiB0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0Y29sb3I6ICR7dGhlbWUudWkuY29sb3JzLmxpZ2h0ZXN0fTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmt9O1xuXHRcdH1cblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmsgOiB0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3gtc2hhZG93OiAke2lzU2VsZWN0ZWRcbiAgICA/IGBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmt9LCBpbnNldCAgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjJcIl19YFxuICAgIDogYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fSwgaW5zZXQgIDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbXCIyXCJdfWB9O1xuXHRcdH1cblx0YH07XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEMiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlsc1wiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uIGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IDA7XG5cdH1cblxuXHQkeyh7IHRoZW1lLCBpc1NlbGVjdGVkIH0pID0+IGNzcyBgXG5cdFx0cGFkZGluZzogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnhzKX0gJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmsgOiB0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0Y29sb3I6ICR7dGhlbWUudWkuY29sb3JzLmxpZ2h0ZXN0fTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtpc1NlbGVjdGVkID8gdGhlbWUudWkuY29sb3JzLnByaW1hcnkgOiB0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmt9O1xuXHRcdH1cblxuXHRcdCY6Zm9jdXMtdmlzaWJsZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2lzU2VsZWN0ZWQgPyB0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmsgOiB0aGVtZS51aS5jb2xvcnMucHJpbWFyeX07XG5cdFx0XHRib3gtc2hhZG93OiAke2lzU2VsZWN0ZWRcbiAgICA/IGBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS5jaS5jb2xvcnMucHJpbWFyeURhcmt9LCBpbnNldCAgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjJcIl19YFxuICAgIDogYGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fSwgaW5zZXQgIDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbXCIyXCJdfWB9O1xuXHRcdH1cblx0YH07XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"));

exports.StyledButton = StyledButton;
