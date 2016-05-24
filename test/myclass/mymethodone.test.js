'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const myMethodOne = require('../../lib/myClass/mymethodone');
const paramOne = 1;
const paramTwo = 2;

describe('MyClass - myMethodOne', () => {
  it('should return first param', function() {
    expect(myMethodOne(paramOne, paramTwo)).to.be.equal(paramOne + paramTwo);
  });
});
