/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/design-tokens
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createToken = require('@dekk-ui/create-token');

exports.Space = void 0;

(function (Space) {
  Space[Space["xxs"] = 4] = "xxs";
  Space[Space["xs"] = 8] = "xs";
  Space[Space["s"] = 16] = "s";
  Space[Space["m"] = 24] = "m";
  Space[Space["l"] = 32] = "l";
  Space[Space["xl"] = 48] = "xl";
  Space[Space["xxl"] = 96] = "xxl";
})(exports.Space || (exports.Space = {}));

const xxs = createToken.createToken("Space XXS", exports.Space.xxs, "Space XXS");
const xs = createToken.createToken("Space XS", exports.Space.xs, "Space XS");
const s = createToken.createToken("Space S", exports.Space.s, "Space S");
const m = createToken.createToken("Space M", exports.Space.m, "Space M");
const l = createToken.createToken("Space L", exports.Space.l, "Space L");
const xl = createToken.createToken("Space XL", exports.Space.xl, "Space XL");
const xxl = createToken.createToken("Space XXL", exports.Space.xxl, "Space XXL");

exports.l = l;
exports.m = m;
exports.s = s;
exports.xl = xl;
exports.xs = xs;
exports.xxl = xxl;
exports.xxs = xxs;
