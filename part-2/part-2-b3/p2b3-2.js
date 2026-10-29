/* B1. Algorithm / Logic Test


2. Create a simple calculator using HTML and JavaScript 
(Number 1 input, Number 2 input, a Calculate button, and a displayed Result — e.g. 2 + 3 = 5). */

const add = function (a, b) { 
    return a + b; 
};

// Grab the HTML elements
const inputA = document.getElementById('num1');
const inputB = document.getElementById('num2');
const button = document.getElementById('addBtn');
const resultDisplay = document.getElementById('result');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Extract and convert values to numbers
    const valueA = Number(inputA.value);
    const valueB = Number(inputB.value);

    // Execute function and display result
    const total = add(valueA, valueB);
    resultDisplay.textContent = total;
});