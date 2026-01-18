# findMaxValue

Finds the maximum value in an array of numbers.

### Parameters
- `numbers` (number[]): An array of numbers to search through. Must not be empty.

### Returns
- `number`: The largest number in the array.

### Throws
- `Error`: Thrown when the array is empty (length === 0)

### Examples
```typescript
findMaxValue([1, 5, 3, 9, 2])  // Returns 9
findMaxValue([-10, -5, -20])   // Returns -5
```

### Algorithm
Uses Math.max with spread operator to find the maximum value efficiently.
