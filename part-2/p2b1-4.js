/* B1. Algorithm / Logic Test


4. Write a function to find the letter that appears most frequently in a word (case insensitive).
Example: if the given word is 'Hello World', the result should be the letter L. */

function findMostFrequentLetter(sentence) {
  const cleanText = sentence.toLowerCase().replace(/[^a-z]/g, '');
  
  const charMap = {};
  let maxCount = 0;
  let maxChar = '';

  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    
    charMap[char] = (charMap[char] || 0) + 1;
    
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return { letter: maxChar, count: maxCount };
}

const text = "Hello World"; 
console.log(findMostFrequentLetter(text)); 
