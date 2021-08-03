/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/utils
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { rem as rem$1 } from '@dekk-ui/utils/rem';

const clamp = (value, max, min = 0) => Math.min(max, Math.max(min, value));

const getDeg = (pointer, center) => {
  const x = pointer.x - center;
  const y = pointer.y - center;
  let deg = Math.atan(y / x) * 180 / Math.PI;
  deg += x < 0 && y >= 0 || x < 0 && y < 0 ? 270 : 90;
  return deg;
};

const pxToRem = pixels => `${rem$1(pixels)}rem`;

const range = (length, start = 0) => Array.from({
  length
}).map((x, index) => index + start);

const rem = (size, baseSize = 16) => size / baseSize;

const take = (array, n = 1) => {
  const a = [...array];
  return a.splice(0, n);
};

export { clamp, getDeg, pxToRem, range, rem, take };
