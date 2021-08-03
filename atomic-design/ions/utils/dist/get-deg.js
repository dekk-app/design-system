/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/utils
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getDeg = (pointer, center) => {
  const x = pointer.x - center;
  const y = pointer.y - center;
  let deg = Math.atan(y / x) * 180 / Math.PI;
  deg += x < 0 && y >= 0 || x < 0 && y < 0 ? 270 : 90;
  return deg;
};

exports.getDeg = getDeg;
