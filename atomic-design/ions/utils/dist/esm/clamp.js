/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/utils
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
const clamp = (value, max, min = 0) => Math.min(max, Math.max(min, value));

export { clamp };
