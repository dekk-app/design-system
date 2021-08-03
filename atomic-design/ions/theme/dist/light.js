/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/theme
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var colors = require('@dekk-ui/design-tokens/colors');
var radius = require('@dekk-ui/design-tokens/radiuses');
var space = require('@dekk-ui/design-tokens/spaces');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var radius__namespace = /*#__PURE__*/_interopNamespace(radius);
var space__namespace = /*#__PURE__*/_interopNamespace(space);

const base = {
  space: {
    xxs: space__namespace.xxs.value,
    xs: space__namespace.xs.value,
    s: space__namespace.s.value,
    m: space__namespace.m.value,
    l: space__namespace.l.value,
    xl: space__namespace.xl.value,
    xxl: space__namespace.xxl.value
  },
  radius: {
    s: radius__namespace.s.value
  },
  ci: {
    colors: {
      primary: colors.primary.value,
      primaryDark: colors.primaryDark.value,
      lightest: colors.lightest.value,
      darkest: colors.darkest.value
    }
  }
};

const light = Object.assign(Object.assign({}, base), {
  ui: {
    colors: {
      primary: colors.primary.value,
      lightest: colors.lightest.value,
      darkest: colors.darkest.value
    },
    background: {
      "1": colors.lightest.value,
      "2": colors.darkest.value
    },
    text: {
      "1": colors.lightText1.value,
      "2": colors.darkText1.value
    },
    outline: {
      "1": colors.lightOutline1.value
    },
    fill: {
      "1": colors.lightFill1.value,
      "2": colors.lightFill2.value,
      "3": colors.lightFill3.value,
      "4": colors.lightFill4.value
    }
  }
});

exports.light = light;
