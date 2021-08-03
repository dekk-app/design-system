/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/create-token
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
const createToken = (name, value, description) => {
  return {
    description,
    name,
    value
  };
};
const createCSSToken = (value, namespace, name) => {
  const propertyName = `--${namespace}--${name}`;
  return {
    token: `var(${propertyName})`,
    propertyName,
    value
  };
};

export { createCSSToken, createToken };
