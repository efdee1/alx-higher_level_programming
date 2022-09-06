#!/usr/bin/node
const myObject = {
<<<<<<< HEAD
	type: 'object',
	value: 12
};
console.log(myObject);
myObject.incr = function () {
	this.value++;
=======
  type: 'object',
  value: 12
};
console.log(myObject);
myObject.incr = function () {
  this.value++;
>>>>>>> db1c30065267d2bd5ab0ea98358626eeeb705096
};
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
