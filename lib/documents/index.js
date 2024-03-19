/**
 * The full sample document module set.
 * 
 * This is probably more than you really need. 
 * The `default` set is probably fine for most tests.
 * If you really want **everything**, requiring this
 * module is the way to go.
 * 
 * **Note:**
 * 
 * For every *lowercase* property defined directly in this `module`,
 * there is an *uppercase* version as well.
 * 
 * So for example, the `default` property can also be
 * referenced as `DEFAULT`. 
 * 
 * @module @lumjs/html-xml/documents
 */

"use strict";

const exp = require('../exp');

/**
 * @see {@link module:@lumjs/html-xml/declarations}
 */
exports.declarations = require('../declarations');

/**
 * @see {@link module:@lumjs/html-xml/documents/default}
 */
exports.default = require('./default');

/**
 * @see {@link module:@lumjs/html-xml/documents/frameset}
 */
exports.frameset = require('./frameset');

/**
 * @see {@link module:@lumjs/html-xml/documents/doctypes}
 */
exports.doctypes = require('./doctypes');

/**
 * @see {@link module:@lumjs/html-xml/documents/xml}
 */
exports.xml = require('./xml');

// Export uppercase versions
exp.uc(exports);
