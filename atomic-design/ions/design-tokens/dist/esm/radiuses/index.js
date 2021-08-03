/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/design-tokens
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { createToken } from '@dekk-ui/create-token';

var Radius;

(function (Radius) {
  Radius[Radius["s"] = 4] = "s";
})(Radius || (Radius = {}));

const s = createToken("Radius S", Radius.s, "Radius S");

export { Radius, s };
