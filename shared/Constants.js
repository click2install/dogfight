/**
 * @fileoverview This class stores global constants between the client and
 *   server.
 * @author alvin.lin.dev@gmail.com (Alvin Lin)
 */

/**
 * Empty constructor for the Constants class.
 */
function Constants() {
  throw new Error('Constants should not be instantiated!');
}

/**
 * The world will always be a square, so there's no need for an x and y max.
 * All values are in pixels.
 */

/**
 * @const
 * @type {string}
 */
Constants.BIG_FUCKUP_ERROR = 'This should not happen! Tell Alvin immediately!';

/**
 * @const
 * @type {number}
 */
Constants.WORLD_MIN = 0;

/**
 * @const
 * @type {number}
 */
Constants.WORLD_MAX = 2500;

/**
 * @const
 * @type {type}
 */
Constants.PLAYER_WEAPON_STATE = {
  GUN: 0,
  MISSILE: 2
};

if (typeof module === 'object') {
  /**
   * If this is being imported on the server side, then we load this with
   * module.exports.
   */
  module.exports = Constants;
} else {
  /**
   * Otherwise, we load it into the global namespace.
   */
  window.Util = Constants;
}
