/**
 * @fileoverview This is a class that tracks an element for user input on
 *   the client side.
 *   Requires:
 *   /shared/base.js
 * @author alvin.lin.dev@gmail.com (Alvin Lin)
 */

/**
 * Given an element, this class tracks all user input on that element.
 * @constructor
 * @param {Element} element The element to track user input on.
 */
function Input(element) {
  this.element = element;

  this.leftClick = false;
  this.rightClick = false;
  this.mouseCoords = [0, 0];

  this.keys = {};
}

/**
 * Factory method for an Input class.
 * @param {Element} element The element to track user input on.
 * @return {Input}
 */
Input.create = function(element) {
  // This attribute is necessary to allow the element to listen to key events
  // since the element is now selectable.
  element.setAttribute('tabindex', 1);
  var input = new Input(element);
  input.applyEventHandlers();
  return input;
};

/**
 * This method adds event listeners to the element that this class should
 * track.
 */
Input.prototype.applyEventHandlers = function() {
  this.element.addEventListener('mousedown', bind(this, this.onMouseDown));
  this.element.addEventListener('mouseup', bind(this, this.onMouseUp));
  this.element.addEventListener('mousemove', bind(this, this.onMouseMove));
  this.element.addEventListener('keyup', bind(this, this.onKeyUp));
  this.element.addEventListener('keydown', bind(this, this.onKeyDown));
};

/**
 * This method removes the added event listeners from the element that this
 * class should track.
 */
Input.prototype.removeEventHandlers = function() {
  this.element.removeEventListener('mousedown', bind(this, this.onMouseDown));
  this.element.removeEventListener('mouseup', bind(this, this.onMouseUp));
  this.element.removeEventListener('mousemove', bind(this, this.onMouseMove));
  this.element.removeEventListener('keyup', bind(this, this.onKeyUp));
  this.element.removeEventListener('keydown', bind(this, this.onKeyDown));
};

/**
 * This method is bound to the mousedown event of the element that this class
 * should track.
 * @param {Event} event The event passed to this function.
 */
Input.prototype.onMouseDown = function(event) {
  this.leftClick = event.which == 1;
  this.rightClick = event.which == 3;
};

/**
 * This method is bound to the mouseup event of the element that this class
 * should track.
 * @param {Event} event The event passed to this function.
 */
Input.prototype.onMouseUp = function(event) {
  this.leftClick = !(event.which == 1);
  this.rightClick = !(event.which == 3);
};

/**
 * This method is bound to the mousemove event of the element that this class
 * should track.
 * @param {Event} event The event passed to this function.
 */
Input.prototype.onMouseMove = function(event) {
  var boundingRect = this.element.getBoundingClientRect();
  this.mouseCoords = [event.pageX - boundingRect.left,
                      event.pageY - boundingRect.top];
};

/**
 * This method is bound to the keydown event of the element that this class
 * should track.
 * @param {Event} event The event passed to this function.
 */
Input.prototype.onKeyDown = function(event) {
  this.keys[event.keyCode] = true;
};

/**
 * This method is bound to the keyup event of the element that this class
 * should track.
 * @param {Event} event The event passed to this function.
 */
Input.prototype.onKeyUp = function(event) {
  this.keys[event.keyCode] = false;
};
