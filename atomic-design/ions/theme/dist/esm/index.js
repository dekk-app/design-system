/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/theme
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { primary, primaryDark, lightest, darkest, darkText1, lightText1, darkOutline1, darkFill1, darkFill2, darkFill3, darkFill4, lightOutline1, lightFill1, lightFill2, lightFill3, lightFill4 } from '@dekk-ui/design-tokens/colors';
import * as radius from '@dekk-ui/design-tokens/radiuses';
import * as space from '@dekk-ui/design-tokens/spaces';

const base = {
  space: {
    xxs: space.xxs.value,
    xs: space.xs.value,
    s: space.s.value,
    m: space.m.value,
    l: space.l.value,
    xl: space.xl.value,
    xxl: space.xxl.value
  },
  radius: {
    s: radius.s.value
  },
  ci: {
    colors: {
      primary: primary.value,
      primaryDark: primaryDark.value,
      lightest: lightest.value,
      darkest: darkest.value
    }
  }
};

const dark = Object.assign(Object.assign({}, base), {
  ui: {
    colors: {
      primary: primary.value,
      lightest: lightest.value,
      darkest: darkest.value
    },
    background: {
      "1": darkest.value,
      "2": lightest.value
    },
    text: {
      "1": darkText1.value,
      "2": lightText1.value
    },
    outline: {
      "1": darkOutline1.value
    },
    fill: {
      "1": darkFill1.value,
      "2": darkFill2.value,
      "3": darkFill3.value,
      "4": darkFill4.value
    }
  }
});

const light = Object.assign(Object.assign({}, base), {
  ui: {
    colors: {
      primary: primary.value,
      lightest: lightest.value,
      darkest: darkest.value
    },
    background: {
      "1": lightest.value,
      "2": darkest.value
    },
    text: {
      "1": lightText1.value,
      "2": darkText1.value
    },
    outline: {
      "1": lightOutline1.value
    },
    fill: {
      "1": lightFill1.value,
      "2": lightFill2.value,
      "3": lightFill3.value,
      "4": lightFill4.value
    }
  }
});

export { dark, light };
