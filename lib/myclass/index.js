'use strict';

const myMethodOne = require('./mymethodone');
const myMethodTwo = require('./mymethodtwo');

/**
 * MyClass class
 * @property {String} myString - a String
 * @property {Array<String>} myArray - an Array of String
 * @property {Foobar} myFoobar - a Foobar object
 */
class MyClass {
  /**
   * Create a new MyClass instance
   * @param {String} one - a String
   * @param {String} two - another String
   */
  constructor(one, two) {
    this.myString = one;
    this.myArray = [ one, two ];
    this.myFoobar = {
      one: one,
      two: two,
    };

    /**
     * Return class property myString
     * @method
     * @name myMethodTwo
     * @memberof MyClass
     * @instance
     * @param {Number} one - a Number
     * @param {Number} two - another Number
     * @returns {String}
     * @example
     * // return 'foo'
     * const myClass = new MyClass('foo', 'bar');
     * return myClass.myMethodTwo(1, 2);
     */
    this.myMethodTwo = myMethodTwo.bind(this);
  }

  /**
   * Return sum of two param (standard)
   * @method
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {Number}
   * @example
   * // return 3
   * const myClass = new MyClass('foo', 'bar');
   * return myClass.myMethodOneOriginal(1, 2);
   */
  myMethodOneOriginal(one, two) {
    return one + two;
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
   * return myClass.myMethodOne(1, 2);
   */
  get myMethodOne() {
    return myMethodOne;
  }

  /**
   * Return class property myString (standard)
   * @method
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {String}
   * @example
   * // return 'foo'
   * const myClass = new MyClass('foo', 'bar');
   * return myClass.myMethodTwoOriginal(1, 2);
   */
  myMethodTwoOriginal(one, two) { // eslint-disable-line no-unused-vars
    return this.myString;
  }
}

/**
 * @typedef {Object} Foobar
 * @property {String} one - a String
 * @property {String} two - another String
 */

exports = module.exports = MyClass;
