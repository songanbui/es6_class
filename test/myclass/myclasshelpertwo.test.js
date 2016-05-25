'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const MyClass = require('../../lib/myClass/index');
const argOne = 'foo';
const argTwo = 'bar';
const myClassInstance = new MyClass(argOne, argTwo); // should actually be mocked

const MyClassHelperTwo = require('../../lib/myClass/myclasshelpertwo');
const myClassHelperTwoInstance = new MyClassHelperTwo(myClassInstance);
const paramOne = 1;
const paramTwo = 2;

describe('MyClassHelperTwo - constructor', () => {
  it('should return a new MyClassHelperTwo instance', () => {
    expect(myClassHelperTwoInstance).to.be.an.instanceOf(MyClassHelperTwo);
  });

  it('should have property myClass', () => {
    expect(myClassHelperTwoInstance).to.have.property('myClass', myClassInstance);
  });
});

describe('MyClassHelperTwo - myMethod', () => {
  it('should return myClassInstance.myArray', function() {
    expect(myClassHelperTwoInstance.myMethod(paramOne, paramTwo)).to.be.equal(myClassInstance.myString);
  });
});
