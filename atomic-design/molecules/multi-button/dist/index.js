/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/multi-button
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _styled = require('@emotion/styled/base');
var pxToRem = require('@dekk-ui/utils/px-to-rem');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

const StyledMultiButton = _styled__default['default']("div", process.env.NODE_ENV === "production" ? {
  target: "e91c5ou0"
} : {
  target: "e91c5ou0",
  label: "StyledMultiButton"
})("display:inline-grid;grid-auto-columns:auto;grid-auto-flow:column;", ({
  theme,
  fullWidth,
  width
}) => /*#__PURE__*/react.css("width:", fullWidth ? "100%" : width || "auto", ";min-width:", pxToRem.pxToRem(theme.space.l), ";height:", pxToRem.pxToRem(theme.space.l), ";line-height:", pxToRem.pxToRem(theme.space.s), ";border-radius:", pxToRem.pxToRem(theme.radius.s), ";background:", theme.ui.fill["2"], ";color:", theme.ui.text["1"], ";border:1px solid ", theme.ui.outline["1"], ";" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledMultiButton;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPd0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkTXVsdGlCdXR0b24gPSBzdHlsZWQuZGl2IGBcblx0ZGlzcGxheTogaW5saW5lLWdyaWQ7XG5cdGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHQkeyh7IHRoZW1lLCBmdWxsV2lkdGgsIHdpZHRoIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7ZnVsbFdpZHRoID8gXCIxMDAlXCIgOiB3aWR0aCB8fCBcImF1dG9cIn07XG5cdFx0bWluLXdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdGhlaWdodDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRsaW5lLWhlaWdodDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLnVpLmZpbGxbXCIyXCJdfTtcblx0XHRjb2xvcjogJHt0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJHt0aGVtZS51aS5vdXRsaW5lW1wiMVwiXX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHNEMiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlscy9weC10by1yZW1cIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkTXVsdGlCdXR0b24gPSBzdHlsZWQuZGl2IGBcblx0ZGlzcGxheTogaW5saW5lLWdyaWQ7XG5cdGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHQkeyh7IHRoZW1lLCBmdWxsV2lkdGgsIHdpZHRoIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7ZnVsbFdpZHRoID8gXCIxMDAlXCIgOiB3aWR0aCB8fCBcImF1dG9cIn07XG5cdFx0bWluLXdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdGhlaWdodDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRsaW5lLWhlaWdodDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLnMpfTtcblx0XHRib3JkZXItcmFkaXVzOiAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3RoZW1lLnVpLmZpbGxbXCIyXCJdfTtcblx0XHRjb2xvcjogJHt0aGVtZS51aS50ZXh0W1wiMVwiXX07XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJHt0aGVtZS51aS5vdXRsaW5lW1wiMVwiXX07XG5cdGB9O1xuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"));

const MultiButton = ({
  children,
  width,
  fullWidth
}) => {
  return /*#__PURE__*/React__default['default'].createElement(StyledMultiButton, {
    width: width,
    fullWidth: fullWidth
  }, children);
};

exports.MultiButton = MultiButton;
exports.StyledMultiButton = StyledMultiButton;
