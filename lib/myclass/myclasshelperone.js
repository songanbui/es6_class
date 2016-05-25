'use strict';

/**
 * MyClassHelperOne class
 * Helper class for MyClass
 * @property {MyClass} myClass - an instance of MyClass
 */
class MyClassHelperOne {
  /**
   * Create a new MyClassHelperOne instance
   * {MyClass} myClass - an instance of MyClass
   */
  constructor(myClass) {
    this.myClass = myClass;
  }

  /**
   * Return sum of two param
   * @method
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {Number}
   * @example
   * // return 3
   * const myClass = new MyClass('foo', 'bar');
   * return myClass.myMethodOneOriginal(1, 2);
   */
  myMethod(one, two) {
    return one + two;
  }
}

exports = module.exports = MyClassHelperOne;
