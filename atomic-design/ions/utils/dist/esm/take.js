/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/utils
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
const take = (array, n = 1) => {
  const a = [...array];
  return a.splice(0, n);
};

export { take };
