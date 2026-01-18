/**
 * Merges two sorted arrays into a single sorted array.
 * 
 * @param arr1 - First sorted array of numbers
 * @param arr2 - Second sorted array of numbers
 * @returns A new array containing all elements from both arrays in sorted order
 * @example
 * mergeSortedArrays([1, 3, 5], [2, 4, 6])
 * // Returns: [1, 2, 3, 4, 5, 6]
 */
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
    
    return merged;
}

// Finds the maximum value in an array
function findMaxValue(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return Math.max(...numbers);
}
