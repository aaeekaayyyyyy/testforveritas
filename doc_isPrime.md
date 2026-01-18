# isPrime

## Perfect Documentation

Determines whether a given number is a prime number.

### Parameters
- `num` (number): The number to check for primality

### Returns
- `boolean`: True if the number is prime, false otherwise

### Examples
```javascript
isPrime(7)   // Returns true
isPrime(10)  // Returns false
isPrime(2)   // Returns true
```

### Algorithm Notes
The function efficiently checks divisibility up to the square root of the number, skipping even numbers after checking for 2.
