/* B1. Algorithm / Logic Test


1. Given the following input array, write a function to sort it from smallest to largest:
Input : [ 23, 7, 42, 19, 36, 12, 4, 45, 29, 31 ]
Output : [ 4, 7, 12, 19, 23, 29, 31, 36, 42, 45 ] */

const input = [23, 7, 42, 19, 36, 12, 4, 45, 29, 31];
const output = [4, 7, 12, 19, 23, 29, 31, 36, 42, 45];

function compareNumbers (a, b) {
    return a - b;
};

input.sort(compareNumbers);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort