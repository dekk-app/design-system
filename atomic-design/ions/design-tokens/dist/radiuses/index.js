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

exports.Radius = void 0;

(function (Radius) {
  Radius[Radius["s"] = 4] = "s";
})(exports.Radius || (exports.Radius = {}));

const s = createToken.createToken("Radius S", exports.Radius.s, "Radius S");

exports.s = s;
