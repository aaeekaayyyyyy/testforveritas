# parseJSONString

Parses a JSON string and returns a JavaScript object.

### Parameters
- `jsonString` (string): A valid JSON string to parse. Must be properly formatted JSON.

### Returns
- `object`: The parsed JavaScript object representing the JSON data structure.

### Throws
- `SyntaxError`: If the JSON string is malformed or contains invalid JSON syntax.

### Examples
```javascript
parseJSONString('{"name": "John", "age": 30}')
// Returns: { name: "John", age: 30 }

parseJSONString('[1, 2, 3]')
// Returns: [1, 2, 3]
```

### Usage Notes
This function uses the native JSON.parse() method internally to handle parsing.
