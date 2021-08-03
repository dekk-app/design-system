/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/avatars
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { Avatar } from '@dekk-ui/avatar';
import { take } from '@dekk-ui/utils/take';
import React, { useMemo } from 'react';
import _styled from '@emotion/styled/base';
import { StyledAvatarWrapper } from '@dekk-ui/avatar/styled';
import { pxToRem } from '@dekk-ui/utils/px-to-rem';

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

const StyledAvatars = _styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1tke6230"
} : {
  target: "e1tke6230",
  label: "StyledAvatars"
})("display:inline-grid;grid-auto-flow:dense;grid-column-gap:0;grid-template-columns:repeat(4, ", pxToRem(20), ");", StyledAvatarWrapper, "{&:nth-last-child(1){grid-column:1;}&:nth-last-child(2){grid-column:2;}&:nth-last-child(3){grid-column:3;}&:nth-last-child(4){grid-column:4;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHd0MiLCJmaWxlIjoic3R5bGVkLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkQXZhdGFyV3JhcHBlciB9IGZyb20gXCJAZGVray11aS9hdmF0YXIvc3R5bGVkXCI7XG5pbXBvcnQgeyBweFRvUmVtIH0gZnJvbSBcIkBkZWtrLXVpL3V0aWxzL3B4LXRvLXJlbVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5leHBvcnQgY29uc3QgU3R5bGVkQXZhdGFycyA9IHN0eWxlZC5kaXYgYFxuXHRkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcblx0Z3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuXHRncmlkLWNvbHVtbi1nYXA6IDA7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsICR7cHhUb1JlbSgyMCl9KTtcblxuXHQke1N0eWxlZEF2YXRhcldyYXBwZXJ9IHtcblx0XHQmOm50aC1sYXN0LWNoaWxkKDEpIHtcblx0XHRcdGdyaWQtY29sdW1uOiAxO1xuXHRcdH1cblx0XHQmOm50aC1sYXN0LWNoaWxkKDIpIHtcblx0XHRcdGdyaWQtY29sdW1uOiAyO1xuXHRcdH1cblx0XHQmOm50aC1sYXN0LWNoaWxkKDMpIHtcblx0XHRcdGdyaWQtY29sdW1uOiAzO1xuXHRcdH1cblx0XHQmOm50aC1sYXN0LWNoaWxkKDQpIHtcblx0XHRcdGdyaWQtY29sdW1uOiA0O1xuXHRcdH1cblx0fVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC5qcy5tYXAiXX0= */"));

const Avatars = _a => {
  var {
    people
  } = _a,
      props = __rest(_a, ["people"]);

  const more = people.length > 4;
  const maxPeople = useMemo(() => more ? take(people, 3) : people, [people, more]);
  return /*#__PURE__*/React.createElement(StyledAvatars, props, maxPeople.map(user => {
    return /*#__PURE__*/React.createElement(Avatar, {
      key: user.id,
      src: user.avatar,
      alt: user.name
    });
  }), more && /*#__PURE__*/React.createElement(Avatar, null, "+5"));
};

export { Avatars, StyledAvatars };
