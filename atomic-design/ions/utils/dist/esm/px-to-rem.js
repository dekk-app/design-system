/*!
 * Copyright (c) Dekk
 * @author Gregor Adams
 * @license MIT
 * @name @dekk-ui/utils
 * @version 0.1.0
 * @see git+https://github.com/dekk-app/design-system.git
 */
import { rem } from '@dekk-ui/utils/rem';

const pxToRem = pixels => `${rem(pixels)}rem`;

export { pxToRem };
