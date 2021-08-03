/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/color-input-field
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import _styled from '@emotion/styled/base';
import { StyledInput } from '@dekk-ui/input-field';
import { pxToRem } from '@dekk-ui/utils/px-to-rem';
import { css } from '@emotion/react';

const StyledColorInput = /*#__PURE__*/_styled(StyledInput, process.env.NODE_ENV === "production" ? {
  target: "elom7ma0"
} : {
  target: "elom7ma0",
  label: "StyledColorInput"
})("&[type=\"color\"]{padding:0;", ({
  theme
}) => /*#__PURE__*/css("width:", pxToRem(theme.space.l), ";border-radius:0 ", pxToRem(theme.radius.s), " ", pxToRem(theme.radius.s), " 0;&::-webkit-color-swatch{border-radius:0 ", pxToRem(theme.radius.s), " ", pxToRem(theme.radius.s), " 0;box-shadow:inset 0 0 0 1px ", theme.ui.outline["1"], ";}&::-moz-color-swatch{border-radius:0 ", pxToRem(theme.radius.s), " ", pxToRem(theme.radius.s), " 0;box-shadow:inset 0 0 0 1px ", theme.ui.outline["1"], ";}&:focus-visible{&::-webkit-color-swatch{box-shadow:inset 0 0 0 1px ", theme.ui.colors.primary, ",inset 0 0 0 2px ", theme.ui.fill["1"], ";}&::-moz-color-swatch{box-shadow:inset 0 0 0 1px ", theme.ui.colors.primary, ",inset 0 0 0 2px ", theme.ui.fill["1"], ";}}" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledColorInput;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlZElucHV0IH0gZnJvbSBcIkBkZWtrLXVpL2lucHV0LWZpZWxkXCI7XG5pbXBvcnQgeyBweFRvUmVtIH0gZnJvbSBcIkBkZWtrLXVpL3V0aWxzL3B4LXRvLXJlbVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmV4cG9ydCBjb25zdCBTdHlsZWRDb2xvcklucHV0ID0gc3R5bGVkKFN0eWxlZElucHV0KSBgXG5cdCZbdHlwZT1cImNvbG9yXCJdIHtcblx0XHRwYWRkaW5nOiAwO1xuXG5cdFx0Jjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdGJvcmRlcjogMDtcblx0XHR9XG5cblx0XHQmOjotbW96LWNvbG9yLXN3YXRjaCB7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym9yZGVyOiAwO1xuXHRcdH1cblxuXHRcdCY6Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHR9XG5cblx0XHQkeyh7IHRoZW1lIH0pID0+IGNzcyBgXG5cdFx0XHR3aWR0aDogJHtweFRvUmVtKHRoZW1lLnNwYWNlLmwpfTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAgJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX0gJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX0gMDtcblxuXHRcdFx0Jjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9IDA7XG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLm91dGxpbmVbXCIxXCJdfTtcblx0XHRcdH1cblxuXHRcdFx0Jjo6LW1vei1jb2xvci1zd2F0Y2gge1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9ICR7cHhUb1JlbSh0aGVtZS5yYWRpdXMucyl9IDA7XG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLm91dGxpbmVbXCIxXCJdfTtcblx0XHRcdH1cblxuXHRcdFx0Jjpmb2N1cy12aXNpYmxlIHtcblx0XHRcdFx0Jjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fSxcblx0XHRcdFx0XHRcdGluc2V0IDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbXCIxXCJdfTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6Oi1tb3otY29sb3Itc3dhdGNoIHtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJHt0aGVtZS51aS5jb2xvcnMucHJpbWFyeX0sXG5cdFx0XHRcdFx0XHRpbnNldCAwIDAgMCAycHggJHt0aGVtZS51aS5maWxsW1wiMVwiXX07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgfTtcblx0fVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"), ";&::-webkit-color-swatch{overflow:hidden;border:0;}&::-moz-color-swatch{overflow:hidden;border:0;}&::-webkit-color-swatch-wrapper{padding:0;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0QiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkSW5wdXQgfSBmcm9tIFwiQGRla2stdWkvaW5wdXQtZmllbGRcIjtcbmltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHMvcHgtdG8tcmVtXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuZXhwb3J0IGNvbnN0IFN0eWxlZENvbG9ySW5wdXQgPSBzdHlsZWQoU3R5bGVkSW5wdXQpIGBcblx0Jlt0eXBlPVwiY29sb3JcIl0ge1xuXHRcdHBhZGRpbmc6IDA7XG5cblx0XHQmOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym9yZGVyOiAwO1xuXHRcdH1cblxuXHRcdCY6Oi1tb3otY29sb3Itc3dhdGNoIHtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3JkZXI6IDA7XG5cdFx0fVxuXG5cdFx0Jjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdH1cblxuXHRcdCR7KHsgdGhlbWUgfSkgPT4gY3NzIGBcblx0XHRcdHdpZHRoOiAke3B4VG9SZW0odGhlbWUuc3BhY2UubCl9O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMCAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfSAke3B4VG9SZW0odGhlbWUucmFkaXVzLnMpfSAwO1xuXG5cdFx0XHQmOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAgJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX0gJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX0gMDtcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkub3V0bGluZVtcIjFcIl19O1xuXHRcdFx0fVxuXG5cdFx0XHQmOjotbW96LWNvbG9yLXN3YXRjaCB7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAgJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX0gJHtweFRvUmVtKHRoZW1lLnJhZGl1cy5zKX0gMDtcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkub3V0bGluZVtcIjFcIl19O1xuXHRcdFx0fVxuXG5cdFx0XHQmOmZvY3VzLXZpc2libGUge1xuXHRcdFx0XHQmOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICR7dGhlbWUudWkuY29sb3JzLnByaW1hcnl9LFxuXHRcdFx0XHRcdFx0aW5zZXQgMCAwIDAgMnB4ICR7dGhlbWUudWkuZmlsbFtcIjFcIl19O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6LW1vei1jb2xvci1zd2F0Y2gge1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAke3RoZW1lLnVpLmNvbG9ycy5wcmltYXJ5fSxcblx0XHRcdFx0XHRcdGluc2V0IDAgMCAwIDJweCAke3RoZW1lLnVpLmZpbGxbXCIxXCJdfTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGB9O1xuXHR9XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"));

export { StyledColorInput };