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

const white = createToken.createToken("White", "rgb(255, 255, 255)", "White");
const black = createToken.createToken("Black", "rgb(0, 0, 0)", "Black"); // Brand Colors

const primary = createToken.createToken("Primary", "rgb(106, 40, 234)", "Primary Brand Color");
const primaryDark = createToken.createToken("Primary Dark", "rgb(79, 19, 194)", "Primary Dark Brand Color");
const lightest = createToken.createToken("Lightest", white.value, "Lightest Brand Color");
const darkest = createToken.createToken("Darkest", "rgb(35, 36, 36)", "Darkest Brand Color"); // Text Colors

const lightText1 = createToken.createToken("Light Text 1", black.value, "Light Mode Text Color 1");
const darkText1 = createToken.createToken("Dark Text 1", white.value, "Dark Mode Text Color 1"); // Outline Colors

const lightOutline1 = createToken.createToken("Light Outline 1", "rgb(238, 238, 238)", "Light Mode Outline Color 1");
const darkOutline1 = createToken.createToken("Dark Outline 1", "rgb(42, 42, 42)", "Dark Mode Outline Color 1"); // Fill Colors

const lightFill1 = createToken.createToken("Light Fill 1", "rgb(248, 249, 253)", "Light Mode Fill Color 1");
const darkFill1 = createToken.createToken("Dark Fill 1", "rgb(51, 51, 51)", "Dark Mode Fill Color 1");
const lightFill2 = createToken.createToken("Light Fill 2", "rgb(247, 247, 248)", "Light Mode Fill Color 2");
const darkFill2 = createToken.createToken("Dark Fill 2", "rgb(29, 29, 29)", "Dark Mode Fill Color 2");
const lightFill3 = createToken.createToken("Light Fill 3", "rgb(153, 153, 153)", "Light Mode Fill Color 3");
const darkFill3 = createToken.createToken("Dark Fill 3", "rgb(90, 90, 90)", "Dark Mode Fill Color 3");
const lightFill4 = createToken.createToken("Light Fill 4", "rgb(27, 30, 43)", "Light Mode Fill Color 4");
const darkFill4 = createToken.createToken("Dark Fill 4", white.value, "Dark Mode Fill Color 4");

exports.black = black;
exports.darkFill1 = darkFill1;
exports.darkFill2 = darkFill2;
exports.darkFill3 = darkFill3;
exports.darkFill4 = darkFill4;
exports.darkOutline1 = darkOutline1;
exports.darkText1 = darkText1;
exports.darkest = darkest;
exports.lightFill1 = lightFill1;
exports.lightFill2 = lightFill2;
exports.lightFill3 = lightFill3;
exports.lightFill4 = lightFill4;
exports.lightOutline1 = lightOutline1;
exports.lightText1 = lightText1;
exports.lightest = lightest;
exports.primary = primary;
exports.primaryDark = primaryDark;
exports.white = white;
