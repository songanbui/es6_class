'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const MyClass = require('../../lib/myClass/index');
const argOne = 'foo';
const argTwo = 'bar';
const myClassInstance = new MyClass(argOne, argTwo); // should actually be mocked

const myMethodTwo = require('../../lib/myClass/mymethodtwo').bind(myClassInstance);
const paramOne = 1;
const paramTwo = 2;

describe('MyClass - myMethodTwo', () => {
  it('should return myClassInstance.myArray', function() {
    expect(myMethodTwo(paramOne, paramTwo)).to.be.equal(myClassInstance.myString);
  });
});
