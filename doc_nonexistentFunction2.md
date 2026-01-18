# parseJSONString

## Orphan Documentation

Parses a JSON string and returns a JavaScript object.

### Parameters
- `jsonString` (string): A valid JSON string to parse

### Returns
- `object`: The parsed JavaScript object

### Throws
- `SyntaxError`: If the JSON string is malformed

### Examples
```javascript
parseJSONString('{"name": "John", "age": 30}')
// Returns: { name: "John", age: 30 }
```
