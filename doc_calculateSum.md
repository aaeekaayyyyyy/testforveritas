# calculateSum

This function calculates the average of numbers in an array.

### Parameters
- `numbers` (Array): An array of numbers to calculate average from. Must be an array, throws error if not.

### Returns
- `number`: The average of all numbers in the array, calculated by dividing sum by count.

### Throws
- `Error`: Thrown when input is not an array

### Examples
```javascript
calculateSum([1, 2, 3])  // Returns 2 (average)
calculateSum([10, 20])   // Returns 15
```

### Notes
Handles null or undefined values by treating them as 0 when calculating average.
