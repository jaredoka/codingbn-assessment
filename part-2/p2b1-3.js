/* B1. Algorithm / Logic Test


3. Write a function to find a sequence of prime numbers based on user input.
Input : 10
Output : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 */


function getPrimeNumbers(limit) {
    let primesFound = 0;
    
    for (let num = 2; primesFound < limit; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; 
                break;
            }
        }

        if (isPrime) {
            console.log(num);
            primesFound++;
        }
    }
}

getPrimeNumbers(10);

