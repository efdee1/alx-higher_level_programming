#!/usr/bin/node
<<<<<<< HEAD
let num = process.argv[2];

if (!isNaN(parseInt(process.argv[2]))) {
  for (let i = 0; i < num; i++) {
=======
const x = Math.floor(Number(process.argv[2]));
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
>>>>>>> db1c30065267d2bd5ab0ea98358626eeeb705096
    console.log('C is fun');
  }
}
