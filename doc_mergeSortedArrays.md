# mergeSortedArrays

## Perfect Documentation

Merges two sorted arrays into a single sorted array using the two-pointer technique.

### Parameters
- `arr1` (number[]): First sorted array of numbers
- `arr2` (number[]): Second sorted array of numbers

### Returns
- `number[]`: A new array containing all elements from both arrays in sorted order

### Time Complexity
O(n + m) where n and m are the lengths of arr1 and arr2 respectively

### Examples
```typescript
mergeSortedArrays([1, 3, 5], [2, 4, 6])
// Returns: [1, 2, 3, 4, 5, 6]

mergeSortedArrays([10], [5, 15])
// Returns: [5, 10, 15]
```
