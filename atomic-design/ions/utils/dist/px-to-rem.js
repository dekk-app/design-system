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

var rem = require('@dekk-ui/utils/rem');

const pxToRem = pixels => `${rem.rem(pixels)}rem`;

exports.pxToRem = pxToRem;
