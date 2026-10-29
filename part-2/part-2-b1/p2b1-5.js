/* B1. Algorithm / Logic Test


5. Write a function to count the number of vowels and consonants in a given sentence.
Input : Hello my name is John Doe
Output : 8 Vowels and 12 Consonants */


const sentence = "Hello my name is John Doe";
const vowelsList = "aeiouAEIOU";

let vowelCount = 0;
let consonantCount = 0;

for (const char of sentence) {
  if (char.toLowerCase() !== char.toUpperCase()) {
    if (vowelsList.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++; 
    }
  }
}

console.log(vowelCount + " Vowels and " + consonantCount + " Consonants")