'use strict';

/**
 * MyClassHelperTwo class
 * Helper class for MyClass
 * @property {MyClass} myClass - an instance of MyClass
 */
class MyClassHelperTwo {
  /**
   * Create a new MyClassHelperTwo instance
   * {MyClass} myClass - an instance of MyClass
   */
  constructor(myClass) {
    this.myClass = myClass;
  }

  /**
   * Return class property myString
   * @method
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {String}
   * @example
   * // return 'foo'
   * const myClass = new MyClass('foo', 'bar');
   * return myClass.myMethodTwo(1, 2);
   */
  myMethod(one, two) { // eslint-disable-line no-unused-vars
    return this.myClass.myString;
  }
}

exports = module.exports = MyClassHelperTwo;
