/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/design-tokens
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { createToken } from '@dekk-ui/create-token';

var Space;

(function (Space) {
  Space[Space["xxs"] = 4] = "xxs";
  Space[Space["xs"] = 8] = "xs";
  Space[Space["s"] = 16] = "s";
  Space[Space["m"] = 24] = "m";
  Space[Space["l"] = 32] = "l";
  Space[Space["xl"] = 48] = "xl";
  Space[Space["xxl"] = 96] = "xxl";
})(Space || (Space = {}));

const xxs = createToken("Space XXS", Space.xxs, "Space XXS");
const xs = createToken("Space XS", Space.xs, "Space XS");
const s = createToken("Space S", Space.s, "Space S");
const m = createToken("Space M", Space.m, "Space M");
const l = createToken("Space L", Space.l, "Space L");
const xl = createToken("Space XL", Space.xl, "Space XL");
const xxl = createToken("Space XXL", Space.xxl, "Space XXL");

export { Space, l, m, s, xl, xs, xxl, xxs };
