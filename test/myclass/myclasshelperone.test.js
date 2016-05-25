'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const MyClass = require('../../lib/myClass/index');
const argOne = 'foo';
const argTwo = 'bar';
const myClassInstance = new MyClass(argOne, argTwo); // should actually be mocked

const MyClassHelperOne = require('../../lib/myClass/myclasshelperone');
const myClassHelperOneInstance = new MyClassHelperOne(myClassInstance);
const paramOne = 1;
const paramTwo = 2;

describe('MyClassHelperOne - constructor', () => {
  it('should return a new MyClassHelperOne instance', () => {
    expect(myClassHelperOneInstance).to.be.an.instanceOf(MyClassHelperOne);
  });

  it('should have property myClass', () => {
    expect(myClassHelperOneInstance).to.have.property('myClass', myClassInstance);
  });
});

describe('MyClassHelperOne - myMethodOne', () => {
  it('should return first param', function() {
    expect(myClassHelperOneInstance.myMethod(paramOne, paramTwo)).to.be.equal(paramOne + paramTwo);
  });
});
