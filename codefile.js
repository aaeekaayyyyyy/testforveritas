// Calculate the sum of an array of numbers
function calculateSum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }
    return numbers.reduce((sum, num) => sum + (num || 0), 0);
}

/**
 * Checks if a given number is prime.
 * 
 * @param {number} num - The number to check for primality
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
