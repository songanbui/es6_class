'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const sinon = require('sinon');
require('sinon-as-promised');

const MyClass = require('../../lib/myClass/index');
const MyClassHelperOne = require('../../lib/myClass/myclasshelperone');
const MyClassHelperTwo = require('../../lib/myClass/myclasshelpertwo');
const argOne = 'foo';
const argTwo = 'bar';
const myClassInstance = new MyClass(argOne, argTwo);

describe('MyClass - constructor', () => {
  it('should return a new MyClass instance', () => {
    expect(myClassInstance).to.be.an.instanceOf(MyClass);
  });

  it('should have property myString', () => {
    expect(myClassInstance).to.have.property('myString', argOne);
  });

  it('should have property myArray', () => {
    expect(myClassInstance).to.have.property('myArray').and.to.be.an('Array');
    expect(myClassInstance.myArray).to.contain(argOne);
    expect(myClassInstance.myArray).to.contain(argTwo);
  });

  it('should have property myFoobar', () => {
    expect(myClassInstance).to.have.property('myFoobar').and.to.be.an('object');
    expect(myClassInstance.myFoobar).to.have.property('one', argOne);
    expect(myClassInstance.myFoobar).to.have.property('two', argTwo);
  });

  it('should have property myClassHelperOne', () => {
    expect(myClassInstance).to.have.property('myClassHelperOne')
      .and.to.be.an.instanceof(MyClassHelperOne);
  });

  it('should have property myClassHelperTwo', () => {
    expect(myClassInstance).to.have.property('myClassHelperTwo')
      .and.to.be.an.instanceof(MyClassHelperTwo);
  });
});

describe('MyClass - myMethodOneOriginal', () => {
  it('should return sum of two params', () => {
    expect(myClassInstance.myMethodOneOriginal(1, 2)).to.equal(3);
  });
});

describe('MyClass - myMethodOne', () => {
  it('should return myMethodOne method', function() {
    expect(myClassInstance.myMethodOne).to.be.equal(myClassInstance.myClassHelperOne.myMethod);
  });
});

describe('MyClass - myMethodTwoOriginal', () => {
  it('should return myClassInstance.myString', function() {
    expect(myClassInstance.myMethodTwoOriginal(1, 2)).to.be.equal(myClassInstance.myString);
  });
});

describe('MyClass - myMethodOne', () => {
  it('should return myMethodOne method', function() {
    expect(myClassInstance.myMethodOne).to.be.equal(myClassInstance.myClassHelperOne.myMethod);
  });
});
