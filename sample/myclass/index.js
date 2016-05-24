'use strict';

const MyClass = require('../../lib/myClass/index');
const argOne = 'foo';
const argTwo = 'bar';
const myClassInstance = new MyClass(argOne, argTwo);

console.log('m1 original: ' + myClassInstance.myMethodOneOriginal(1, 2));
console.log('m1: ' + myClassInstance.myMethodOne(1, 2));
console.log('m2 original: ' + myClassInstance.myMethodTwoOriginal(1, 2));
console.log('m2: ' + myClassInstance.myMethodTwo(1, 2));
