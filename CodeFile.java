public class CodeFile {
    
    /**
     * Calculates the factorial of a given non-negative integer.
     * 
     * @param n The non-negative integer for which to calculate factorial
     * @return The factorial of n (n!). Returns 1 if n is 0 or 1.
     * @throws IllegalArgumentException if n is negative
     */
    public static long calculateFactorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial is not defined for negative numbers");
        }
        if (n == 0 || n == 1) {
            return 1;
        }
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    public static String reverseString(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }
        StringBuilder reversed = new StringBuilder();
        for (int i = input.length() - 1; i >= 0; i--) {
            reversed.append(input.charAt(i));
        }
        return reversed.toString();
    }
}
