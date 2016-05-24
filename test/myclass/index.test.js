'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const sinon = require('sinon');
require('sinon-as-promised');

const MyClass = require('../../lib/myClass/index');
const myMethodOne = require('../../lib/myClass/mymethodone');
const myMethodTwo = require('../../lib/myClass/mymethodtwo');
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
});

describe('MyClass - myMethodOneOriginal', () => {
  it('should return sum of two params', () => {
    expect(myClassInstance.myMethodOneOriginal(1, 2)).to.equal(3);
  });
});

describe('MyClass - myMethodOne', () => {
  it('should return myMethodOne method', function() {
    expect(myClassInstance.myMethodOne).to.be.equal(myMethodOne);
  });
});

describe('MyClass - myMethodTwoOriginal', () => {
  it('should return myClassInstance.myString', function() {
    expect(myClassInstance.myMethodTwoOriginal(1, 2)).to.be.equal(myClassInstance.myString);
  });
});

describe('MyClass - myMethodTwo', () => {
  let myclass;
  const bound = function mockBoundMyMethodTwo() {
    return 'mock';
  };
  before(() => {
    sinon.stub(myMethodTwo, 'bind', () => {
      return bound;
    });
    myclass = new MyClass(argOne, argTwo);
  });

  it('should return myMethodTwo method bounded with this', function() {
    expect(myclass.myMethodTwo).to.be.equal(bound);
  });

  after(() => {
    myMethodTwo.bind.restore();
  });
});
