# reverseString

Reverses a given string character by character.

### Parameters
- `input` (String): The string to reverse. Can be null or empty.

### Returns
- `String`: The reversed string. Returns the original string if input is null or empty.

### Examples
```java
reverseString("hello")  // Returns "olleh"
reverseString("")       // Returns ""
reverseString(null)     // Returns null
```

### Algorithm
Uses a StringBuilder and iterates through the input string in reverse order.
