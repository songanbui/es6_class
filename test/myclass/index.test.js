'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

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

describe('MyClass - myMethodZero', () => {
  it('should return zero', () => {
    expect(myClassInstance.myMethodZero(1, 2)).to.equal(0);
  });
});

describe('MyClass - myMethodOne', () => {
  it('should return myMethodOne method', function() {
    expect(myClassInstance.myMethodOne).to.be.equal(myMethodOne);
  });
});

describe('MyClass - myMethodOneBis', () => {
  it('should return myMethodOne method', function() {
    expect(myClassInstance.myMethodOneBis).to.be.equal(myMethodOne);
  });
});

describe('MyClass - getMyString', () => {
  it('should return myClassInstance.myString', function() {
    expect(myClassInstance.getMyString(1, 2)).to.be.equal(myClassInstance.myString);
  });
});

describe('MyClass - myMethodTwo', () => {
  it('should return myMethodTwo method bounded with this', function() {
    expect(myClassInstance.myMethodTwo).to.be.equal(myMethodTwo);
  });
});

describe('MyClass - myMethodTwoBis', () => {
  it('should return myMethodTwo method bounded with this', function() {
    expect(myClassInstance.myMethodTwoBis).to.be.equal(myMethodTwo);
  });
});
