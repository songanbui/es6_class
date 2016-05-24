'use strict';

const myMethodOne = require('./mymethodone');
const myMethodTwo = require('./mymethodtwo');

/**
 * MyClassOne class
 * @class
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
  }

  /**
   * Return 0
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {Number} zero
   */
  myMethodZero(one, two) { // eslint-disable-line no-unused-vars
    return 0;
  }

  /**
   * Return sum of two param
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {Number}
   */
  get myMethodOne() {
    return myMethodOne;
  }

  /**
   * Return class property myString (standard method)
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {String}
   */
  getMyString(one, two) { // eslint-disable-line no-unused-vars
    return this.myString;
  }

  /**
   * Return class property myString (standard method in another file)
   * @param {Number} one - a Number
   * @param {Number} two - another Number
   * @returns {Array}
   */
  get myMethodTwo() {
    // return myMethodTwo;  // Here, the MyClass properties will not be accessible.
    return myMethodTwo.bind(this); // Here, they will.
  }
}

// another way to assign methods to the class:
Object.assign(MyClass.prototype, {
  myMethodOneBis: myMethodOne,
  myMethodTwoBis: myMethodTwo.bind(this),
});


/**
 * @typedef {Object} Foobar
 * @property {String} one - a String
 * @property {String} two - another String
 */

exports = module.exports = MyClass;
