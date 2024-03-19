/**
 * Common declarations and sample documents for tests involving HTML or XML.
 * 
 * This module is the full set of every sub-module in the package.
 * You can also `require()` just the sub-modules you need.
 * 
 * **Note:**
 * 
 * For every *lowercase* property defined directly in this `module`,
 * there is an *uppercase* version as well.
 * 
 * So for example, the `declarations` property can also be
 * referenced as `DECLARATIONS`. 
 * 
 * @module @lumjs/html-xml
 */

"use strict";

const exp = require('./exp');

/**
 * @see {@link module:@lumjs/html-xml/declarations}
 */
exports.declarations = require('./declarations');

/**
 * @see {@link module:@lumjs/html-xml/documents}
 */
exports.documents = require('./documents');

// Export uppercase versions
exp.uc(exports);
