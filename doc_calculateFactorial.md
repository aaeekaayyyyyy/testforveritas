# calculateFactorial

## Perfect Documentation

This function calculates the factorial of a non-negative integer.

### Parameters
- `n` (int): The non-negative integer for which to calculate factorial. Must be >= 0.

### Returns
- `long`: The factorial of n (n!). For n=0 or n=1, returns 1.

### Throws
- `IllegalArgumentException`: Thrown when n is negative

### Examples
```java
long result1 = calculateFactorial(5);  // Returns 120
long result2 = calculateFactorial(0);  // Returns 1
```

### Algorithm
The function uses an iterative approach, multiplying all integers from 2 to n.
