/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/fieldset-row
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import _styled from '@emotion/styled/base';
import { pxToRem } from '@dekk-ui/utils';
import { css } from '@emotion/react';

const StyledFieldsetRow = _styled("fieldset", process.env.NODE_ENV === "production" ? {
  target: "e2mr3yv0"
} : {
  target: "e2mr3yv0",
  label: "StyledFieldsetRow"
})("display:inline-grid;justify-content:stretch;justify-items:center;margin:0;padding:0;border:0;>:first-of-type{justify-self:start;}>:last-child{justify-self:end;}", ({
  column,
  columns,
  gap,
  fullWidth
}) => /*#__PURE__*/css("width:", fullWidth ? "100%" : "auto", ";max-width:100%;grid-auto-columns:", column !== null && column !== void 0 ? column : "initial", ";grid-auto-flow:", column ? "column" : "initial", ";grid-column-gap:", gap !== null && gap !== void 0 ? gap : pxToRem(8), ";grid-template-columns:", columns !== null && columns !== void 0 ? columns : "initial", ";" + (process.env.NODE_ENV === "production" ? "" : ";label:StyledFieldsetRow;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdEIiwiZmlsZSI6InN0eWxlZC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB4VG9SZW0gfSBmcm9tIFwiQGRla2stdWkvdXRpbHNcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkRmllbGRzZXRSb3cgPSBzdHlsZWQuZmllbGRzZXQgYFxuXHRkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcblx0anVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXG5cdD4gOmZpcnN0LW9mLXR5cGUge1xuXHRcdGp1c3RpZnktc2VsZjogc3RhcnQ7XG5cdH1cblxuXHQ+IDpsYXN0LWNoaWxkIHtcblx0XHRqdXN0aWZ5LXNlbGY6IGVuZDtcblx0fVxuXG5cdCR7KHsgY29sdW1uLCBjb2x1bW5zLCBnYXAsIGZ1bGxXaWR0aCB9KSA9PiBjc3MgYFxuXHRcdHdpZHRoOiAke2Z1bGxXaWR0aCA/IFwiMTAwJVwiIDogXCJhdXRvXCJ9O1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRncmlkLWF1dG8tY29sdW1uczogJHtjb2x1bW4gIT09IG51bGwgJiYgY29sdW1uICE9PSB2b2lkIDAgPyBjb2x1bW4gOiBcImluaXRpYWxcIn07XG5cdFx0Z3JpZC1hdXRvLWZsb3c6ICR7Y29sdW1uID8gXCJjb2x1bW5cIiA6IFwiaW5pdGlhbFwifTtcblx0XHRncmlkLWNvbHVtbi1nYXA6ICR7Z2FwICE9PSBudWxsICYmIGdhcCAhPT0gdm9pZCAwID8gZ2FwIDogcHhUb1JlbSg4KX07XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke2NvbHVtbnMgIT09IG51bGwgJiYgY29sdW1ucyAhPT0gdm9pZCAwID8gY29sdW1ucyA6IFwiaW5pdGlhbFwifTtcblx0YH07XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLmpzLm1hcCJdfQ== */"), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHaUQiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gXCJAZGVray11aS91dGlsc1wiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmV4cG9ydCBjb25zdCBTdHlsZWRGaWVsZHNldFJvdyA9IHN0eWxlZC5maWVsZHNldCBgXG5cdGRpc3BsYXk6IGlubGluZS1ncmlkO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cblx0PiA6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0anVzdGlmeS1zZWxmOiBzdGFydDtcblx0fVxuXG5cdD4gOmxhc3QtY2hpbGQge1xuXHRcdGp1c3RpZnktc2VsZjogZW5kO1xuXHR9XG5cblx0JHsoeyBjb2x1bW4sIGNvbHVtbnMsIGdhcCwgZnVsbFdpZHRoIH0pID0+IGNzcyBgXG5cdFx0d2lkdGg6ICR7ZnVsbFdpZHRoID8gXCIxMDAlXCIgOiBcImF1dG9cIn07XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdGdyaWQtYXV0by1jb2x1bW5zOiAke2NvbHVtbiAhPT0gbnVsbCAmJiBjb2x1bW4gIT09IHZvaWQgMCA/IGNvbHVtbiA6IFwiaW5pdGlhbFwifTtcblx0XHRncmlkLWF1dG8tZmxvdzogJHtjb2x1bW4gPyBcImNvbHVtblwiIDogXCJpbml0aWFsXCJ9O1xuXHRcdGdyaWQtY29sdW1uLWdhcDogJHtnYXAgIT09IG51bGwgJiYgZ2FwICE9PSB2b2lkIDAgPyBnYXAgOiBweFRvUmVtKDgpfTtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7Y29sdW1ucyAhPT0gbnVsbCAmJiBjb2x1bW5zICE9PSB2b2lkIDAgPyBjb2x1bW5zIDogXCJpbml0aWFsXCJ9O1xuXHRgfTtcbmA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQuanMubWFwIl19 */"));

export { StyledFieldsetRow };
